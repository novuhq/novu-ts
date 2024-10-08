/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest =
  {
    notificationId: string;
    subscriberId: string;
  };

/** @internal */
export const ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest$inboundSchema:
  z.ZodType<
    ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    notificationId: z.string(),
    subscriberId: z.string(),
  });

/** @internal */
export type ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest$Outbound =
  {
    notificationId: string;
    subscriberId: string;
  };

/** @internal */
export const ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest$outboundSchema:
  z.ZodType<
    ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest$Outbound,
    z.ZodTypeDef,
    ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest
  > = z.object({
    notificationId: z.string(),
    subscriberId: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest$ {
  /** @deprecated use `ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest$inboundSchema` instead. */
  export const inboundSchema =
    ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest$inboundSchema;
  /** @deprecated use `ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest$outboundSchema` instead. */
  export const outboundSchema =
    ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest$outboundSchema;
  /** @deprecated use `ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest$Outbound` instead. */
  export type Outbound =
    ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest$Outbound;
}
