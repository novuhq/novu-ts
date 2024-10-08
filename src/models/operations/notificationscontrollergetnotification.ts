/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type NotificationsControllerGetNotificationRequest = {
  notificationId: string;
};

/** @internal */
export const NotificationsControllerGetNotificationRequest$inboundSchema:
  z.ZodType<
    NotificationsControllerGetNotificationRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    notificationId: z.string(),
  });

/** @internal */
export type NotificationsControllerGetNotificationRequest$Outbound = {
  notificationId: string;
};

/** @internal */
export const NotificationsControllerGetNotificationRequest$outboundSchema:
  z.ZodType<
    NotificationsControllerGetNotificationRequest$Outbound,
    z.ZodTypeDef,
    NotificationsControllerGetNotificationRequest
  > = z.object({
    notificationId: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotificationsControllerGetNotificationRequest$ {
  /** @deprecated use `NotificationsControllerGetNotificationRequest$inboundSchema` instead. */
  export const inboundSchema =
    NotificationsControllerGetNotificationRequest$inboundSchema;
  /** @deprecated use `NotificationsControllerGetNotificationRequest$outboundSchema` instead. */
  export const outboundSchema =
    NotificationsControllerGetNotificationRequest$outboundSchema;
  /** @deprecated use `NotificationsControllerGetNotificationRequest$Outbound` instead. */
  export type Outbound = NotificationsControllerGetNotificationRequest$Outbound;
}
