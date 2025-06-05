import { z } from "zod";

import {
  armorIDSchema,
  characterIDSchema,
  gameModeSchema,
  itemIDSchema,
  mapIDSchema,
  matchIDSchema,
  millisSchema,
  partyIDSchema,
  playerUUIDSchema,
  queueIDSchema,
  seasonIDSchema,
  xpModificationIDSchema,
} from "~/endpoints/common-types";

import { defineEndpoint } from "../../schema";

export const matchDetailsResponseSchema = z.object({
  matchInfo: z.object({
    matchId: matchIDSchema,
    mapId: mapIDSchema,
    gamePodId: z.string(),
    gameLoopZone: z.string(),
    gameServerAddress: z.string(),
    gameVersion: z.string(),
    gameLengthMillis: millisSchema || null,
    gameStartMillis: millisSchema,
    provisioningFlowID: z.enum(["Matchmaking", "CustomGame"]),
    isCompleted: z.boolean(),
    customGameName: z.string(),
    forcePostProcessing: z.boolean(),
    queueID: queueIDSchema,
    gameMode: gameModeSchema,
    isRanked: z.boolean(),
    isMatchSampled: z.boolean(),
    seasonId: seasonIDSchema,
    completionState: z.enum(["Surrendered", "Completed", "VoteDraw", ""]),
    platformType: z.string(),
    premierMatchInfo: z.object({}),
    partyRRPenalties: z.record(z.number()).optional(),
    shouldMatchDisablePenalties: z.boolean(),
  }),
  players: z.array(
    z.object({
      subject: playerUUIDSchema,
      gameName: z.string(),
      tagLine: z.string(),
      platformInfo: z.object({
        platformType: z.string(),
        platformOS: z.string(),
        platformOSVersion: z.string(),
        platformChipset: z.string(),
      }),
      teamId: z.enum(["Blue", "Red"]) || z.string(),
      partyId: partyIDSchema,
      characterId: characterIDSchema,
      stats:
        z.object({
          score: z.number(),
          roundsPlayed: z.number(),
          kills: z.number(),
          deaths: z.number(),
          assists: z.number(),
          playtimeMillis: millisSchema,
          abilityCasts: z
            .object({
              grenadeCasts: z.number(),
              ability1Casts: z.number(),
              ability2Casts: z.number(),
              ultimateCasts: z.number(),
            })
            .nullable()
            .optional(),
        }) || null,
      roundDamage:
        z.array(
          z.object({
            round: z.number(),
            receiver: playerUUIDSchema,
            damage: z.number(),
          }),
        ) || null,
      competitiveTier: z.number(),
      isObserver: z.boolean(),
      playerCard: z.string(),
      playerTitle: z.string(),
      preferredLevelBorder: z.string().optional(),
      accountLevel: z.number(),
      sessionPlaytimeMinutes: z.number().optional(),
      xpModifications: z
        .array(
          z.object({
            // XP Multiplier
            Value: z.number(),
            ID: xpModificationIDSchema,
          }),
        )
        .optional(),
      behaviorFactors: z
        .object({
          afkRounds: z.number(),
          collisions: z.number().optional(),
          commsRatingRecovery: z.number(),
          damageParticipationOutgoing: z.number(),
          friendlyFireIncoming: z.number().optional(),
          friendlyFireOutgoing: z.number().optional(),
          mouseMovement: z.number().optional(),
          stayedInSpawnRounds: z.number().optional(),
        })
        .optional(),
      newPlayerExperienceDetails: z
        .object({
          basicMovement: z.object({
            idleTimeMillis: z.number(),
            objectiveCompleteTimeMillis: z.number(),
          }),
          basicGunSkill: z.object({
            idleTimeMillis: z.number(),
            objectiveCompleteTimeMillis: z.number(),
          }),
          adaptiveBots: z.object({
            adaptiveBotAverageDurationMillisAllAttempts: z.number(),
            adaptiveBotAverageDurationMillisFirstAttempt: z.number(),
            killDetailsFirstAttempt: z.null(),
            idleTimeMillis: z.number(),
            objectiveCompleteTimeMillis: z.number(),
          }),
          ability: z.object({
            idleTimeMillis: z.number(),
            objectiveCompleteTimeMillis: z.number(),
          }),
          bombPlant: z.object({
            idleTimeMillis: z.number(),
            objectiveCompleteTimeMillis: z.number(),
          }),
          defendBombSite: z.object({
            success: z.boolean(),
            idleTimeMillis: z.number(),
            objectiveCompleteTimeMillis: z.number(),
          }),
          settingStatus: z.object({
            isMouseSensitivityDefault: z.boolean(),
            isCrosshairDefault: z.boolean(),
          }),
          versionString: z.string(),
        })
        .optional(),
    }),
  ),
  bots: z.array(z.unknown()),
  coaches: z.array(
    z.object({
      subject: playerUUIDSchema,
      teamId: z.enum(["Blue", "Red"]),
    }),
  ),
  teams: z
    .array(
      z.object({
        teamId: z.enum(["Blue", "Red"]) || z.string(),
        won: z.boolean(),
        roundsPlayed: z.number(),
        roundsWon: z.number(),
        numPoints: z.number(),
      }),
    )
    .optional(),
  roundResults:
    z.array(
      z.object({
        roundNum: z.number(),
        roundResult: z.enum([
          "Eliminated",
          "Bomb detonated",
          "Bomb defused",
          "Surrendered",
          "Round timer expired",
        ]),
        roundCeremony: z.enum([
          "CeremonyDefault",
          "CeremonyTeamAce",
          "CeremonyFlawless",
          "CeremonyCloser",
          "CeremonyClutch",
          "CeremonyThrifty",
          "CeremonyAce",
          "",
        ]),
        winningTeam: z.enum(["Blue", "Red"]) || z.string(),
        bombPlanter: z.string().optional(),
        bombDefuser: z.enum(["Blue", "Red"]) || z.string().optional(),
        plantRoundTime: z.number().optional(),
        plantPlayerLocations: z
          .array(
            z.object({
              subject: playerUUIDSchema,
              viewRadians: z.number(),
              location: z.object({
                x: z.number(),
                y: z.number(),
              }),
            }),
          )
          .optional(),
        plantLocation: z.object({
          x: z.number(),
          y: z.number(),
        }),
        plantSite: z.enum(["A", "B", "C", ""]),
        defuseRoundTime: z.number().optional(),
        defusePlayerLocations: z
          .array(
            z.object({
              subject: playerUUIDSchema,
              viewRadians: z.number(),
              location: z.object({
                x: z.number(),
                y: z.number(),
              }),
            }),
          )
          .optional(),
        defuseLocation: z.object({
          x: z.number(),
          y: z.number(),
        }),
        playerStats: z.array(
          z.object({
            subject: playerUUIDSchema,
            kills: z.array(
              z.object({
                gameTime: millisSchema,
                roundTime: millisSchema,
                killer: playerUUIDSchema,
                victim: playerUUIDSchema,
                victimLocation: z.object({
                  x: z.number(),
                  y: z.number(),
                }),
                assistants: z.array(z.string()),
                playerLocations: z.array(
                  z.object({
                    subject: playerUUIDSchema,
                    viewRadians: z.number(),
                    location: z.object({
                      x: z.number(),
                      y: z.number(),
                    }),
                  }),
                ),
                finishingDamage: z.object({
                  damageType: z.enum([
                    "Weapon",
                    "Bomb",
                    "Ability",
                    "Fall",
                    "Melee",
                    "Invalid",
                    "",
                  ]),
                  damageItem: z.union([
                    z.literal(""),
                    z.literal("Ultimate"),
                    z.literal("Ability1"),
                    z.literal("Ability2"),
                    z.literal("GrenadeAbility"),
                    z.literal("Primary"),
                    z.string(),
                  ]),
                  isSecondaryFireMode: z.boolean(),
                }),
              }),
            ),
            damage: z.array(
              z.object({
                receiver: playerUUIDSchema,
                damage: z.number(),
                legshots: z.number(),
                bodyshots: z.number(),
                headshots: z.number(),
              }),
            ),
            score: z.number(),
            economy: z.object({
              loadoutValue: z.number(),
              weapon: itemIDSchema,
              armor: armorIDSchema,
              remaining: z.number(),
              spent: z.number(),
            }),
            ability: z.object({
              grenadeEffects: z.null(),
              ability1Effects: z.null(),
              ability2Effects: z.null(),
              ultimateEffects: z.null(),
            }),
            wasAfk: z.boolean(),
            wasPenalized: z.boolean(),
            stayedInSpawn: z.boolean(),
          }),
        ),
        roundResultCode: z.enum([
          "Elimination",
          "Detonate",
          "Defuse",
          "Surrendered",
          "",
        ]),
        playerEconomies:
          z.array(
            z.object({
              subject: playerUUIDSchema,
              loadoutValue: z.number(),
              weapon: itemIDSchema,
              armor: armorIDSchema,
              remaining: z.number(),
              spent: z.number(),
            }),
          ) || z.null(),
        playerScores:
          z.array(
            z.object({
              subject: playerUUIDSchema,
              score: z.number(),
            }),
          ) || z.null(),
      }),
    ) || z.null(),
  kills:
    z.array(
      z.object({
        gameTime: millisSchema,
        roundTime: millisSchema,
        killer: playerUUIDSchema,
        victim: playerUUIDSchema,
        victimLocation: z.object({
          x: z.number(),
          y: z.number(),
        }),
        assistants: z.array(z.string()),
        playerLocations: z.array(
          z.object({
            subject: playerUUIDSchema,
            viewRadians: z.number(),
            location: z.object({
              x: z.number(),
              y: z.number(),
            }),
          }),
        ),
        finishingDamage: z.object({
          damageType: z.enum([
            "Weapon",
            "Bomb",
            "Ability",
            "Fall",
            "Melee",
            "Invalid",
            "",
          ]),
          damageItem: z.union([
            z.literal(""),
            z.literal("Ultimate"),
            z.literal("Ability1"),
            z.literal("Ability2"),
            z.literal("GrenadeAbility"),
            z.literal("Primary"),
            z.string(),
          ]),
          isSecondaryFireMode: z.boolean(),
        }),
        round: z.number(),
      }),
    ) || z.null(),
});

export default defineEndpoint({
  name: "Match Details",
  description: "Get the details of a match after it ends",
  type: "pd",
  url: "match-details/v1/matches/:matchID",
  responses: {
    "200": matchDetailsResponseSchema,
  },
});
