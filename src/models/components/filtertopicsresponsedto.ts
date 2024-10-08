/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  TopicDto,
  TopicDto$inboundSchema,
  TopicDto$Outbound,
  TopicDto$outboundSchema,
} from "./topicdto.js";

export type FilterTopicsResponseDto = {
  data: Array<TopicDto>;
  page: number;
  pageSize: number;
  totalCount: number;
};

/** @internal */
export const FilterTopicsResponseDto$inboundSchema: z.ZodType<
  FilterTopicsResponseDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(TopicDto$inboundSchema),
  page: z.number(),
  pageSize: z.number(),
  totalCount: z.number(),
});

/** @internal */
export type FilterTopicsResponseDto$Outbound = {
  data: Array<TopicDto$Outbound>;
  page: number;
  pageSize: number;
  totalCount: number;
};

/** @internal */
export const FilterTopicsResponseDto$outboundSchema: z.ZodType<
  FilterTopicsResponseDto$Outbound,
  z.ZodTypeDef,
  FilterTopicsResponseDto
> = z.object({
  data: z.array(TopicDto$outboundSchema),
  page: z.number(),
  pageSize: z.number(),
  totalCount: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FilterTopicsResponseDto$ {
  /** @deprecated use `FilterTopicsResponseDto$inboundSchema` instead. */
  export const inboundSchema = FilterTopicsResponseDto$inboundSchema;
  /** @deprecated use `FilterTopicsResponseDto$outboundSchema` instead. */
  export const outboundSchema = FilterTopicsResponseDto$outboundSchema;
  /** @deprecated use `FilterTopicsResponseDto$Outbound` instead. */
  export type Outbound = FilterTopicsResponseDto$Outbound;
}
