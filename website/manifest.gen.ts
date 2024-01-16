// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $$$$$$$$$0 from "./actions/secrets/encrypt.ts";
import * as $$$$$$$$0 from "./flags/audience.ts";
import * as $$$$$$$$1 from "./flags/everyone.ts";
import * as $$$$$$$$2 from "./flags/flag.ts";
import * as $$$$$$$$3 from "./flags/multivariate.ts";
import * as $$$$$$$$4 from "./flags/multivariate/message.ts";
import * as $$$$$$$$5 from "./flags/multivariate/page.ts";
import * as $$$$$$$$6 from "./flags/multivariate/section.ts";
import * as $0 from "./functions/requestToParam.ts";
import * as $$$$0 from "./handlers/fresh.ts";
import * as $$$$1 from "./handlers/proxy.ts";
import * as $$$$2 from "./handlers/redirect.ts";
import * as $$$$3 from "./handlers/router.ts";
import * as $$$$4 from "./handlers/sitemap.ts";
import * as $$$0 from "./loaders/asset.ts";
import * as $$$1 from "./loaders/extension.ts";
import * as $$$2 from "./loaders/fonts/googleFonts.ts";
import * as $$$3 from "./loaders/fonts/local.ts";
import * as $$$4 from "./loaders/image.ts";
import * as $$$5 from "./loaders/options/routes.ts";
import * as $$$6 from "./loaders/options/urlParams.ts";
import * as $$$7 from "./loaders/pages.ts";
import * as $$$8 from "./loaders/redirect.ts";
import * as $$$9 from "./loaders/redirects.ts";
import * as $$$10 from "./loaders/redirectsFromCsv.ts";
import * as $$$11 from "./loaders/secret.ts";
import * as $$$12 from "./loaders/secretString.ts";
import * as $$$$$$$0 from "./matchers/always.ts";
import * as $$$$$$$1 from "./matchers/cookie.ts";
import * as $$$$$$$2 from "./matchers/cron.ts";
import * as $$$$$$$3 from "./matchers/date.ts";
import * as $$$$$$$4 from "./matchers/device.ts";
import * as $$$$$$$5 from "./matchers/environment.ts";
import * as $$$$$$$6 from "./matchers/host.ts";
import * as $$$$$$$7 from "./matchers/location.ts";
import * as $$$$$$$8 from "./matchers/multi.ts";
import * as $$$$$$$9 from "./matchers/negate.ts";
import * as $$$$$$$10 from "./matchers/never.ts";
import * as $$$$$$$11 from "./matchers/queryString.ts";
import * as $$$$$$$12 from "./matchers/random.ts";
import * as $$$$$$$13 from "./matchers/site.ts";
import * as $$$$$$$14 from "./matchers/userAgent.ts";
import * as $$$$$0 from "./pages/Page.tsx";
<<<<<<< HEAD
import * as $$$$$$0 from "./sections/Analytics/Analytics.tsx";
import * as $$$$$$1 from "./sections/Rendering/Deferred.tsx";
import * as $$$$$$2 from "./sections/Seo/Seo.tsx";
import * as $$$$$$3 from "./sections/Seo/SeoV2.tsx";
=======
import * as $$$$$$0 from "./sections/Rendering/Deferred.tsx";
import * as $$$$$$1 from "./sections/Seo/Seo.tsx";
import * as $$$$$$2 from "./sections/Analytics/Events.tsx";
import * as $$$$$$3 from "./sections/Analytics/Analytics.tsx";
import * as $$$$$$$0 from "./matchers/date.ts";
import * as $$$$$$$1 from "./matchers/environment.ts";
import * as $$$$$$$2 from "./matchers/site.ts";
import * as $$$$$$$3 from "./matchers/location.ts";
import * as $$$$$$$4 from "./matchers/cookie.ts";
import * as $$$$$$$5 from "./matchers/random.ts";
import * as $$$$$$$6 from "./matchers/multi.ts";
import * as $$$$$$$7 from "./matchers/never.ts";
import * as $$$$$$$8 from "./matchers/negate.ts";
import * as $$$$$$$9 from "./matchers/cron.ts";
import * as $$$$$$$10 from "./matchers/device.ts";
import * as $$$$$$$11 from "./matchers/host.ts";
import * as $$$$$$$12 from "./matchers/always.ts";
import * as $$$$$$$13 from "./matchers/userAgent.ts";
import * as $$$$$$$$0 from "./flags/multivariate/section.ts";
import * as $$$$$$$$1 from "./flags/multivariate/page.ts";
import * as $$$$$$$$2 from "./flags/multivariate/message.ts";
import * as $$$$$$$$3 from "./flags/audience.ts";
import * as $$$$$$$$4 from "./flags/multivariate.ts";
import * as $$$$$$$$5 from "./flags/everyone.ts";
import * as $$$$$$$$6 from "./flags/flag.ts";
import * as $$$$$$$$$0 from "./actions/secrets/encrypt.ts";
>>>>>>> 87002f5 (first event test)

