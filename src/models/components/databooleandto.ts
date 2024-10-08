/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type DataBooleanDto = {
  data: boolean;
};

/** @internal */
export const DataBooleanDto$inboundSchema: z.ZodType<
  DataBooleanDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.boolean(),
});

/** @internal */
export type DataBooleanDto$Outbound = {
  data: boolean;
};

/** @internal */
export const DataBooleanDto$outboundSchema: z.ZodType<
  DataBooleanDto$Outbound,
  z.ZodTypeDef,
  DataBooleanDto
> = z.object({
  data: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DataBooleanDto$ {
  /** @deprecated use `DataBooleanDto$inboundSchema` instead. */
  export const inboundSchema = DataBooleanDto$inboundSchema;
  /** @deprecated use `DataBooleanDto$outboundSchema` instead. */
  export const outboundSchema = DataBooleanDto$outboundSchema;
  /** @deprecated use `DataBooleanDto$Outbound` instead. */
  export type Outbound = DataBooleanDto$Outbound;
}
