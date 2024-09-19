/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import {
  NotificationTriggerVariable,
  NotificationTriggerVariable$inboundSchema,
  NotificationTriggerVariable$Outbound,
  NotificationTriggerVariable$outboundSchema,
} from "./notificationtriggervariable.js";

export const NotificationTriggerType = {
  Event: "event",
} as const;
export type NotificationTriggerType = ClosedEnum<
  typeof NotificationTriggerType
>;

export type NotificationTrigger = {
  identifier: string;
  subscriberVariables?: Array<NotificationTriggerVariable> | undefined;
  type: NotificationTriggerType;
  variables: Array<NotificationTriggerVariable>;
};

/** @internal */
export const NotificationTriggerType$inboundSchema: z.ZodNativeEnum<
  typeof NotificationTriggerType
> = z.nativeEnum(NotificationTriggerType);

/** @internal */
export const NotificationTriggerType$outboundSchema: z.ZodNativeEnum<
  typeof NotificationTriggerType
> = NotificationTriggerType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotificationTriggerType$ {
  /** @deprecated use `NotificationTriggerType$inboundSchema` instead. */
  export const inboundSchema = NotificationTriggerType$inboundSchema;
  /** @deprecated use `NotificationTriggerType$outboundSchema` instead. */
  export const outboundSchema = NotificationTriggerType$outboundSchema;
}

/** @internal */
export const NotificationTrigger$inboundSchema: z.ZodType<
  NotificationTrigger,
  z.ZodTypeDef,
  unknown
> = z.object({
  identifier: z.string(),
  subscriberVariables: z.array(NotificationTriggerVariable$inboundSchema)
    .optional(),
  type: NotificationTriggerType$inboundSchema,
  variables: z.array(NotificationTriggerVariable$inboundSchema),
});

/** @internal */
export type NotificationTrigger$Outbound = {
  identifier: string;
  subscriberVariables?: Array<NotificationTriggerVariable$Outbound> | undefined;
  type: string;
  variables: Array<NotificationTriggerVariable$Outbound>;
};

/** @internal */
export const NotificationTrigger$outboundSchema: z.ZodType<
  NotificationTrigger$Outbound,
  z.ZodTypeDef,
  NotificationTrigger
> = z.object({
  identifier: z.string(),
  subscriberVariables: z.array(NotificationTriggerVariable$outboundSchema)
    .optional(),
  type: NotificationTriggerType$outboundSchema,
  variables: z.array(NotificationTriggerVariable$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotificationTrigger$ {
  /** @deprecated use `NotificationTrigger$inboundSchema` instead. */
  export const inboundSchema = NotificationTrigger$inboundSchema;
  /** @deprecated use `NotificationTrigger$outboundSchema` instead. */
  export const outboundSchema = NotificationTrigger$outboundSchema;
  /** @deprecated use `NotificationTrigger$Outbound` instead. */
  export type Outbound = NotificationTrigger$Outbound;
}
