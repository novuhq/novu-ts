/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const MonthlyType = {
  Each: "each",
  On: "on",
} as const;
export type MonthlyType = ClosedEnum<typeof MonthlyType>;

export const Ordinal = {
  One: "1",
  Two: "2",
  Three: "3",
  Four: "4",
  Five: "5",
  Last: "last",
} as const;
export type Ordinal = ClosedEnum<typeof Ordinal>;

export const OrdinalValue = {
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
export type OrdinalValue = ClosedEnum<typeof OrdinalValue>;

export const WeekDays = {
  Monday: "monday",
  Tuesday: "tuesday",
  Wednesday: "wednesday",
  Thursday: "thursday",
  Friday: "friday",
  Saturday: "saturday",
  Sunday: "sunday",
} as const;
export type WeekDays = ClosedEnum<typeof WeekDays>;

export type TimedConfig = {
  atTime?: string | undefined;
  monthDays?: Array<string> | undefined;
  monthlyType?: MonthlyType | undefined;
  ordinal?: Ordinal | undefined;
  ordinalValue?: OrdinalValue | undefined;
  weekDays?: Array<WeekDays> | undefined;
};

/** @internal */
export const MonthlyType$inboundSchema: z.ZodNativeEnum<typeof MonthlyType> = z
  .nativeEnum(MonthlyType);

/** @internal */
export const MonthlyType$outboundSchema: z.ZodNativeEnum<typeof MonthlyType> =
  MonthlyType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MonthlyType$ {
  /** @deprecated use `MonthlyType$inboundSchema` instead. */
  export const inboundSchema = MonthlyType$inboundSchema;
  /** @deprecated use `MonthlyType$outboundSchema` instead. */
  export const outboundSchema = MonthlyType$outboundSchema;
}

/** @internal */
export const Ordinal$inboundSchema: z.ZodNativeEnum<typeof Ordinal> = z
  .nativeEnum(Ordinal);

/** @internal */
export const Ordinal$outboundSchema: z.ZodNativeEnum<typeof Ordinal> =
  Ordinal$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Ordinal$ {
  /** @deprecated use `Ordinal$inboundSchema` instead. */
  export const inboundSchema = Ordinal$inboundSchema;
  /** @deprecated use `Ordinal$outboundSchema` instead. */
  export const outboundSchema = Ordinal$outboundSchema;
}

/** @internal */
export const OrdinalValue$inboundSchema: z.ZodNativeEnum<typeof OrdinalValue> =
  z.nativeEnum(OrdinalValue);

/** @internal */
export const OrdinalValue$outboundSchema: z.ZodNativeEnum<typeof OrdinalValue> =
  OrdinalValue$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrdinalValue$ {
  /** @deprecated use `OrdinalValue$inboundSchema` instead. */
  export const inboundSchema = OrdinalValue$inboundSchema;
  /** @deprecated use `OrdinalValue$outboundSchema` instead. */
  export const outboundSchema = OrdinalValue$outboundSchema;
}

/** @internal */
export const WeekDays$inboundSchema: z.ZodNativeEnum<typeof WeekDays> = z
  .nativeEnum(WeekDays);

/** @internal */
export const WeekDays$outboundSchema: z.ZodNativeEnum<typeof WeekDays> =
  WeekDays$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WeekDays$ {
  /** @deprecated use `WeekDays$inboundSchema` instead. */
  export const inboundSchema = WeekDays$inboundSchema;
  /** @deprecated use `WeekDays$outboundSchema` instead. */
  export const outboundSchema = WeekDays$outboundSchema;
}

/** @internal */
export const TimedConfig$inboundSchema: z.ZodType<
  TimedConfig,
  z.ZodTypeDef,
  unknown
> = z.object({
  atTime: z.string().optional(),
  monthDays: z.array(z.string()).optional(),
  monthlyType: MonthlyType$inboundSchema.optional(),
  ordinal: Ordinal$inboundSchema.optional(),
  ordinalValue: OrdinalValue$inboundSchema.optional(),
  weekDays: z.array(WeekDays$inboundSchema).optional(),
});

/** @internal */
export type TimedConfig$Outbound = {
  atTime?: string | undefined;
  monthDays?: Array<string> | undefined;
  monthlyType?: string | undefined;
  ordinal?: string | undefined;
  ordinalValue?: string | undefined;
  weekDays?: Array<string> | undefined;
};

/** @internal */
export const TimedConfig$outboundSchema: z.ZodType<
  TimedConfig$Outbound,
  z.ZodTypeDef,
  TimedConfig
> = z.object({
  atTime: z.string().optional(),
  monthDays: z.array(z.string()).optional(),
  monthlyType: MonthlyType$outboundSchema.optional(),
  ordinal: Ordinal$outboundSchema.optional(),
  ordinalValue: OrdinalValue$outboundSchema.optional(),
  weekDays: z.array(WeekDays$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TimedConfig$ {
  /** @deprecated use `TimedConfig$inboundSchema` instead. */
  export const inboundSchema = TimedConfig$inboundSchema;
  /** @deprecated use `TimedConfig$outboundSchema` instead. */
  export const outboundSchema = TimedConfig$outboundSchema;
  /** @deprecated use `TimedConfig$Outbound` instead. */
  export type Outbound = TimedConfig$Outbound;
}
