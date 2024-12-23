/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SubscribersControllerBulkCreateSubscribersRequest = {
  /**
   * A header for idempotency purposes
   */
  idempotencyKey?: string | undefined;
  bulkSubscriberCreateDto: components.BulkSubscriberCreateDto;
};

export type SubscribersControllerBulkCreateSubscribersResponse = {
  headers: { [k: string]: Array<string> };
  result: components.BulkCreateSubscriberResponseDto;
};

/** @internal */
export const SubscribersControllerBulkCreateSubscribersRequest$inboundSchema:
  z.ZodType<
    SubscribersControllerBulkCreateSubscribersRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    "Idempotency-Key": z.string().optional(),
    BulkSubscriberCreateDto: components.BulkSubscriberCreateDto$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "Idempotency-Key": "idempotencyKey",
      "BulkSubscriberCreateDto": "bulkSubscriberCreateDto",
    });
  });

/** @internal */
export type SubscribersControllerBulkCreateSubscribersRequest$Outbound = {
  "Idempotency-Key"?: string | undefined;
  BulkSubscriberCreateDto: components.BulkSubscriberCreateDto$Outbound;
};

/** @internal */
export const SubscribersControllerBulkCreateSubscribersRequest$outboundSchema:
  z.ZodType<
    SubscribersControllerBulkCreateSubscribersRequest$Outbound,
    z.ZodTypeDef,
    SubscribersControllerBulkCreateSubscribersRequest
  > = z.object({
    idempotencyKey: z.string().optional(),
    bulkSubscriberCreateDto: components.BulkSubscriberCreateDto$outboundSchema,
  }).transform((v) => {
    return remap$(v, {
      idempotencyKey: "Idempotency-Key",
      bulkSubscriberCreateDto: "BulkSubscriberCreateDto",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscribersControllerBulkCreateSubscribersRequest$ {
  /** @deprecated use `SubscribersControllerBulkCreateSubscribersRequest$inboundSchema` instead. */
  export const inboundSchema =
    SubscribersControllerBulkCreateSubscribersRequest$inboundSchema;
  /** @deprecated use `SubscribersControllerBulkCreateSubscribersRequest$outboundSchema` instead. */
  export const outboundSchema =
    SubscribersControllerBulkCreateSubscribersRequest$outboundSchema;
  /** @deprecated use `SubscribersControllerBulkCreateSubscribersRequest$Outbound` instead. */
  export type Outbound =
    SubscribersControllerBulkCreateSubscribersRequest$Outbound;
}

export function subscribersControllerBulkCreateSubscribersRequestToJSON(
  subscribersControllerBulkCreateSubscribersRequest:
    SubscribersControllerBulkCreateSubscribersRequest,
): string {
  return JSON.stringify(
    SubscribersControllerBulkCreateSubscribersRequest$outboundSchema.parse(
      subscribersControllerBulkCreateSubscribersRequest,
    ),
  );
}

export function subscribersControllerBulkCreateSubscribersRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  SubscribersControllerBulkCreateSubscribersRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      SubscribersControllerBulkCreateSubscribersRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'SubscribersControllerBulkCreateSubscribersRequest' from JSON`,
  );
}

/** @internal */
export const SubscribersControllerBulkCreateSubscribersResponse$inboundSchema:
  z.ZodType<
    SubscribersControllerBulkCreateSubscribersResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    Headers: z.record(z.array(z.string())),
    Result: components.BulkCreateSubscriberResponseDto$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "Headers": "headers",
      "Result": "result",
    });
  });

/** @internal */
export type SubscribersControllerBulkCreateSubscribersResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.BulkCreateSubscriberResponseDto$Outbound;
};

/** @internal */
export const SubscribersControllerBulkCreateSubscribersResponse$outboundSchema:
  z.ZodType<
    SubscribersControllerBulkCreateSubscribersResponse$Outbound,
    z.ZodTypeDef,
    SubscribersControllerBulkCreateSubscribersResponse
  > = z.object({
    headers: z.record(z.array(z.string())),
    result: components.BulkCreateSubscriberResponseDto$outboundSchema,
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
export namespace SubscribersControllerBulkCreateSubscribersResponse$ {
  /** @deprecated use `SubscribersControllerBulkCreateSubscribersResponse$inboundSchema` instead. */
  export const inboundSchema =
    SubscribersControllerBulkCreateSubscribersResponse$inboundSchema;
  /** @deprecated use `SubscribersControllerBulkCreateSubscribersResponse$outboundSchema` instead. */
  export const outboundSchema =
    SubscribersControllerBulkCreateSubscribersResponse$outboundSchema;
  /** @deprecated use `SubscribersControllerBulkCreateSubscribersResponse$Outbound` instead. */
  export type Outbound =
    SubscribersControllerBulkCreateSubscribersResponse$Outbound;
}

export function subscribersControllerBulkCreateSubscribersResponseToJSON(
  subscribersControllerBulkCreateSubscribersResponse:
    SubscribersControllerBulkCreateSubscribersResponse,
): string {
  return JSON.stringify(
    SubscribersControllerBulkCreateSubscribersResponse$outboundSchema.parse(
      subscribersControllerBulkCreateSubscribersResponse,
    ),
  );
}

export function subscribersControllerBulkCreateSubscribersResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  SubscribersControllerBulkCreateSubscribersResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      SubscribersControllerBulkCreateSubscribersResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'SubscribersControllerBulkCreateSubscribersResponse' from JSON`,
  );
}
