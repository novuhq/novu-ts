/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type BulkSubscriberCreateDto = {
  subscribers: Array<string>;
};

/** @internal */
export const BulkSubscriberCreateDto$inboundSchema: z.ZodType<
  BulkSubscriberCreateDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  subscribers: z.array(z.string()),
});

/** @internal */
export type BulkSubscriberCreateDto$Outbound = {
  subscribers: Array<string>;
};

/** @internal */
export const BulkSubscriberCreateDto$outboundSchema: z.ZodType<
  BulkSubscriberCreateDto$Outbound,
  z.ZodTypeDef,
  BulkSubscriberCreateDto
> = z.object({
  subscribers: z.array(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BulkSubscriberCreateDto$ {
  /** @deprecated use `BulkSubscriberCreateDto$inboundSchema` instead. */
  export const inboundSchema = BulkSubscriberCreateDto$inboundSchema;
  /** @deprecated use `BulkSubscriberCreateDto$outboundSchema` instead. */
  export const outboundSchema = BulkSubscriberCreateDto$outboundSchema;
  /** @deprecated use `BulkSubscriberCreateDto$Outbound` instead. */
  export type Outbound = BulkSubscriberCreateDto$Outbound;
}
