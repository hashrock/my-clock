// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/index.tsx";
import * as $1 from "./routes/settings.tsx";
import * as $$0 from "./islands/Clock.tsx";
import * as $$1 from "./islands/SettingsForm.tsx";

const manifest = {
  routes: {
    "./routes/index.tsx": $0,
    "./routes/settings.tsx": $1,
  },
  islands: {
    "./islands/Clock.tsx": $$0,
    "./islands/SettingsForm.tsx": $$1,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
