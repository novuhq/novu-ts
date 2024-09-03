/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type NotificationGroupsControllerDeleteNotificationGroupRequest = {
    id: string;
};

/** @internal */
export const NotificationGroupsControllerDeleteNotificationGroupRequest$inboundSchema: z.ZodType<
    NotificationGroupsControllerDeleteNotificationGroupRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
});

/** @internal */
export type NotificationGroupsControllerDeleteNotificationGroupRequest$Outbound = {
    id: string;
};

/** @internal */
export const NotificationGroupsControllerDeleteNotificationGroupRequest$outboundSchema: z.ZodType<
    NotificationGroupsControllerDeleteNotificationGroupRequest$Outbound,
    z.ZodTypeDef,
    NotificationGroupsControllerDeleteNotificationGroupRequest
> = z.object({
    id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotificationGroupsControllerDeleteNotificationGroupRequest$ {
    /** @deprecated use `NotificationGroupsControllerDeleteNotificationGroupRequest$inboundSchema` instead. */
    export const inboundSchema =
        NotificationGroupsControllerDeleteNotificationGroupRequest$inboundSchema;
    /** @deprecated use `NotificationGroupsControllerDeleteNotificationGroupRequest$outboundSchema` instead. */
    export const outboundSchema =
        NotificationGroupsControllerDeleteNotificationGroupRequest$outboundSchema;
    /** @deprecated use `NotificationGroupsControllerDeleteNotificationGroupRequest$Outbound` instead. */
    export type Outbound = NotificationGroupsControllerDeleteNotificationGroupRequest$Outbound;
}
