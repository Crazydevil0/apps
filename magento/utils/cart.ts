import { getCookies } from "std/http/cookie.ts";
import { ImageObject } from "../../commerce/types.ts";
import { HttpError } from "../../utils/http.ts";
import cart, { Cart } from "../loaders/cart.ts";
import { AppContext } from "../mod.ts";
import {
  CartFromAPI,
  ItemsWithDecoImage,
  MagentoCardPrices,
} from "./client/types.ts";
import {
  ProductImagesInputs,
  ProductWithImagesGraphQL,
} from "./clientGraphql/types.ts";
import { GetProductImages } from "./clientGraphql/queries.ts";

export const CART_COOKIE = "dataservices_cart_id";
const CART_CUSTOMER_COOKIE = "dataservices_customer_id";

const ONE_WEEK_MS = 7 * 24 * 3600 * 1_000;

export const getCartCookie = (headers: Headers): string => {
  const cookies = getCookies(headers);
  const cartCookie = cookies[CART_COOKIE];
  if (cookies && cartCookie) {
    const decodedCookie = decodeURIComponent(cartCookie || "").replace(
      /"/g,
      "",
    );
    return decodedCookie;
  }

  const setCookieHeader = headers.get("Set-Cookie");
  if (setCookieHeader) {
    const match = setCookieHeader.match(new RegExp(`${CART_COOKIE}=([^;]+)`));
    if (match && match[1]) {
      return decodeURIComponent(match[1]).replace(/"/g, "");
    }
  }
  return "";
};

export const setCartCookie = (headers: Headers, cartId: string) => {
  const encodedCartId = encodeURIComponent(`"${cartId}"`);
  const cookie = `${CART_COOKIE}=${encodedCartId}; Path=/; Expires=${
    new Date(
      Date.now() + ONE_WEEK_MS,
    ).toUTCString()
  }; SameSite=Lax`;
  headers.append("Set-Cookie", cookie);
};

export async function createCart(
  { clientAdmin, site, response }: AppContext,
  headers: Headers,
  forceNewCart = false,
) {
  const cartCookie = getCartCookie(headers);
  const customerCookie = getCookies(headers)[CART_CUSTOMER_COOKIE];

  if ((!cartCookie && !customerCookie) || forceNewCart) {
    const newCart = await createNewCart({ clientAdmin, site }, headers);
    setCartCookie(response.headers, newCart.id.toString());
    return newCart;
  }

  const cart = await clientAdmin["GET /rest/:site/V1/carts/:cartId"]({
    cartId: cartCookie,
    site,
  }).then((res) => res.json());

  return {
    ...cart,
    // deno-lint-ignore no-unused-vars
    items: cart.items.map(({ images, ...rest }) => rest),
  };
}

const createNewCart = async ({
  clientAdmin,
  site,
}: Pick<AppContext, "clientAdmin" | "site">, headers: Headers) => {
  const tokenCart = await clientAdmin["POST /rest/:site/V1/guest-carts"]({
    site,
  }, { headers }).then((res) => res.json());
  const cart = await clientAdmin["GET /rest/:site/V1/guest-carts/:cartId"]({
    cartId: tokenCart,
    site,
  }).then((res) => res.json());
  return await clientAdmin["GET /rest/:site/V1/carts/:cartId"]({
    cartId: cart.id,
    site,
  }).then((res) => res.json());
};

export const toCartItemsWithImages = (
  cart: CartFromAPI,
  prices: MagentoCardPrices,
  { items }: ProductWithImagesGraphQL["products"],
  url: string,
  site: string,
  countProductImageInCart: number,
): Cart => {
  const itemsWithImages = cart.items.map<ItemsWithDecoImage>((product) => {
    const productData = items.find(({ sku }) => sku === product.sku);
    const images = productData?.media_gallery;
    const selectedImages = images?.sort((a, b) => a.position - b.position)
      .reduce<ImageObject[]>((acc, media) => {
        if (acc.length === countProductImageInCart) {
          return acc;
        }
        return [...acc, {
          "@type": "ImageObject" as const,
          encodingFormat: "image",
          alternateName: product.name,
          url: media.url,
        }];
      }, []);

    const urlKey = productData?.url_key;

    return {
      ...product,
      price_total: product.qty * product.price,
      images: selectedImages,
      url: `${url}/${site}/${urlKey}`,
    };
  });

  return {
    ...cart,
    items: itemsWithImages,
    totalizers: {
      grand_total: prices.grand_total,
      subtotal: prices.subtotal,
      discount_amount: prices.discount_amount,
      shipping_amount: prices.shipping_amount,
      shipping_discount_amount: prices.shipping_discount_amount,
      base_currency_code: prices?.base_currency_code,
      base_discount_amount: prices.base_discount_amount,
      base_shipping_amount: prices.base_shipping_amount,
      base_subtotal: prices.base_subtotal,
      coupon_code: prices.coupon_code,
    },
  };
};

export async function postNewItem(
  site: string,
  cartId: string,
  body: {
    cartItem: {
      qty: number;
      quote_id: string;
      sku: string;
    };
  },
  clientAdmin: AppContext["clientAdmin"],
  headers: Headers,
): Promise<void> {
  await clientAdmin["POST /rest/:site/V1/carts/:quoteId/items"](
    {
      quoteId: cartId,
      site: site,
    },
    { body, headers },
  );
}

export const handleCartError = (
  // deno-lint-ignore no-explicit-any
  error: any,
) => {
  if (error instanceof HttpError) {
    return {
      message: JSON.parse(error.message).message,
      status: error.status,
    };
  }
  return error;
};

export async function handleCartActions(dontReturnCart: boolean, settings: {
  req: Request;
  ctx: AppContext;
  // deno-lint-ignore no-explicit-any
  error?: any;
  cartId?: string;
}) {
  const { error, cartId } = settings;
  const handledError = error ? handleCartError(error) as Cart : undefined;

  if (dontReturnCart) {
    return handledError ?? null;
  }

  return {
    ...(await cart({ cartId }, settings.req, settings.ctx)),
    ...handledError,
  } as Cart;
}

export async function getCartImages(
  skus: Array<string>,
  ctx: AppContext,
) {
  return await ctx.clientGraphql.query<
    ProductWithImagesGraphQL,
    ProductImagesInputs
  >(
    {
      variables: {
        filter: { sku: { in: skus.map((sku) => sku) } },
        pageSize: skus.length,
      },
      ...GetProductImages,
    },
  );
}
