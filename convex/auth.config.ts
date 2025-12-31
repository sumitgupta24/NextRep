

import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      domain: "https://renewing-halibut-28.clerk.accounts.dev",
      applicationID: "convex",
    },
  ]
} satisfies AuthConfig;