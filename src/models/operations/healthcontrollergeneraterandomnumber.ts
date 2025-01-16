/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type HealthControllerGenerateRandomNumberRequest = {
  /**
   * A header for idempotency purposes
   */
  idempotencyKey?: string | undefined;
};

export type HealthControllerGenerateRandomNumberResponse = {
  headers: { [k: string]: Array<string> };
  result: components.IdempotenceTestingResponse;
};

/** @internal */
export const HealthControllerGenerateRandomNumberRequest$inboundSchema:
  z.ZodType<
    HealthControllerGenerateRandomNumberRequest,
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
export type HealthControllerGenerateRandomNumberRequest$Outbound = {
  "idempotency-key"?: string | undefined;
};

/** @internal */
export const HealthControllerGenerateRandomNumberRequest$outboundSchema:
  z.ZodType<
    HealthControllerGenerateRandomNumberRequest$Outbound,
    z.ZodTypeDef,
    HealthControllerGenerateRandomNumberRequest
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
export namespace HealthControllerGenerateRandomNumberRequest$ {
  /** @deprecated use `HealthControllerGenerateRandomNumberRequest$inboundSchema` instead. */
  export const inboundSchema =
    HealthControllerGenerateRandomNumberRequest$inboundSchema;
  /** @deprecated use `HealthControllerGenerateRandomNumberRequest$outboundSchema` instead. */
  export const outboundSchema =
    HealthControllerGenerateRandomNumberRequest$outboundSchema;
  /** @deprecated use `HealthControllerGenerateRandomNumberRequest$Outbound` instead. */
  export type Outbound = HealthControllerGenerateRandomNumberRequest$Outbound;
}

export function healthControllerGenerateRandomNumberRequestToJSON(
  healthControllerGenerateRandomNumberRequest:
    HealthControllerGenerateRandomNumberRequest,
): string {
  return JSON.stringify(
    HealthControllerGenerateRandomNumberRequest$outboundSchema.parse(
      healthControllerGenerateRandomNumberRequest,
    ),
  );
}

export function healthControllerGenerateRandomNumberRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  HealthControllerGenerateRandomNumberRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      HealthControllerGenerateRandomNumberRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'HealthControllerGenerateRandomNumberRequest' from JSON`,
  );
}

/** @internal */
export const HealthControllerGenerateRandomNumberResponse$inboundSchema:
  z.ZodType<
    HealthControllerGenerateRandomNumberResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    Headers: z.record(z.array(z.string())),
    Result: components.IdempotenceTestingResponse$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "Headers": "headers",
      "Result": "result",
    });
  });

/** @internal */
export type HealthControllerGenerateRandomNumberResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.IdempotenceTestingResponse$Outbound;
};

/** @internal */
export const HealthControllerGenerateRandomNumberResponse$outboundSchema:
  z.ZodType<
    HealthControllerGenerateRandomNumberResponse$Outbound,
    z.ZodTypeDef,
    HealthControllerGenerateRandomNumberResponse
  > = z.object({
    headers: z.record(z.array(z.string())),
    result: components.IdempotenceTestingResponse$outboundSchema,
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
export namespace HealthControllerGenerateRandomNumberResponse$ {
  /** @deprecated use `HealthControllerGenerateRandomNumberResponse$inboundSchema` instead. */
  export const inboundSchema =
    HealthControllerGenerateRandomNumberResponse$inboundSchema;
  /** @deprecated use `HealthControllerGenerateRandomNumberResponse$outboundSchema` instead. */
  export const outboundSchema =
    HealthControllerGenerateRandomNumberResponse$outboundSchema;
  /** @deprecated use `HealthControllerGenerateRandomNumberResponse$Outbound` instead. */
  export type Outbound = HealthControllerGenerateRandomNumberResponse$Outbound;
}

export function healthControllerGenerateRandomNumberResponseToJSON(
  healthControllerGenerateRandomNumberResponse:
    HealthControllerGenerateRandomNumberResponse,
): string {
  return JSON.stringify(
    HealthControllerGenerateRandomNumberResponse$outboundSchema.parse(
      healthControllerGenerateRandomNumberResponse,
    ),
  );
}

export function healthControllerGenerateRandomNumberResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  HealthControllerGenerateRandomNumberResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      HealthControllerGenerateRandomNumberResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'HealthControllerGenerateRandomNumberResponse' from JSON`,
  );
}
