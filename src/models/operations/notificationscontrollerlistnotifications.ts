/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const Channels = {
  InApp: "in_app",
  Email: "email",
  Sms: "sms",
  Chat: "chat",
  Push: "push",
} as const;
export type Channels = ClosedEnum<typeof Channels>;

export type NotificationsControllerListNotificationsRequest = {
  channels: Array<Channels>;
  templates: Array<string>;
  emails: Array<string>;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  search: string;
  subscriberIds: Array<string>;
  page?: number | undefined;
  transactionId?: string | undefined;
};

export type NotificationsControllerListNotificationsResponse = {
  headers: { [k: string]: Array<string> };
  result: components.ActivitiesResponseDto;
};

/** @internal */
export const Channels$inboundSchema: z.ZodNativeEnum<typeof Channels> = z
  .nativeEnum(Channels);

/** @internal */
export const Channels$outboundSchema: z.ZodNativeEnum<typeof Channels> =
  Channels$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Channels$ {
  /** @deprecated use `Channels$inboundSchema` instead. */
  export const inboundSchema = Channels$inboundSchema;
  /** @deprecated use `Channels$outboundSchema` instead. */
  export const outboundSchema = Channels$outboundSchema;
}

/** @internal */
export const NotificationsControllerListNotificationsRequest$inboundSchema:
  z.ZodType<
    NotificationsControllerListNotificationsRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    channels: z.array(Channels$inboundSchema),
    templates: z.array(z.string()),
    emails: z.array(z.string()),
    search: z.string(),
    subscriberIds: z.array(z.string()),
    page: z.number().default(0),
    transactionId: z.string().optional(),
  });

/** @internal */
export type NotificationsControllerListNotificationsRequest$Outbound = {
  channels: Array<string>;
  templates: Array<string>;
  emails: Array<string>;
  search: string;
  subscriberIds: Array<string>;
  page: number;
  transactionId?: string | undefined;
};

/** @internal */
export const NotificationsControllerListNotificationsRequest$outboundSchema:
  z.ZodType<
    NotificationsControllerListNotificationsRequest$Outbound,
    z.ZodTypeDef,
    NotificationsControllerListNotificationsRequest
  > = z.object({
    channels: z.array(Channels$outboundSchema),
    templates: z.array(z.string()),
    emails: z.array(z.string()),
    search: z.string(),
    subscriberIds: z.array(z.string()),
    page: z.number().default(0),
    transactionId: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotificationsControllerListNotificationsRequest$ {
  /** @deprecated use `NotificationsControllerListNotificationsRequest$inboundSchema` instead. */
  export const inboundSchema =
    NotificationsControllerListNotificationsRequest$inboundSchema;
  /** @deprecated use `NotificationsControllerListNotificationsRequest$outboundSchema` instead. */
  export const outboundSchema =
    NotificationsControllerListNotificationsRequest$outboundSchema;
  /** @deprecated use `NotificationsControllerListNotificationsRequest$Outbound` instead. */
  export type Outbound =
    NotificationsControllerListNotificationsRequest$Outbound;
}

export function notificationsControllerListNotificationsRequestToJSON(
  notificationsControllerListNotificationsRequest:
    NotificationsControllerListNotificationsRequest,
): string {
  return JSON.stringify(
    NotificationsControllerListNotificationsRequest$outboundSchema.parse(
      notificationsControllerListNotificationsRequest,
    ),
  );
}

export function notificationsControllerListNotificationsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  NotificationsControllerListNotificationsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      NotificationsControllerListNotificationsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'NotificationsControllerListNotificationsRequest' from JSON`,
  );
}

/** @internal */
export const NotificationsControllerListNotificationsResponse$inboundSchema:
  z.ZodType<
    NotificationsControllerListNotificationsResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    Headers: z.record(z.array(z.string())),
    Result: components.ActivitiesResponseDto$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "Headers": "headers",
      "Result": "result",
    });
  });

/** @internal */
export type NotificationsControllerListNotificationsResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.ActivitiesResponseDto$Outbound;
};

/** @internal */
export const NotificationsControllerListNotificationsResponse$outboundSchema:
  z.ZodType<
    NotificationsControllerListNotificationsResponse$Outbound,
    z.ZodTypeDef,
    NotificationsControllerListNotificationsResponse
  > = z.object({
    headers: z.record(z.array(z.string())),
    result: components.ActivitiesResponseDto$outboundSchema,
  }).transform((v) => {
    return remap$(v, {
      headers: "Headers",
      result: "Result",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotificationsControllerListNotificationsResponse$ {
  /** @deprecated use `NotificationsControllerListNotificationsResponse$inboundSchema` instead. */
  export const inboundSchema =
    NotificationsControllerListNotificationsResponse$inboundSchema;
  /** @deprecated use `NotificationsControllerListNotificationsResponse$outboundSchema` instead. */
  export const outboundSchema =
    NotificationsControllerListNotificationsResponse$outboundSchema;
  /** @deprecated use `NotificationsControllerListNotificationsResponse$Outbound` instead. */
  export type Outbound =
    NotificationsControllerListNotificationsResponse$Outbound;
}

export function notificationsControllerListNotificationsResponseToJSON(
  notificationsControllerListNotificationsResponse:
    NotificationsControllerListNotificationsResponse,
): string {
  return JSON.stringify(
    NotificationsControllerListNotificationsResponse$outboundSchema.parse(
      notificationsControllerListNotificationsResponse,
    ),
  );
}

export function notificationsControllerListNotificationsResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  NotificationsControllerListNotificationsResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      NotificationsControllerListNotificationsResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'NotificationsControllerListNotificationsResponse' from JSON`,
  );
}
