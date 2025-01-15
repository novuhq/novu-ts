/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type TestApiRateLimitBulkControllerNoCategoryNoCostOverrideRequest = {
  /**
   * A header for idempotency purposes
   */
  idempotencyKey?: string | undefined;
};

/** @internal */
export const TestApiRateLimitBulkControllerNoCategoryNoCostOverrideRequest$inboundSchema:
  z.ZodType<
    TestApiRateLimitBulkControllerNoCategoryNoCostOverrideRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    "idempotency-key": z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "idempotency-key": "idempotencyKey",
    });
  });

/** @internal */
export type TestApiRateLimitBulkControllerNoCategoryNoCostOverrideRequest$Outbound =
  {
    "idempotency-key"?: string | undefined;
  };

/** @internal */
export const TestApiRateLimitBulkControllerNoCategoryNoCostOverrideRequest$outboundSchema:
  z.ZodType<
    TestApiRateLimitBulkControllerNoCategoryNoCostOverrideRequest$Outbound,
    z.ZodTypeDef,
    TestApiRateLimitBulkControllerNoCategoryNoCostOverrideRequest
  > = z.object({
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
export namespace TestApiRateLimitBulkControllerNoCategoryNoCostOverrideRequest$ {
  /** @deprecated use `TestApiRateLimitBulkControllerNoCategoryNoCostOverrideRequest$inboundSchema` instead. */
  export const inboundSchema =
    TestApiRateLimitBulkControllerNoCategoryNoCostOverrideRequest$inboundSchema;
  /** @deprecated use `TestApiRateLimitBulkControllerNoCategoryNoCostOverrideRequest$outboundSchema` instead. */
  export const outboundSchema =
    TestApiRateLimitBulkControllerNoCategoryNoCostOverrideRequest$outboundSchema;
  /** @deprecated use `TestApiRateLimitBulkControllerNoCategoryNoCostOverrideRequest$Outbound` instead. */
  export type Outbound =
    TestApiRateLimitBulkControllerNoCategoryNoCostOverrideRequest$Outbound;
}

export function testApiRateLimitBulkControllerNoCategoryNoCostOverrideRequestToJSON(
  testApiRateLimitBulkControllerNoCategoryNoCostOverrideRequest:
    TestApiRateLimitBulkControllerNoCategoryNoCostOverrideRequest,
): string {
  return JSON.stringify(
    TestApiRateLimitBulkControllerNoCategoryNoCostOverrideRequest$outboundSchema
      .parse(testApiRateLimitBulkControllerNoCategoryNoCostOverrideRequest),
  );
}

export function testApiRateLimitBulkControllerNoCategoryNoCostOverrideRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  TestApiRateLimitBulkControllerNoCategoryNoCostOverrideRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      TestApiRateLimitBulkControllerNoCategoryNoCostOverrideRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'TestApiRateLimitBulkControllerNoCategoryNoCostOverrideRequest' from JSON`,
  );
}
