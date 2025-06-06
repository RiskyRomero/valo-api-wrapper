import { z } from "zod";

import type { AuthRequestResponseSchema } from "./endpoints/auth/auth-request";
import type { PasTokenResponseSchema } from "./endpoints/auth/pas-token";
import type { PlayerInfoResponseSchema } from "./endpoints/auth/player-info";
import type { RiotClientConfigResponseSchema } from "./endpoints/auth/riot-client-config";
import type { RiotGeoResponseSchema } from "./endpoints/auth/riot-geo";
import type {
  chatMessagesSchema,
  contractsResponse,
  conversationsSchema,
  partyPlayerSchema,
  partySchema,
  pregameMatchSchema,
} from "./endpoints/common-types";
import type { AccountAliasResponseSchema } from "./endpoints/local/account-alias";
import type { ChatParticipantsResponseSchema } from "./endpoints/local/chat-participants";
import type { ChatSessionResponseSchema } from "./endpoints/local/chat-session";
import type { ChatRegionSchema } from "./endpoints/local/client-region";
import type { EntitlementsTokenResponseSchema } from "./endpoints/local/entitlements-token";
import type { FriendRequestsResponseSchema } from "./endpoints/local/friend-requests";
import type { FriendsResponseSchema } from "./endpoints/local/friends";
import type { HelpResponseSchema } from "./endpoints/local/help";
import type {
  leagueOfLegendsPresenceSchema,
  PresenceResponseSchema,
  valorantPresenceSchema,
} from "./endpoints/local/presence";
import type { SessionsResponseSchema } from "./endpoints/local/sessions";
import type { SettingsResponseSchema } from "./endpoints/local/settings";
import type { CurrentGameLoadoutsResponseSchema } from "./endpoints/remote/glz/current-game-loadouts";
import type { CurrentGameMatchResponseSchema } from "./endpoints/remote/glz/current-game-match";
import type { CurrentGamePlayerResponseSchema } from "./endpoints/remote/glz/current-game-player";
import type { CustomGameConfigResponseSchema } from "./endpoints/remote/glz/custom-game-config";
import type { PartyChatTokenResponseSchema } from "./endpoints/remote/glz/party-chat-token";
import type { PartyJoinByCodeResponseSchema } from "./endpoints/remote/glz/party-join-by-code";
import type { PartyVoiceTokenResponseSchema } from "./endpoints/remote/glz/party-voice-token";
import type { PreGameLoadoutsResponseSchema } from "./endpoints/remote/glz/pregame-loadouts";
import type { PreGamePlayerResponseSchema } from "./endpoints/remote/glz/pregame-player";
import type { accountXpResponseSchema } from "./endpoints/remote/pd/account-xp";
import type { competitiveUpdatesResponseSchema } from "./endpoints/remote/pd/competitive-updates";
import type { configResponseSchema } from "./endpoints/remote/pd/config";
import type { itemUpgradesResponseSchema } from "./endpoints/remote/pd/item-upgrades";
import type { matchDetailsResponseSchema } from "./endpoints/remote/pd/match-details";
import type { matchHistoryResponseSchema } from "./endpoints/remote/pd/match-history";
import type { ownedItemsResponseSchema } from "./endpoints/remote/pd/owned-items";
import type { pricesResponseSchema } from "./endpoints/remote/pd/prices";
import type { storefrontResponseSchema } from "./endpoints/remote/pd/storefront";
import type { walletResponseSchema } from "./endpoints/remote/pd/wallet";

// AUTH //
export type AuthRequestResponse = z.infer<typeof AuthRequestResponseSchema>;
export type AuthEntitlementsTokenResponse = z.infer<
  typeof EntitlementsTokenResponseSchema
>;
export type PASTokenResponse = z.infer<typeof PasTokenResponseSchema>;
export type PlayerInfoResponse = z.infer<typeof PlayerInfoResponseSchema>;
export type RiotClientConfigResponse = z.infer<
  typeof RiotClientConfigResponseSchema
>;
export type RiotGeoResponse = z.infer<typeof RiotGeoResponseSchema>;

// LOCAL //
export type AccountAliasResponse = z.infer<typeof AccountAliasResponseSchema>;
export type AllChatInfoResponse = z.infer<typeof conversationsSchema>;
export type ChatHistoryResponse = z.infer<typeof chatMessagesSchema>;
export type ChatParticipantsResponse = z.infer<
  typeof ChatParticipantsResponseSchema
>;
export type ChatSessionResponse = z.infer<typeof ChatSessionResponseSchema>;
export type ChatRegionResponse = z.infer<typeof ChatRegionSchema>;
export type CurrentGameChatInfoResponse = z.infer<typeof conversationsSchema>;
export type LocalEntitlementsTokenResponse = z.infer<
  typeof EntitlementsTokenResponseSchema
