/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type ActivitiesResponseDto = {
  data: Array<string>;
  hasMore: boolean;
  page: number;
  pageSize: number;
};

/** @internal */
export const ActivitiesResponseDto$inboundSchema: z.ZodType<
  ActivitiesResponseDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(z.string()),
  hasMore: z.boolean(),
  page: z.number(),
  pageSize: z.number(),
});

/** @internal */
export type ActivitiesResponseDto$Outbound = {
  data: Array<string>;
  hasMore: boolean;
  page: number;
  pageSize: number;
};

/** @internal */
export const ActivitiesResponseDto$outboundSchema: z.ZodType<
  ActivitiesResponseDto$Outbound,
  z.ZodTypeDef,
  ActivitiesResponseDto
> = z.object({
  data: z.array(z.string()),
  hasMore: z.boolean(),
  page: z.number(),
  pageSize: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ActivitiesResponseDto$ {
  /** @deprecated use `ActivitiesResponseDto$inboundSchema` instead. */
  export const inboundSchema = ActivitiesResponseDto$inboundSchema;
  /** @deprecated use `ActivitiesResponseDto$outboundSchema` instead. */
  export const outboundSchema = ActivitiesResponseDto$outboundSchema;
  /** @deprecated use `ActivitiesResponseDto$Outbound` instead. */
  export type Outbound = ActivitiesResponseDto$Outbound;
}
