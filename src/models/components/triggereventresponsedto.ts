/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Status for trigger
 */
export const TriggerEventResponseDtoStatus = {
  Error: "error",
  TriggerNotActive: "trigger_not_active",
  NoWorkflowActiveStepsDefined: "no_workflow_active_steps_defined",
  NoWorkflowStepsDefined: "no_workflow_steps_defined",
  Processed: "processed",
  SubscriberIdMissing: "subscriber_id_missing",
  NoTenantFound: "no_tenant_found",
} as const;
/**
 * Status for trigger
 */
export type TriggerEventResponseDtoStatus = ClosedEnum<
  typeof TriggerEventResponseDtoStatus
>;

export type TriggerEventResponseDto = {
  /**
   * If trigger was acknowledged or not
   */
  acknowledged: boolean;
  /**
   * In case of an error, this field will contain the error message
   */
  error?: Array<string> | undefined;
  /**
   * Status for trigger
   */
  status: TriggerEventResponseDtoStatus;
  /**
   * Transaction id for trigger
   */
  transactionId?: string | undefined;
};

/** @internal */
export const TriggerEventResponseDtoStatus$inboundSchema: z.ZodNativeEnum<
  typeof TriggerEventResponseDtoStatus
> = z.nativeEnum(TriggerEventResponseDtoStatus);

/** @internal */
export const TriggerEventResponseDtoStatus$outboundSchema: z.ZodNativeEnum<
  typeof TriggerEventResponseDtoStatus
> = TriggerEventResponseDtoStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TriggerEventResponseDtoStatus$ {
  /** @deprecated use `TriggerEventResponseDtoStatus$inboundSchema` instead. */
  export const inboundSchema = TriggerEventResponseDtoStatus$inboundSchema;
  /** @deprecated use `TriggerEventResponseDtoStatus$outboundSchema` instead. */
  export const outboundSchema = TriggerEventResponseDtoStatus$outboundSchema;
}

/** @internal */
export const TriggerEventResponseDto$inboundSchema: z.ZodType<
  TriggerEventResponseDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  acknowledged: z.boolean(),
  error: z.array(z.string()).optional(),
  status: TriggerEventResponseDtoStatus$inboundSchema,
  transactionId: z.string().optional(),
});

/** @internal */
export type TriggerEventResponseDto$Outbound = {
  acknowledged: boolean;
  error?: Array<string> | undefined;
  status: string;
  transactionId?: string | undefined;
};

/** @internal */
export const TriggerEventResponseDto$outboundSchema: z.ZodType<
  TriggerEventResponseDto$Outbound,
  z.ZodTypeDef,
  TriggerEventResponseDto
> = z.object({
  acknowledged: z.boolean(),
  error: z.array(z.string()).optional(),
  status: TriggerEventResponseDtoStatus$outboundSchema,
  transactionId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TriggerEventResponseDto$ {
  /** @deprecated use `TriggerEventResponseDto$inboundSchema` instead. */
  export const inboundSchema = TriggerEventResponseDto$inboundSchema;
  /** @deprecated use `TriggerEventResponseDto$outboundSchema` instead. */
  export const outboundSchema = TriggerEventResponseDto$outboundSchema;
  /** @deprecated use `TriggerEventResponseDto$Outbound` instead. */
  export type Outbound = TriggerEventResponseDto$Outbound;
}