>;
export type FriendRequestsResponse = z.infer<
  typeof FriendRequestsResponseSchema
>;
export type FriendsResponse = z.infer<typeof FriendsResponseSchema>;
export type HelpResponse = z.infer<typeof HelpResponseSchema>;
export type PartyChatInfoResponse = z.infer<typeof conversationsSchema>;
export type PregameChatInfoResponse = z.infer<typeof conversationsSchema>;
export type PresenceResponse = z.infer<typeof PresenceResponseSchema>;
export type LeagueOfLegendsPresence = z.infer<
  typeof leagueOfLegendsPresenceSchema
>;
export type ValorantPresence = z.infer<typeof valorantPresenceSchema>;
export type SendChatMessageResponse = z.infer<typeof chatMessagesSchema>;
export type SessionResponse = z.infer<typeof SessionsResponseSchema>;
export type SettingsResponse = z.infer<typeof SettingsResponseSchema>;

// REMOTE //

/*  glz */
export type ChangeQueueResponse = z.infer<typeof partySchema>;
export type CurrentGameLoadoutsResponse = z.infer<
  typeof CurrentGameLoadoutsResponseSchema
>;
export type CurrentGameMatchResponse = z.infer<
  typeof CurrentGameMatchResponseSchema
>;
export type CurrentGamePlayerResponse = z.infer<
  typeof CurrentGamePlayerResponseSchema
>;
export type CustomGameConfigResponse = z.infer<
  typeof CustomGameConfigResponseSchema
>;
export type EnterMatchmakingQueueResponse = z.infer<typeof partySchema>;
export type LeaveMatchmakingQueueResponse = z.infer<typeof partySchema>;
export type LockCharacterResponse = z.infer<typeof pregameMatchSchema>;
export type PartyChatTokenResponse = z.infer<
  typeof PartyChatTokenResponseSchema
>;
export type PartyDeclineResponse = z.infer<typeof partySchema>;
export type PartyDisableCodeResponse = z.infer<typeof partySchema>;
export type PartyGenerateCodeResponse = z.infer<typeof partySchema>;
export type PartyInviteResponse = z.infer<typeof partySchema>;
export type PartyJoinByCodeResponse = z.infer<
  typeof PartyJoinByCodeResponseSchema
>;
export type PartyPlayerResponse = z.infer<typeof partyPlayerSchema>;
export type PartySetMembersReadyResponse = z.infer<typeof partySchema>;
export type PartyVoiceTokenResponse = z.infer<
  typeof PartyVoiceTokenResponseSchema
>;
export type PartyResponse = z.infer<typeof partySchema>;
export type PreGameLoadoutsResponse = z.infer<
  typeof PreGameLoadoutsResponseSchema
>;
export type PreGameMatchResponse = z.infer<typeof pregameMatchSchema>;
export type PreGamePlayerResponse = z.infer<typeof PreGamePlayerResponseSchema>;
export type RefreshCompetitiveTierResponse = z.infer<typeof partySchema>;
export type RefreshPingsResponse = z.infer<typeof partySchema>;
export type RefreshPlayerIdentityResponse = z.infer<typeof partySchema>;
export type SelectCharacterResponse = z.infer<typeof pregameMatchSchema>;
export type SetCustomGameSettingsResponse = z.infer<typeof partySchema>;
export type SetPartyAccessibilityResponse = z.infer<typeof partySchema>;
export type StartCustomGameResponse = z.infer<typeof partySchema>;

/* pd */
export type AccountXpResponse = z.infer<typeof accountXpResponseSchema>;
export type ActivateContractResponse = z.infer<typeof contractsResponse>;
export type CompetitiveUpdatesResponse = z.infer<
  typeof competitiveUpdatesResponseSchema
>;
export type ConfigResponse = z.infer<typeof configResponseSchema>;
export type ContractsResponse = z.infer<typeof contractsResponse>;
export type ItemUpgradesResponse = z.infer<typeof itemUpgradesResponseSchema>;
export type MatchDetailsResponse = z.infer<typeof matchDetailsResponseSchema>;
export type MatchHistoryResponse = z.infer<typeof matchHistoryResponseSchema>;
export type OwnedItemsResponse = z.infer<typeof ownedItemsResponseSchema>;
export type PricesResponse = z.infer<typeof pricesResponseSchema>;
export type StorefrontResponse = z.infer<typeof storefrontResponseSchema>;
export type WalletResponse = z.infer<typeof walletResponseSchema>;

/* shared (todo) */
