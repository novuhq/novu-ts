/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SubscribersControllerGetSubscriberRequest = {
  /**
   * A header for idempotency purposes
   */
  idempotencyKey?: string | undefined;
  subscriberId: string;
  /**
   * Includes the topics associated with the subscriber
   */
  includeTopics?: boolean | undefined;
};

export type SubscribersControllerGetSubscriberResponse = {
  headers: { [k: string]: Array<string> };
  result: components.SubscriberResponseDto;
};

/** @internal */
export const SubscribersControllerGetSubscriberRequest$inboundSchema: z.ZodType<
  SubscribersControllerGetSubscriberRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "Idempotency-Key": z.string().optional(),
  subscriberId: z.string(),
  includeTopics: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "Idempotency-Key": "idempotencyKey",
  });
});

/** @internal */
export type SubscribersControllerGetSubscriberRequest$Outbound = {
  "Idempotency-Key"?: string | undefined;
  subscriberId: string;
  includeTopics?: boolean | undefined;
};

/** @internal */
export const SubscribersControllerGetSubscriberRequest$outboundSchema:
  z.ZodType<
    SubscribersControllerGetSubscriberRequest$Outbound,
    z.ZodTypeDef,
    SubscribersControllerGetSubscriberRequest
  > = z.object({
    idempotencyKey: z.string().optional(),
    subscriberId: z.string(),
    includeTopics: z.boolean().optional(),
  }).transform((v) => {
    return remap$(v, {
      idempotencyKey: "Idempotency-Key",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscribersControllerGetSubscriberRequest$ {
  /** @deprecated use `SubscribersControllerGetSubscriberRequest$inboundSchema` instead. */
  export const inboundSchema =
    SubscribersControllerGetSubscriberRequest$inboundSchema;
  /** @deprecated use `SubscribersControllerGetSubscriberRequest$outboundSchema` instead. */
  export const outboundSchema =
    SubscribersControllerGetSubscriberRequest$outboundSchema;
  /** @deprecated use `SubscribersControllerGetSubscriberRequest$Outbound` instead. */
  export type Outbound = SubscribersControllerGetSubscriberRequest$Outbound;
}

export function subscribersControllerGetSubscriberRequestToJSON(
  subscribersControllerGetSubscriberRequest:
    SubscribersControllerGetSubscriberRequest,
): string {
  return JSON.stringify(
    SubscribersControllerGetSubscriberRequest$outboundSchema.parse(
      subscribersControllerGetSubscriberRequest,
    ),
  );
}

export function subscribersControllerGetSubscriberRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  SubscribersControllerGetSubscriberRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      SubscribersControllerGetSubscriberRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'SubscribersControllerGetSubscriberRequest' from JSON`,
  );
}

/** @internal */
export const SubscribersControllerGetSubscriberResponse$inboundSchema:
  z.ZodType<SubscribersControllerGetSubscriberResponse, z.ZodTypeDef, unknown> =
    z.object({
      Headers: z.record(z.array(z.string())),
      Result: components.SubscriberResponseDto$inboundSchema,
    }).transform((v) => {
      return remap$(v, {
        "Headers": "headers",
        "Result": "result",
      });
    });

/** @internal */
export type SubscribersControllerGetSubscriberResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.SubscriberResponseDto$Outbound;
};

/** @internal */
export const SubscribersControllerGetSubscriberResponse$outboundSchema:
  z.ZodType<
    SubscribersControllerGetSubscriberResponse$Outbound,
    z.ZodTypeDef,
    SubscribersControllerGetSubscriberResponse
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
export namespace SubscribersControllerGetSubscriberResponse$ {
  /** @deprecated use `SubscribersControllerGetSubscriberResponse$inboundSchema` instead. */
  export const inboundSchema =
    SubscribersControllerGetSubscriberResponse$inboundSchema;
  /** @deprecated use `SubscribersControllerGetSubscriberResponse$outboundSchema` instead. */
  export const outboundSchema =
    SubscribersControllerGetSubscriberResponse$outboundSchema;
  /** @deprecated use `SubscribersControllerGetSubscriberResponse$Outbound` instead. */
  export type Outbound = SubscribersControllerGetSubscriberResponse$Outbound;
}

export function subscribersControllerGetSubscriberResponseToJSON(
  subscribersControllerGetSubscriberResponse:
    SubscribersControllerGetSubscriberResponse,
): string {
  return JSON.stringify(
    SubscribersControllerGetSubscriberResponse$outboundSchema.parse(
      subscribersControllerGetSubscriberResponse,
    ),
  );
}

export function subscribersControllerGetSubscriberResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  SubscribersControllerGetSubscriberResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      SubscribersControllerGetSubscriberResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'SubscribersControllerGetSubscriberResponse' from JSON`,
  );
}
