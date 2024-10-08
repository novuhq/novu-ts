/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const MessageButtonType = {
  Primary: "primary",
  Secondary: "secondary",
} as const;
export type MessageButtonType = ClosedEnum<typeof MessageButtonType>;

export type MessageButton = {
  content: string;
  resultContent?: string | undefined;
  type: MessageButtonType;
};

/** @internal */
export const MessageButtonType$inboundSchema: z.ZodNativeEnum<
  typeof MessageButtonType
> = z.nativeEnum(MessageButtonType);

/** @internal */
export const MessageButtonType$outboundSchema: z.ZodNativeEnum<
  typeof MessageButtonType
> = MessageButtonType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageButtonType$ {
  /** @deprecated use `MessageButtonType$inboundSchema` instead. */
  export const inboundSchema = MessageButtonType$inboundSchema;
  /** @deprecated use `MessageButtonType$outboundSchema` instead. */
  export const outboundSchema = MessageButtonType$outboundSchema;
}

/** @internal */
export const MessageButton$inboundSchema: z.ZodType<
  MessageButton,
  z.ZodTypeDef,
  unknown
> = z.object({
  content: z.string(),
  resultContent: z.string().optional(),
  type: MessageButtonType$inboundSchema,
});

/** @internal */
export type MessageButton$Outbound = {
  content: string;
  resultContent?: string | undefined;
  type: string;
};

/** @internal */
export const MessageButton$outboundSchema: z.ZodType<
  MessageButton$Outbound,
  z.ZodTypeDef,
  MessageButton
> = z.object({
  content: z.string(),
  resultContent: z.string().optional(),
  type: MessageButtonType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageButton$ {
  /** @deprecated use `MessageButton$inboundSchema` instead. */
  export const inboundSchema = MessageButton$inboundSchema;
  /** @deprecated use `MessageButton$outboundSchema` instead. */
  export const outboundSchema = MessageButton$outboundSchema;
  /** @deprecated use `MessageButton$Outbound` instead. */
  export type Outbound = MessageButton$Outbound;
}
