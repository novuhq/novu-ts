/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type HealthControllerTestIdempotencyRequest = {
  /**
   * A header for idempotency purposes
   */
  idempotencyKey?: string | undefined;
  idempotencyTestingDto: components.IdempotencyTestingDto;
};

export type HealthControllerTestIdempotencyResponse = {
  headers: { [k: string]: Array<string> };
  result: components.IdempotenceTestingResponse;
};

/** @internal */
export const HealthControllerTestIdempotencyRequest$inboundSchema: z.ZodType<
  HealthControllerTestIdempotencyRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "idempotency-key": z.string().optional(),
  IdempotencyTestingDto: components.IdempotencyTestingDto$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "idempotency-key": "idempotencyKey",
    "IdempotencyTestingDto": "idempotencyTestingDto",
  });
});

/** @internal */
export type HealthControllerTestIdempotencyRequest$Outbound = {
  "idempotency-key"?: string | undefined;
  IdempotencyTestingDto: components.IdempotencyTestingDto$Outbound;
};

/** @internal */
export const HealthControllerTestIdempotencyRequest$outboundSchema: z.ZodType<
  HealthControllerTestIdempotencyRequest$Outbound,
  z.ZodTypeDef,
  HealthControllerTestIdempotencyRequest
> = z.object({
  idempotencyKey: z.string().optional(),
  idempotencyTestingDto: components.IdempotencyTestingDto$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    idempotencyKey: "idempotency-key",
    idempotencyTestingDto: "IdempotencyTestingDto",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HealthControllerTestIdempotencyRequest$ {
  /** @deprecated use `HealthControllerTestIdempotencyRequest$inboundSchema` instead. */
  export const inboundSchema =
    HealthControllerTestIdempotencyRequest$inboundSchema;
  /** @deprecated use `HealthControllerTestIdempotencyRequest$outboundSchema` instead. */
  export const outboundSchema =
    HealthControllerTestIdempotencyRequest$outboundSchema;
  /** @deprecated use `HealthControllerTestIdempotencyRequest$Outbound` instead. */
  export type Outbound = HealthControllerTestIdempotencyRequest$Outbound;
}

export function healthControllerTestIdempotencyRequestToJSON(
  healthControllerTestIdempotencyRequest:
    HealthControllerTestIdempotencyRequest,
): string {
  return JSON.stringify(
    HealthControllerTestIdempotencyRequest$outboundSchema.parse(
      healthControllerTestIdempotencyRequest,
    ),
  );
}

export function healthControllerTestIdempotencyRequestFromJSON(
  jsonString: string,
): SafeParseResult<HealthControllerTestIdempotencyRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      HealthControllerTestIdempotencyRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HealthControllerTestIdempotencyRequest' from JSON`,
  );
}

/** @internal */
export const HealthControllerTestIdempotencyResponse$inboundSchema: z.ZodType<
  HealthControllerTestIdempotencyResponse,
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
export type HealthControllerTestIdempotencyResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.IdempotenceTestingResponse$Outbound;
};

/** @internal */
export const HealthControllerTestIdempotencyResponse$outboundSchema: z.ZodType<
  HealthControllerTestIdempotencyResponse$Outbound,
  z.ZodTypeDef,
  HealthControllerTestIdempotencyResponse
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
export namespace HealthControllerTestIdempotencyResponse$ {
  /** @deprecated use `HealthControllerTestIdempotencyResponse$inboundSchema` instead. */
  export const inboundSchema =
    HealthControllerTestIdempotencyResponse$inboundSchema;
  /** @deprecated use `HealthControllerTestIdempotencyResponse$outboundSchema` instead. */
  export const outboundSchema =
    HealthControllerTestIdempotencyResponse$outboundSchema;
  /** @deprecated use `HealthControllerTestIdempotencyResponse$Outbound` instead. */
  export type Outbound = HealthControllerTestIdempotencyResponse$Outbound;
}

export function healthControllerTestIdempotencyResponseToJSON(
  healthControllerTestIdempotencyResponse:
    HealthControllerTestIdempotencyResponse,
): string {
  return JSON.stringify(
    HealthControllerTestIdempotencyResponse$outboundSchema.parse(
      healthControllerTestIdempotencyResponse,
    ),
  );
}

export function healthControllerTestIdempotencyResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  HealthControllerTestIdempotencyResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      HealthControllerTestIdempotencyResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'HealthControllerTestIdempotencyResponse' from JSON`,
  );
}
