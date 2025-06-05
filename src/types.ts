import type { z } from "zod";
import type { accountXpResponseSchema } from "./endpoints/remote/pd/account-xp";
import type { contractsResponse } from "./endpoints/common-types";
import type { competitiveUpdatesResponseSchema } from "./endpoints/remote/pd/competitive-updates";
import type { configResponseSchema } from "./endpoints/remote/pd/config";
import type { itemUpgradesResponseSchema } from "./endpoints/remote/pd/item-upgrades";
import type { matchDetailsResponseSchema } from "./endpoints/remote/pd/match-details";
import type { matchHistoryResponseSchema } from "./endpoints/remote/pd/match-history";
import type { ownedItemsResponseSchema } from "./endpoints/remote/pd/owned-items";
import type { pricesResponseSchema } from "./endpoints/remote/pd/prices";
import type { storefrontResponseSchema } from "./endpoints/remote/pd/storefront";
import type { walletResponseSchema } from "./endpoints/remote/pd/wallet";
import type { AuthRequestResponseSchema } from "./endpoints/auth/auth-request";
import type { EntitlementsTokenResponseSchema } from "./endpoints/local/entitlements-token";
import type { PasTokenResponseSchema } from "./endpoints/auth/pas-token";
import type { PlayerInfoResponseSchema } from "./endpoints/auth/player-info";
import type { RiotClientConfigResponseSchema } from "./endpoints/auth/riot-client-config";
import type { RiotGeoResponseSchema } from "./endpoints/auth/riot-geo";

// AUTH //
export type AuthRequestResponse = z.infer<typeof AuthRequestResponseSchema>;
export type EntitlementsTokenResponse = z.infer<typeof EntitlementsTokenResponseSchema>;
export type PASTokenResponse = z.infer<typeof PasTokenResponseSchema>;
export type PlayerInfoResponse = z.infer<typeof PlayerInfoResponseSchema>;
export type RiotClientConfigResponse = z.infer<typeof RiotClientConfigResponseSchema>;
export type RiotGeoResponse = z.infer<typeof RiotGeoResponseSchema>;

// LOCAL //
/* TODO: FILL WITH LOCAL ENDPOINTS */

// REMOTE //

/*  glz (todo) */

/* pd */
export type AccountXpResponse = z.infer<typeof accountXpResponseSchema>;
export type ActivateContractResponse = z.infer<typeof contractsResponse>;
export type CompetitiveUpdatesResponse = z.infer<typeof competitiveUpdatesResponseSchema>;
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