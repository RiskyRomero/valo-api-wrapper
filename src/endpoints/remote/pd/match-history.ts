import { z } from "zod";

import {
  matchIDSchema,
  millisSchema,
  playerUUIDSchema,
  queueIDSchema,
} from "~/endpoints/common-types";

import { defineEndpoint } from "../../schema";

export default defineEndpoint({
  name: "Match History",
  description: "Get the match history for the given player",
  type: "pd",
  url: "match-history/v1/history/:puuid",
  query: z.object({
    startIndex: z
      .number()
      .optional()
      .describe("The index of the first match to return. Defaults to 0"),
    endIndex: z
      .number()
      .optional()
      .describe("The index of the last match to return. Defaults to 10"),
    queue: z
      .string()
      .optional()
      .describe("The queue to filter by. Defaults to all queues"),
  }),
  responses: {
    "200": z.object({
      Subject: playerUUIDSchema,
      BeginIndex: z.number(),
      EndIndex: z.number(),
      Total: z.number(),
      History: z.array(
        z.object({
          MatchID: matchIDSchema,
          GameStartTime: millisSchema,
          QueueID: queueIDSchema,
        }),
      ),
    }),
  },
});
