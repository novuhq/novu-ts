/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type NumberT = {};

/** @internal */
export const NumberT$inboundSchema: z.ZodType<NumberT, z.ZodTypeDef, unknown> =
  z.object({});

/** @internal */
export type NumberT$Outbound = {};

/** @internal */
export const NumberT$outboundSchema: z.ZodType<
  NumberT$Outbound,
  z.ZodTypeDef,
  NumberT
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NumberT$ {
  /** @deprecated use `NumberT$inboundSchema` instead. */
  export const inboundSchema = NumberT$inboundSchema;
  /** @deprecated use `NumberT$outboundSchema` instead. */
  export const outboundSchema = NumberT$outboundSchema;
  /** @deprecated use `NumberT$Outbound` instead. */
  export type Outbound = NumberT$Outbound;
}

export function numberToJSON(numberT: NumberT): string {
  return JSON.stringify(NumberT$outboundSchema.parse(numberT));
}

export function numberFromJSON(
  jsonString: string,
): SafeParseResult<NumberT, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NumberT$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NumberT' from JSON`,
  );
}
