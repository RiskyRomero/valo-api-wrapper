import { z } from "zod";

import { defineEndpoint } from "../schema";

export const ChatRegionSchema = z.object({
  locale: z.string(),
  region: z.string(),
  webLanguage: z.string(),
  webRegion: z.string(),
});

export default defineEndpoint({
  name: "Client Region",
  description: "Gets info about the region and locale from the Riot client",
  type: "local",
  url: "riotclient/region-locale",
  responses: {
    "200": ChatRegionSchema,
  },
});
