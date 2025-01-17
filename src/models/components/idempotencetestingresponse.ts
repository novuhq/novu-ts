/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type IdempotenceTestingResponse = {
  /**
   * A unique number representing the idempotency response
   */
  number: number;
};

/** @internal */
export const IdempotenceTestingResponse$inboundSchema: z.ZodType<
  IdempotenceTestingResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  number: z.number(),
});

/** @internal */
export type IdempotenceTestingResponse$Outbound = {
  number: number;
};

/** @internal */
export const IdempotenceTestingResponse$outboundSchema: z.ZodType<
  IdempotenceTestingResponse$Outbound,
  z.ZodTypeDef,
  IdempotenceTestingResponse
> = z.object({
  number: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IdempotenceTestingResponse$ {
  /** @deprecated use `IdempotenceTestingResponse$inboundSchema` instead. */
  export const inboundSchema = IdempotenceTestingResponse$inboundSchema;
  /** @deprecated use `IdempotenceTestingResponse$outboundSchema` instead. */
  export const outboundSchema = IdempotenceTestingResponse$outboundSchema;
  /** @deprecated use `IdempotenceTestingResponse$Outbound` instead. */
  export type Outbound = IdempotenceTestingResponse$Outbound;
}

export function idempotenceTestingResponseToJSON(
  idempotenceTestingResponse: IdempotenceTestingResponse,
): string {
  return JSON.stringify(
    IdempotenceTestingResponse$outboundSchema.parse(idempotenceTestingResponse),
  );
}

export function idempotenceTestingResponseFromJSON(
  jsonString: string,
): SafeParseResult<IdempotenceTestingResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IdempotenceTestingResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IdempotenceTestingResponse' from JSON`,
  );
}