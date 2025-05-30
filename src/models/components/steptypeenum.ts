/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Type of the step
 */
export const StepTypeEnum = {
  InApp: "in_app",
  Email: "email",
  Sms: "sms",
  Chat: "chat",
  Push: "push",
  Digest: "digest",
  Trigger: "trigger",
  Delay: "delay",
  Custom: "custom",
} as const;
/**
 * Type of the step
 */
export type StepTypeEnum = ClosedEnum<typeof StepTypeEnum>;

/** @internal */
export const StepTypeEnum$inboundSchema: z.ZodNativeEnum<typeof StepTypeEnum> =
  z.nativeEnum(StepTypeEnum);

/** @internal */
export const StepTypeEnum$outboundSchema: z.ZodNativeEnum<typeof StepTypeEnum> =
  StepTypeEnum$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StepTypeEnum$ {
  /** @deprecated use `StepTypeEnum$inboundSchema` instead. */
  export const inboundSchema = StepTypeEnum$inboundSchema;
  /** @deprecated use `StepTypeEnum$outboundSchema` instead. */
  export const outboundSchema = StepTypeEnum$outboundSchema;
}
