import { z } from "zod";

import { defineEndpoint } from "../../schema";

export const PartyVoiceTokenResponseSchema = z.object({
  Token: z.string(),
  Room: z.string(),
})

export default defineEndpoint({
  name: "Party Voice Token",
  description: "Get the party voice token",
  type: "glz",
  url: "parties/v1/parties/:partyId/voicetoken",
  responses: {
    "200": PartyVoiceTokenResponseSchema
  },
});
