/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Unit of the digest
 */
export const Unit = {
  Seconds: "seconds",
  Minutes: "minutes",
  Hours: "hours",
  Days: "days",
  Weeks: "weeks",
  Months: "months",
} as const;
/**
 * Unit of the digest
 */
export type Unit = ClosedEnum<typeof Unit>;

export type DigestWithEventsDto = {
  /**
   * Optional key for the digest
   */
  digestKey?: string | undefined;
  /**
   * Amount for the digest
   */
  amount?: number | undefined;
  /**
   * Unit of the digest
   */
  unit?: Unit | undefined;
  /**
   * Optional array of events associated with the digest, represented as key-value pairs
   */
  events?: Array<{ [k: string]: any }> | undefined;
};

/** @internal */
export const Unit$inboundSchema: z.ZodNativeEnum<typeof Unit> = z.nativeEnum(
  Unit,
);

/** @internal */
export const Unit$outboundSchema: z.ZodNativeEnum<typeof Unit> =
  Unit$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Unit$ {
  /** @deprecated use `Unit$inboundSchema` instead. */
  export const inboundSchema = Unit$inboundSchema;
  /** @deprecated use `Unit$outboundSchema` instead. */
  export const outboundSchema = Unit$outboundSchema;
}

/** @internal */
export const DigestWithEventsDto$inboundSchema: z.ZodType<
  DigestWithEventsDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  digestKey: z.string().optional(),
  amount: z.number().optional(),
  unit: Unit$inboundSchema.optional(),
  events: z.array(z.record(z.any())).optional(),
});

/** @internal */
export type DigestWithEventsDto$Outbound = {
  digestKey?: string | undefined;
  amount?: number | undefined;
  unit?: string | undefined;
  events?: Array<{ [k: string]: any }> | undefined;
};

/** @internal */
export const DigestWithEventsDto$outboundSchema: z.ZodType<
  DigestWithEventsDto$Outbound,
  z.ZodTypeDef,
  DigestWithEventsDto
> = z.object({
  digestKey: z.string().optional(),
  amount: z.number().optional(),
  unit: Unit$outboundSchema.optional(),
  events: z.array(z.record(z.any())).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DigestWithEventsDto$ {
  /** @deprecated use `DigestWithEventsDto$inboundSchema` instead. */
  export const inboundSchema = DigestWithEventsDto$inboundSchema;
  /** @deprecated use `DigestWithEventsDto$outboundSchema` instead. */
  export const outboundSchema = DigestWithEventsDto$outboundSchema;
  /** @deprecated use `DigestWithEventsDto$Outbound` instead. */
  export type Outbound = DigestWithEventsDto$Outbound;
}

export function digestWithEventsDtoToJSON(
  digestWithEventsDto: DigestWithEventsDto,
): string {
  return JSON.stringify(
    DigestWithEventsDto$outboundSchema.parse(digestWithEventsDto),
  );
}

export function digestWithEventsDtoFromJSON(
  jsonString: string,
): SafeParseResult<DigestWithEventsDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DigestWithEventsDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DigestWithEventsDto' from JSON`,
  );
}
