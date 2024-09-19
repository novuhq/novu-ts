/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type MessageTemplate = {};

/** @internal */
export const MessageTemplate$inboundSchema: z.ZodType<
  MessageTemplate,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type MessageTemplate$Outbound = {};

/** @internal */
export const MessageTemplate$outboundSchema: z.ZodType<
  MessageTemplate$Outbound,
  z.ZodTypeDef,
  MessageTemplate
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageTemplate$ {
  /** @deprecated use `MessageTemplate$inboundSchema` instead. */
  export const inboundSchema = MessageTemplate$inboundSchema;
  /** @deprecated use `MessageTemplate$outboundSchema` instead. */
  export const outboundSchema = MessageTemplate$outboundSchema;
  /** @deprecated use `MessageTemplate$Outbound` instead. */
  export type Outbound = MessageTemplate$Outbound;
}
