// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $$$$$$$$$0 from "./actions/build.ts";
import * as $$$$$$$$$1 from "./actions/deployments/create.ts";
import * as $$$$$$$$$2 from "./actions/deployments/promote.ts";
import * as $$$$$$$$$3 from "./actions/deployments/rollout.ts";
import * as $$$$$$$$$4 from "./actions/domains/create.ts";
import * as $$$$$$$$$5 from "./actions/domains/delete.ts";
import * as $$$$$$$$$6 from "./actions/routes/delete.ts";
import * as $$$$$$$$$8 from "./actions/sites/create.ts";
import * as $$$$$$$$$9 from "./actions/sites/delete.ts";
import * as $$$$$$$$$7 from "./actions/siteState/upsert.ts";
import * as $$$0 from "./loaders/siteState/get.ts";

const manifest = {
  "loaders": {
    "kubernetes/loaders/siteState/get.ts": $$$0,
  },
  "actions": {
    "kubernetes/actions/build.ts": $$$$$$$$$0,
    "kubernetes/actions/deployments/create.ts": $$$$$$$$$1,
    "kubernetes/actions/deployments/promote.ts": $$$$$$$$$2,
    "kubernetes/actions/deployments/rollout.ts": $$$$$$$$$3,
    "kubernetes/actions/domains/create.ts": $$$$$$$$$4,
    "kubernetes/actions/domains/delete.ts": $$$$$$$$$5,
    "kubernetes/actions/routes/delete.ts": $$$$$$$$$6,
    "kubernetes/actions/sites/create.ts": $$$$$$$$$8,
    "kubernetes/actions/sites/delete.ts": $$$$$$$$$9,
    "kubernetes/actions/siteState/upsert.ts": $$$$$$$$$7,
  },
  "name": "kubernetes",
  "baseUrl": import.meta.url,
};

export type Manifest = typeof manifest;

export default manifest;
