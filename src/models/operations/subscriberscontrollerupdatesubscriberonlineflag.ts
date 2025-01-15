/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SubscribersControllerUpdateSubscriberOnlineFlagRequest = {
  subscriberId: string;
  /**
   * A header for idempotency purposes
   */
  idempotencyKey?: string | undefined;
  updateSubscriberOnlineFlagRequestDto:
    components.UpdateSubscriberOnlineFlagRequestDto;
};

export type SubscribersControllerUpdateSubscriberOnlineFlagResponse = {
  headers: { [k: string]: Array<string> };
  result: components.SubscriberResponseDto;
};

/** @internal */
export const SubscribersControllerUpdateSubscriberOnlineFlagRequest$inboundSchema:
  z.ZodType<
    SubscribersControllerUpdateSubscriberOnlineFlagRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    subscriberId: z.string(),
    "idempotency-key": z.string().optional(),
    UpdateSubscriberOnlineFlagRequestDto:
      components.UpdateSubscriberOnlineFlagRequestDto$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "idempotency-key": "idempotencyKey",
      "UpdateSubscriberOnlineFlagRequestDto":
        "updateSubscriberOnlineFlagRequestDto",
    });
  });

/** @internal */
export type SubscribersControllerUpdateSubscriberOnlineFlagRequest$Outbound = {
  subscriberId: string;
  "idempotency-key"?: string | undefined;
  UpdateSubscriberOnlineFlagRequestDto:
    components.UpdateSubscriberOnlineFlagRequestDto$Outbound;
};

/** @internal */
export const SubscribersControllerUpdateSubscriberOnlineFlagRequest$outboundSchema:
  z.ZodType<
    SubscribersControllerUpdateSubscriberOnlineFlagRequest$Outbound,
    z.ZodTypeDef,
    SubscribersControllerUpdateSubscriberOnlineFlagRequest
  > = z.object({
    subscriberId: z.string(),
    idempotencyKey: z.string().optional(),
    updateSubscriberOnlineFlagRequestDto:
      components.UpdateSubscriberOnlineFlagRequestDto$outboundSchema,
  }).transform((v) => {
    return remap$(v, {
      idempotencyKey: "idempotency-key",
      updateSubscriberOnlineFlagRequestDto:
        "UpdateSubscriberOnlineFlagRequestDto",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscribersControllerUpdateSubscriberOnlineFlagRequest$ {
  /** @deprecated use `SubscribersControllerUpdateSubscriberOnlineFlagRequest$inboundSchema` instead. */
  export const inboundSchema =
    SubscribersControllerUpdateSubscriberOnlineFlagRequest$inboundSchema;
  /** @deprecated use `SubscribersControllerUpdateSubscriberOnlineFlagRequest$outboundSchema` instead. */
  export const outboundSchema =
    SubscribersControllerUpdateSubscriberOnlineFlagRequest$outboundSchema;
  /** @deprecated use `SubscribersControllerUpdateSubscriberOnlineFlagRequest$Outbound` instead. */
  export type Outbound =
    SubscribersControllerUpdateSubscriberOnlineFlagRequest$Outbound;
}

export function subscribersControllerUpdateSubscriberOnlineFlagRequestToJSON(
  subscribersControllerUpdateSubscriberOnlineFlagRequest:
    SubscribersControllerUpdateSubscriberOnlineFlagRequest,
): string {
  return JSON.stringify(
    SubscribersControllerUpdateSubscriberOnlineFlagRequest$outboundSchema.parse(
      subscribersControllerUpdateSubscriberOnlineFlagRequest,
    ),
  );
}

export function subscribersControllerUpdateSubscriberOnlineFlagRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  SubscribersControllerUpdateSubscriberOnlineFlagRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      SubscribersControllerUpdateSubscriberOnlineFlagRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'SubscribersControllerUpdateSubscriberOnlineFlagRequest' from JSON`,
  );
}

/** @internal */
export const SubscribersControllerUpdateSubscriberOnlineFlagResponse$inboundSchema:
  z.ZodType<
    SubscribersControllerUpdateSubscriberOnlineFlagResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    Headers: z.record(z.array(z.string())),
    Result: components.SubscriberResponseDto$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "Headers": "headers",
      "Result": "result",
    });
  });

/** @internal */
export type SubscribersControllerUpdateSubscriberOnlineFlagResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.SubscriberResponseDto$Outbound;
};

/** @internal */
export const SubscribersControllerUpdateSubscriberOnlineFlagResponse$outboundSchema:
  z.ZodType<
    SubscribersControllerUpdateSubscriberOnlineFlagResponse$Outbound,
    z.ZodTypeDef,
    SubscribersControllerUpdateSubscriberOnlineFlagResponse
  > = z.object({
    headers: z.record(z.array(z.string())),
    result: components.SubscriberResponseDto$outboundSchema,
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
export namespace SubscribersControllerUpdateSubscriberOnlineFlagResponse$ {
  /** @deprecated use `SubscribersControllerUpdateSubscriberOnlineFlagResponse$inboundSchema` instead. */
  export const inboundSchema =
    SubscribersControllerUpdateSubscriberOnlineFlagResponse$inboundSchema;
  /** @deprecated use `SubscribersControllerUpdateSubscriberOnlineFlagResponse$outboundSchema` instead. */
  export const outboundSchema =
    SubscribersControllerUpdateSubscriberOnlineFlagResponse$outboundSchema;
  /** @deprecated use `SubscribersControllerUpdateSubscriberOnlineFlagResponse$Outbound` instead. */
  export type Outbound =
    SubscribersControllerUpdateSubscriberOnlineFlagResponse$Outbound;
}

export function subscribersControllerUpdateSubscriberOnlineFlagResponseToJSON(
  subscribersControllerUpdateSubscriberOnlineFlagResponse:
    SubscribersControllerUpdateSubscriberOnlineFlagResponse,
): string {
  return JSON.stringify(
    SubscribersControllerUpdateSubscriberOnlineFlagResponse$outboundSchema
      .parse(subscribersControllerUpdateSubscriberOnlineFlagResponse),
  );
}

export function subscribersControllerUpdateSubscriberOnlineFlagResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  SubscribersControllerUpdateSubscriberOnlineFlagResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      SubscribersControllerUpdateSubscriberOnlineFlagResponse$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'SubscribersControllerUpdateSubscriberOnlineFlagResponse' from JSON`,
  );
}
