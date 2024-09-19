/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type ChangeWorkflowStatusRequestDto = {
  active: boolean;
};

/** @internal */
export const ChangeWorkflowStatusRequestDto$inboundSchema: z.ZodType<
  ChangeWorkflowStatusRequestDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  active: z.boolean(),
});

/** @internal */
export type ChangeWorkflowStatusRequestDto$Outbound = {
  active: boolean;
};

/** @internal */
export const ChangeWorkflowStatusRequestDto$outboundSchema: z.ZodType<
  ChangeWorkflowStatusRequestDto$Outbound,
  z.ZodTypeDef,
  ChangeWorkflowStatusRequestDto
> = z.object({
  active: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChangeWorkflowStatusRequestDto$ {
  /** @deprecated use `ChangeWorkflowStatusRequestDto$inboundSchema` instead. */
  export const inboundSchema = ChangeWorkflowStatusRequestDto$inboundSchema;
  /** @deprecated use `ChangeWorkflowStatusRequestDto$outboundSchema` instead. */
  export const outboundSchema = ChangeWorkflowStatusRequestDto$outboundSchema;
  /** @deprecated use `ChangeWorkflowStatusRequestDto$Outbound` instead. */
  export type Outbound = ChangeWorkflowStatusRequestDto$Outbound;
}
