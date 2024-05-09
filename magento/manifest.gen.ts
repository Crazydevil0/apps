// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $$$$$$$$$0 from "./actions/cart/addItem.ts";
import * as $$$$$$$$$1 from "./actions/cart/removeItem.ts";
import * as $$$$$$$$$2 from "./actions/cart/simulation.ts";
import * as $$$$$$$$$3 from "./actions/cart/updateItem.ts";
import * as $$$0 from "./loaders/cart.ts";
import * as $$$1 from "./loaders/productDetailsPage.ts";

const manifest = {
  "loaders": {
    "magento/loaders/cart.ts": $$$0,
    "magento/loaders/productDetailsPage.ts": $$$1,
  },
  "actions": {
    "magento/actions/cart/addItem.ts": $$$$$$$$$0,
    "magento/actions/cart/removeItem.ts": $$$$$$$$$1,
    "magento/actions/cart/simulation.ts": $$$$$$$$$2,
    "magento/actions/cart/updateItem.ts": $$$$$$$$$3,
  },
  "name": "magento",
  "baseUrl": import.meta.url,
};

export type Manifest = typeof manifest;

export default manifest;
