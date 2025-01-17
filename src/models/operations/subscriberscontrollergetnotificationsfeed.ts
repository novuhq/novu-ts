/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SubscribersControllerGetNotificationsFeedRequest = {
  subscriberId: string;
  page?: number | undefined;
  limit?: number | undefined;
  read?: boolean | undefined;
  seen?: boolean | undefined;
  /**
   * Base64 encoded string of the partial payload JSON object
   */
  payload?: string | undefined;
  /**
   * A header for idempotency purposes
   */
  idempotencyKey?: string | undefined;
};

export type SubscribersControllerGetNotificationsFeedResponse = {
  headers: { [k: string]: Array<string> };
  result: components.FeedResponseDto;
};

/** @internal */
export const SubscribersControllerGetNotificationsFeedRequest$inboundSchema:
  z.ZodType<
    SubscribersControllerGetNotificationsFeedRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    subscriberId: z.string(),
    page: z.number().optional(),
    limit: z.number().default(10),
    read: z.boolean().optional(),
    seen: z.boolean().optional(),
    payload: z.string().optional(),
    "idempotency-key": z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "idempotency-key": "idempotencyKey",
    });
  });

/** @internal */
export type SubscribersControllerGetNotificationsFeedRequest$Outbound = {
  subscriberId: string;
  page?: number | undefined;
  limit: number;
  read?: boolean | undefined;
  seen?: boolean | undefined;
  payload?: string | undefined;
  "idempotency-key"?: string | undefined;
};

/** @internal */
export const SubscribersControllerGetNotificationsFeedRequest$outboundSchema:
  z.ZodType<
    SubscribersControllerGetNotificationsFeedRequest$Outbound,
    z.ZodTypeDef,
    SubscribersControllerGetNotificationsFeedRequest
  > = z.object({
    subscriberId: z.string(),
    page: z.number().optional(),
    limit: z.number().default(10),
    read: z.boolean().optional(),
    seen: z.boolean().optional(),
    payload: z.string().optional(),
    idempotencyKey: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      idempotencyKey: "idempotency-key",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscribersControllerGetNotificationsFeedRequest$ {
  /** @deprecated use `SubscribersControllerGetNotificationsFeedRequest$inboundSchema` instead. */
  export const inboundSchema =
    SubscribersControllerGetNotificationsFeedRequest$inboundSchema;
  /** @deprecated use `SubscribersControllerGetNotificationsFeedRequest$outboundSchema` instead. */
  export const outboundSchema =
    SubscribersControllerGetNotificationsFeedRequest$outboundSchema;
  /** @deprecated use `SubscribersControllerGetNotificationsFeedRequest$Outbound` instead. */
  export type Outbound =
    SubscribersControllerGetNotificationsFeedRequest$Outbound;
}

export function subscribersControllerGetNotificationsFeedRequestToJSON(
  subscribersControllerGetNotificationsFeedRequest:
    SubscribersControllerGetNotificationsFeedRequest,
): string {
  return JSON.stringify(
    SubscribersControllerGetNotificationsFeedRequest$outboundSchema.parse(
      subscribersControllerGetNotificationsFeedRequest,
    ),
  );
}

export function subscribersControllerGetNotificationsFeedRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  SubscribersControllerGetNotificationsFeedRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      SubscribersControllerGetNotificationsFeedRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'SubscribersControllerGetNotificationsFeedRequest' from JSON`,
  );
}

/** @internal */
export const SubscribersControllerGetNotificationsFeedResponse$inboundSchema:
  z.ZodType<
    SubscribersControllerGetNotificationsFeedResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    Headers: z.record(z.array(z.string())),
    Result: components.FeedResponseDto$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "Headers": "headers",
      "Result": "result",
    });
  });

/** @internal */
export type SubscribersControllerGetNotificationsFeedResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.FeedResponseDto$Outbound;
};

/** @internal */
export const SubscribersControllerGetNotificationsFeedResponse$outboundSchema:
  z.ZodType<
    SubscribersControllerGetNotificationsFeedResponse$Outbound,
    z.ZodTypeDef,
    SubscribersControllerGetNotificationsFeedResponse
  > = z.object({
    headers: z.record(z.array(z.string())),
    result: components.FeedResponseDto$outboundSchema,
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
export namespace SubscribersControllerGetNotificationsFeedResponse$ {
  /** @deprecated use `SubscribersControllerGetNotificationsFeedResponse$inboundSchema` instead. */
  export const inboundSchema =
    SubscribersControllerGetNotificationsFeedResponse$inboundSchema;
  /** @deprecated use `SubscribersControllerGetNotificationsFeedResponse$outboundSchema` instead. */
  export const outboundSchema =
    SubscribersControllerGetNotificationsFeedResponse$outboundSchema;
  /** @deprecated use `SubscribersControllerGetNotificationsFeedResponse$Outbound` instead. */
  export type Outbound =
    SubscribersControllerGetNotificationsFeedResponse$Outbound;
}

export function subscribersControllerGetNotificationsFeedResponseToJSON(
  subscribersControllerGetNotificationsFeedResponse:
    SubscribersControllerGetNotificationsFeedResponse,
): string {
  return JSON.stringify(
    SubscribersControllerGetNotificationsFeedResponse$outboundSchema.parse(
      subscribersControllerGetNotificationsFeedResponse,
    ),
  );
}

export function subscribersControllerGetNotificationsFeedResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  SubscribersControllerGetNotificationsFeedResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      SubscribersControllerGetNotificationsFeedResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'SubscribersControllerGetNotificationsFeedResponse' from JSON`,
  );
}