const manifest = {
  "functions": {
    "website/functions/requestToParam.ts": $0,
  },
  "loaders": {
    "website/loaders/asset.ts": $$$0,
    "website/loaders/extension.ts": $$$1,
    "website/loaders/fonts/googleFonts.ts": $$$2,
    "website/loaders/fonts/local.ts": $$$3,
    "website/loaders/image.ts": $$$4,
    "website/loaders/options/routes.ts": $$$5,
    "website/loaders/options/urlParams.ts": $$$6,
    "website/loaders/pages.ts": $$$7,
    "website/loaders/redirect.ts": $$$8,
    "website/loaders/redirects.ts": $$$9,
    "website/loaders/redirectsFromCsv.ts": $$$10,
    "website/loaders/secret.ts": $$$11,
    "website/loaders/secretString.ts": $$$12,
  },
  "handlers": {
    "website/handlers/fresh.ts": $$$$0,
    "website/handlers/proxy.ts": $$$$1,
    "website/handlers/redirect.ts": $$$$2,
    "website/handlers/router.ts": $$$$3,
    "website/handlers/sitemap.ts": $$$$4,
  },
  "pages": {
    "website/pages/Page.tsx": $$$$$0,
  },
  "sections": {
<<<<<<< HEAD
    "website/sections/Analytics/Analytics.tsx": $$$$$$0,
    "website/sections/Rendering/Deferred.tsx": $$$$$$1,
    "website/sections/Seo/Seo.tsx": $$$$$$2,
    "website/sections/Seo/SeoV2.tsx": $$$$$$3,
=======
    "website/sections/Analytics/Analytics.tsx": $$$$$$3,
    "website/sections/Analytics/Events.tsx": $$$$$$2,
    "website/sections/Rendering/Deferred.tsx": $$$$$$0,
    "website/sections/Seo/Seo.tsx": $$$$$$1,
>>>>>>> 87002f5 (first event test)
  },
  "matchers": {
    "website/matchers/always.ts": $$$$$$$0,
    "website/matchers/cookie.ts": $$$$$$$1,
    "website/matchers/cron.ts": $$$$$$$2,
    "website/matchers/date.ts": $$$$$$$3,
    "website/matchers/device.ts": $$$$$$$4,
    "website/matchers/environment.ts": $$$$$$$5,
    "website/matchers/host.ts": $$$$$$$6,
    "website/matchers/location.ts": $$$$$$$7,
    "website/matchers/multi.ts": $$$$$$$8,
    "website/matchers/negate.ts": $$$$$$$9,
    "website/matchers/never.ts": $$$$$$$10,
    "website/matchers/queryString.ts": $$$$$$$11,
    "website/matchers/random.ts": $$$$$$$12,
    "website/matchers/site.ts": $$$$$$$13,
    "website/matchers/userAgent.ts": $$$$$$$14,
  },
  "flags": {
    "website/flags/audience.ts": $$$$$$$$0,
    "website/flags/everyone.ts": $$$$$$$$1,
    "website/flags/flag.ts": $$$$$$$$2,
    "website/flags/multivariate.ts": $$$$$$$$3,
    "website/flags/multivariate/message.ts": $$$$$$$$4,
    "website/flags/multivariate/page.ts": $$$$$$$$5,
    "website/flags/multivariate/section.ts": $$$$$$$$6,
  },
  "actions": {
    "website/actions/secrets/encrypt.ts": $$$$$$$$$0,
  },
  "name": "website",
  "baseUrl": import.meta.url,
};

export type Manifest = typeof manifest;

export default manifest;
