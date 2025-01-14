/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SubscribersControllerGetUnseenCountRequest = {
  subscriberId: string;
  /**
   * Indicates whether to count seen notifications.
   */
  seen?: boolean | undefined;
  /**
   * The maximum number of notifications to return.
   */
  limit?: number | undefined;
  /**
   * A header for idempotency purposes
   */
  idempotencyKey?: string | undefined;
};

export type SubscribersControllerGetUnseenCountResponse = {
  headers: { [k: string]: Array<string> };
  result: components.UnseenCountResponse;
};

/** @internal */
export const SubscribersControllerGetUnseenCountRequest$inboundSchema:
  z.ZodType<SubscribersControllerGetUnseenCountRequest, z.ZodTypeDef, unknown> =
    z.object({
      subscriberId: z.string(),
      seen: z.boolean().default(false),
      limit: z.number().default(100),
      "Idempotency-Key": z.string().optional(),
    }).transform((v) => {
      return remap$(v, {
        "Idempotency-Key": "idempotencyKey",
      });
    });

/** @internal */
export type SubscribersControllerGetUnseenCountRequest$Outbound = {
  subscriberId: string;
  seen: boolean;
  limit: number;
  "Idempotency-Key"?: string | undefined;
};

/** @internal */
export const SubscribersControllerGetUnseenCountRequest$outboundSchema:
  z.ZodType<
    SubscribersControllerGetUnseenCountRequest$Outbound,
    z.ZodTypeDef,
    SubscribersControllerGetUnseenCountRequest
  > = z.object({
    subscriberId: z.string(),
    seen: z.boolean().default(false),
    limit: z.number().default(100),
    idempotencyKey: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      idempotencyKey: "Idempotency-Key",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscribersControllerGetUnseenCountRequest$ {
  /** @deprecated use `SubscribersControllerGetUnseenCountRequest$inboundSchema` instead. */
  export const inboundSchema =
    SubscribersControllerGetUnseenCountRequest$inboundSchema;
  /** @deprecated use `SubscribersControllerGetUnseenCountRequest$outboundSchema` instead. */
  export const outboundSchema =
    SubscribersControllerGetUnseenCountRequest$outboundSchema;
  /** @deprecated use `SubscribersControllerGetUnseenCountRequest$Outbound` instead. */
  export type Outbound = SubscribersControllerGetUnseenCountRequest$Outbound;
}

export function subscribersControllerGetUnseenCountRequestToJSON(
  subscribersControllerGetUnseenCountRequest:
    SubscribersControllerGetUnseenCountRequest,
): string {
  return JSON.stringify(
    SubscribersControllerGetUnseenCountRequest$outboundSchema.parse(
      subscribersControllerGetUnseenCountRequest,
    ),
  );
}

export function subscribersControllerGetUnseenCountRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  SubscribersControllerGetUnseenCountRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      SubscribersControllerGetUnseenCountRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'SubscribersControllerGetUnseenCountRequest' from JSON`,
  );
}

/** @internal */
export const SubscribersControllerGetUnseenCountResponse$inboundSchema:
  z.ZodType<
    SubscribersControllerGetUnseenCountResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    Headers: z.record(z.array(z.string())),
    Result: components.UnseenCountResponse$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "Headers": "headers",
      "Result": "result",
    });
  });

/** @internal */
export type SubscribersControllerGetUnseenCountResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.UnseenCountResponse$Outbound;
};

/** @internal */
export const SubscribersControllerGetUnseenCountResponse$outboundSchema:
  z.ZodType<
    SubscribersControllerGetUnseenCountResponse$Outbound,
    z.ZodTypeDef,
    SubscribersControllerGetUnseenCountResponse
  > = z.object({
    headers: z.record(z.array(z.string())),
    result: components.UnseenCountResponse$outboundSchema,
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
export namespace SubscribersControllerGetUnseenCountResponse$ {
  /** @deprecated use `SubscribersControllerGetUnseenCountResponse$inboundSchema` instead. */
  export const inboundSchema =
    SubscribersControllerGetUnseenCountResponse$inboundSchema;
  /** @deprecated use `SubscribersControllerGetUnseenCountResponse$outboundSchema` instead. */
  export const outboundSchema =
    SubscribersControllerGetUnseenCountResponse$outboundSchema;
  /** @deprecated use `SubscribersControllerGetUnseenCountResponse$Outbound` instead. */
  export type Outbound = SubscribersControllerGetUnseenCountResponse$Outbound;
}

export function subscribersControllerGetUnseenCountResponseToJSON(
  subscribersControllerGetUnseenCountResponse:
    SubscribersControllerGetUnseenCountResponse,
): string {
  return JSON.stringify(
    SubscribersControllerGetUnseenCountResponse$outboundSchema.parse(
      subscribersControllerGetUnseenCountResponse,
    ),
  );
}

export function subscribersControllerGetUnseenCountResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  SubscribersControllerGetUnseenCountResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      SubscribersControllerGetUnseenCountResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'SubscribersControllerGetUnseenCountResponse' from JSON`,
  );
}
