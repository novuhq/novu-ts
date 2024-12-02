/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ChannelCredentials,
  ChannelCredentials$inboundSchema,
  ChannelCredentials$Outbound,
  ChannelCredentials$outboundSchema,
} from "./channelcredentials.js";

/**
 * The provider identifier for the credentials
 */
export const ChannelSettingsProviderId = {
  Slack: "slack",
  Discord: "discord",
  Msteams: "msteams",
  Mattermost: "mattermost",
  Ryver: "ryver",
  Zulip: "zulip",
  GrafanaOnCall: "grafana-on-call",
  Getstream: "getstream",
  RocketChat: "rocket-chat",
  WhatsappBusiness: "whatsapp-business",
  Fcm: "fcm",
  Apns: "apns",
  Expo: "expo",
  OneSignal: "one-signal",
  Pushpad: "pushpad",
  PushWebhook: "push-webhook",
  PusherBeams: "pusher-beams",
} as const;
/**
 * The provider identifier for the credentials
 */
export type ChannelSettingsProviderId = ClosedEnum<
  typeof ChannelSettingsProviderId
>;

export type ChannelSettings = {
  /**
   * The provider identifier for the credentials
   */
  providerId: ChannelSettingsProviderId;
  /**
   * The integration identifier
   */
  integrationIdentifier?: string | undefined;
  /**
   * Credentials payload for the specified provider
   */
  credentials: ChannelCredentials;
  /**
   * Id of the integration that is used for this channel
   */
  integrationId: string;
};

/** @internal */
export const ChannelSettingsProviderId$inboundSchema: z.ZodNativeEnum<
  typeof ChannelSettingsProviderId
> = z.nativeEnum(ChannelSettingsProviderId);

/** @internal */
export const ChannelSettingsProviderId$outboundSchema: z.ZodNativeEnum<
  typeof ChannelSettingsProviderId
> = ChannelSettingsProviderId$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChannelSettingsProviderId$ {
  /** @deprecated use `ChannelSettingsProviderId$inboundSchema` instead. */
  export const inboundSchema = ChannelSettingsProviderId$inboundSchema;
  /** @deprecated use `ChannelSettingsProviderId$outboundSchema` instead. */
  export const outboundSchema = ChannelSettingsProviderId$outboundSchema;
}

/** @internal */
export const ChannelSettings$inboundSchema: z.ZodType<
  ChannelSettings,
  z.ZodTypeDef,
  unknown
> = z.object({
  providerId: ChannelSettingsProviderId$inboundSchema,
  integrationIdentifier: z.string().optional(),
  credentials: ChannelCredentials$inboundSchema,
  _integrationId: z.string(),
}).transform((v) => {
  return remap$(v, {
    "_integrationId": "integrationId",
  });
});

/** @internal */
export type ChannelSettings$Outbound = {
  providerId: string;
  integrationIdentifier?: string | undefined;
  credentials: ChannelCredentials$Outbound;
  _integrationId: string;
};

/** @internal */
export const ChannelSettings$outboundSchema: z.ZodType<
  ChannelSettings$Outbound,
  z.ZodTypeDef,
  ChannelSettings
> = z.object({
  providerId: ChannelSettingsProviderId$outboundSchema,
  integrationIdentifier: z.string().optional(),
  credentials: ChannelCredentials$outboundSchema,
  integrationId: z.string(),
}).transform((v) => {
  return remap$(v, {
    integrationId: "_integrationId",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChannelSettings$ {
  /** @deprecated use `ChannelSettings$inboundSchema` instead. */
  export const inboundSchema = ChannelSettings$inboundSchema;
  /** @deprecated use `ChannelSettings$outboundSchema` instead. */
  export const outboundSchema = ChannelSettings$outboundSchema;
  /** @deprecated use `ChannelSettings$Outbound` instead. */
  export type Outbound = ChannelSettings$Outbound;
}

export function channelSettingsToJSON(
  channelSettings: ChannelSettings,
): string {
  return JSON.stringify(ChannelSettings$outboundSchema.parse(channelSettings));
}

export function channelSettingsFromJSON(
  jsonString: string,
): SafeParseResult<ChannelSettings, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChannelSettings$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChannelSettings' from JSON`,
  );
}
