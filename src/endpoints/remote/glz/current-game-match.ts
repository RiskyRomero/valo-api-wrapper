import { z } from "zod";

import {
  cardIDSchema,
  characterIDSchema,
  currentGameIDSchema,
  gameModeSchema,
  mapIDSchema,
  playerUUIDSchema,
  preferredLevelBorderIDSchema,
  seasonIDSchema,
  titleIDSchema,
} from "../../common-types";
import { defineEndpoint } from "../../schema";

export const CurrentGameMatchResponseSchema = z.object({
  MatchID: currentGameIDSchema,
  Version: z.number(),
  State: z.enum(["IN_PROGRESS"]), //TODO verify
  MapID: mapIDSchema,
  ModeID: gameModeSchema,
  ProvisioningFlow: z.enum(["Matchmaking", "CustomGame"]),
  GamePodID: z.string(),
  AllMUCName: z.string().describe('Chat room ID for "all" chat'),
  TeamMUCName: z.string().describe('Chat room ID for "team" chat'),
  TeamVoiceID: z.string(),
  TeamMatchToken: z
    .string()
    .describe("JWT containing match ID, participant IDs, and match region"),
  IsReconnectable: z.boolean(),
  ConnectionDetails: z.object({
    GameServerHosts: z.array(z.string()),
    GameServerHost: z.string(),
    GameServerPort: z.number(),
    GameServerObfuscatedIP: z.number(),
    GameClientHash: z.number(),
    PlayerKey: z.string(),
  }),
  PostGameDetails: z.null(),
  Players: z.array(
    z.object({
      Subject: playerUUIDSchema,
      TeamID: z.enum(["Blue", "Red"]).or(playerUUIDSchema),
      CharacterID: characterIDSchema,
      PlayerIdentity: z.object({
        Subject: playerUUIDSchema,
        PlayerCardID: cardIDSchema,
        PlayerTitleID: titleIDSchema,
        AccountLevel: z.number(),
        PreferredLevelBorderID: preferredLevelBorderIDSchema,
        Incognito: z.boolean(),
        HideAccountLevel: z.boolean(),
      }),
      SeasonalBadgeInfo: z.object({
        SeasonID: seasonIDSchema.or(z.literal("")),
        NumberOfWins: z.number(),
        WinsByTier: z.null(),
        Rank: z.number(),
        LeaderboardRank: z.number(),
      }),
      IsCoach: z.boolean(),
      IsAssociated: z.boolean(),
    }),
  ),
  MatchmakingData: z.null(),
});

export default defineEndpoint({
  name: "Current Game Match",
  description: "Get the current game match info",
  type: "glz",
  url: "core-game/v1/matches/:currentGameMatchId",
  responses: {
    "200": CurrentGameMatchResponseSchema,
  },
});
