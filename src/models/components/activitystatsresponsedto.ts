/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type ActivityStatsResponseDto = {
  monthlySent: number;
  weeklySent: number;
};

/** @internal */
export const ActivityStatsResponseDto$inboundSchema: z.ZodType<
  ActivityStatsResponseDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  monthlySent: z.number(),
  weeklySent: z.number(),
});

/** @internal */
export type ActivityStatsResponseDto$Outbound = {
  monthlySent: number;
  weeklySent: number;
};

/** @internal */
export const ActivityStatsResponseDto$outboundSchema: z.ZodType<
  ActivityStatsResponseDto$Outbound,
  z.ZodTypeDef,
  ActivityStatsResponseDto
> = z.object({
  monthlySent: z.number(),
  weeklySent: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ActivityStatsResponseDto$ {
  /** @deprecated use `ActivityStatsResponseDto$inboundSchema` instead. */
  export const inboundSchema = ActivityStatsResponseDto$inboundSchema;
  /** @deprecated use `ActivityStatsResponseDto$outboundSchema` instead. */
  export const outboundSchema = ActivityStatsResponseDto$outboundSchema;
  /** @deprecated use `ActivityStatsResponseDto$Outbound` instead. */
  export type Outbound = ActivityStatsResponseDto$Outbound;
}
