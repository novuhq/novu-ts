/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Value of the ordinal
 */
export const OrdinalValueEnum = {
  Day: "day",
  Weekday: "weekday",
  Weekend: "weekend",
  Sunday: "sunday",
  Monday: "monday",
  Tuesday: "tuesday",
  Wednesday: "wednesday",
  Thursday: "thursday",
  Friday: "friday",
  Saturday: "saturday",
} as const;
/**
 * Value of the ordinal
 */
export type OrdinalValueEnum = ClosedEnum<typeof OrdinalValueEnum>;

/** @internal */
export const OrdinalValueEnum$inboundSchema: z.ZodNativeEnum<
  typeof OrdinalValueEnum
> = z.nativeEnum(OrdinalValueEnum);

/** @internal */
export const OrdinalValueEnum$outboundSchema: z.ZodNativeEnum<
  typeof OrdinalValueEnum
> = OrdinalValueEnum$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrdinalValueEnum$ {
  /** @deprecated use `OrdinalValueEnum$inboundSchema` instead. */
  export const inboundSchema = OrdinalValueEnum$inboundSchema;
  /** @deprecated use `OrdinalValueEnum$outboundSchema` instead. */
  export const outboundSchema = OrdinalValueEnum$outboundSchema;
}