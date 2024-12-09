/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Actor,
  Actor$inboundSchema,
  Actor$Outbound,
  Actor$outboundSchema,
} from "./actor.js";
import {
  MessageCTA,
  MessageCTA$inboundSchema,
  MessageCTA$Outbound,
  MessageCTA$outboundSchema,
} from "./messagecta.js";
import {
  SubscriberResponseDto,
  SubscriberResponseDto$inboundSchema,
  SubscriberResponseDto$Outbound,
  SubscriberResponseDto$outboundSchema,
} from "./subscriberresponsedto.js";

/**
 * The channel through which the notification is sent.
 */
export const NotificationDtoChannel = {
  InApp: "in_app",
  Email: "email",
  Sms: "sms",
  Chat: "chat",
  Push: "push",
} as const;
/**
 * The channel through which the notification is sent.
 */
export type NotificationDtoChannel = ClosedEnum<typeof NotificationDtoChannel>;

/**
 * Current status of the notification.
 */
export const NotificationDtoStatus = {
  Sent: "sent",
  Error: "error",
  Warning: "warning",
} as const;
/**
 * Current status of the notification.
 */
export type NotificationDtoStatus = ClosedEnum<typeof NotificationDtoStatus>;

export type NotificationDto = {
  /**
   * Unique identifier for the notification.
   */
  id: string;
  /**
   * Identifier for the template used to generate the notification.
   */
  templateId: string;
  /**
   * Identifier for the environment where the notification is sent.
   */
  environmentId: string;
  /**
   * Identifier for the message template used.
   */
  messageTemplateId: string;
  /**
   * Identifier for the organization sending the notification.
   */
  organizationId: string;
  /**
   * Unique identifier for the notification instance.
   */
  notificationId: string;
  /**
   * Unique identifier for the subscriber receiving the notification.
   */
  subscriberId: string;
  /**
   * Identifier for the feed associated with the notification.
   */
  feedId: string;
  /**
   * Identifier for the job that triggered the notification.
   */
  jobId: string;
  /**
   * Timestamp indicating when the notification was created.
   */
  createdAt?: Date | null | undefined;
  /**
   * Timestamp indicating when the notification was last updated.
   */
  updatedAt?: Date | null | undefined;
  /**
   * Actor details related to the notification, if applicable.
   */
  actor?: Actor | undefined;
  /**
   * Subscriber details associated with this notification.
   */
  subscriber?: SubscriberResponseDto | undefined;
  /**
   * Unique identifier for the transaction associated with the notification.
   */
  transactionId: string;
  /**
   * Identifier for the template used, if applicable.
   */
  templateIdentifier?: string | null | undefined;
  /**
   * Identifier for the provider that sends the notification.
   */
  providerId?: string | null | undefined;
  /**
   * The main content of the notification.
   */
  content: string;
  /**
   * The subject line for email notifications, if applicable.
   */
  subject?: string | null | undefined;
  /**
   * The channel through which the notification is sent.
   */
  channel: NotificationDtoChannel;
  /**
   * Indicates whether the notification has been read by the subscriber.
   */
  read: boolean;
  /**
   * Indicates whether the notification has been seen by the subscriber.
   */
  seen: boolean;
  /**
   * Indicates whether the notification has been deleted.
   */
  deleted: boolean;
  /**
   * Device tokens for push notifications, if applicable.
   */
  deviceTokens?: Array<string> | null | undefined;
  /**
   * Call-to-action information associated with the notification.
   */
  cta: MessageCTA;
  /**
   * Current status of the notification.
   */
  status: NotificationDtoStatus;
  /**
   * The payload that was used to send the notification trigger.
   */
  payload?: { [k: string]: any } | undefined;
  /**
   * Provider-specific overrides used when triggering the notification.
   */
  overrides?: { [k: string]: any } | undefined;
};

/** @internal */
export const NotificationDtoChannel$inboundSchema: z.ZodNativeEnum<
  typeof NotificationDtoChannel
> = z.nativeEnum(NotificationDtoChannel);

/** @internal */
export const NotificationDtoChannel$outboundSchema: z.ZodNativeEnum<
  typeof NotificationDtoChannel
> = NotificationDtoChannel$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotificationDtoChannel$ {
  /** @deprecated use `NotificationDtoChannel$inboundSchema` instead. */
  export const inboundSchema = NotificationDtoChannel$inboundSchema;
  /** @deprecated use `NotificationDtoChannel$outboundSchema` instead. */
  export const outboundSchema = NotificationDtoChannel$outboundSchema;
}

/** @internal */
export const NotificationDtoStatus$inboundSchema: z.ZodNativeEnum<
  typeof NotificationDtoStatus
> = z.nativeEnum(NotificationDtoStatus);

/** @internal */
export const NotificationDtoStatus$outboundSchema: z.ZodNativeEnum<
  typeof NotificationDtoStatus
> = NotificationDtoStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotificationDtoStatus$ {
  /** @deprecated use `NotificationDtoStatus$inboundSchema` instead. */
  export const inboundSchema = NotificationDtoStatus$inboundSchema;
  /** @deprecated use `NotificationDtoStatus$outboundSchema` instead. */
  export const outboundSchema = NotificationDtoStatus$outboundSchema;
}

/** @internal */
export const NotificationDto$inboundSchema: z.ZodType<
  NotificationDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  _id: z.string(),
  _templateId: z.string(),
  _environmentId: z.string(),
  _messageTemplateId: z.string(),
  _organizationId: z.string(),
  _notificationId: z.string(),
  _subscriberId: z.string(),
  _feedId: z.string(),
  _jobId: z.string(),
  createdAt: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  updatedAt: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  actor: Actor$inboundSchema.optional(),
  subscriber: SubscriberResponseDto$inboundSchema.optional(),
  transactionId: z.string(),
  templateIdentifier: z.nullable(z.string()).optional(),
  providerId: z.nullable(z.string()).optional(),
  content: z.string(),
  subject: z.nullable(z.string()).optional(),
  channel: NotificationDtoChannel$inboundSchema,
  read: z.boolean(),
  seen: z.boolean(),
  deleted: z.boolean(),
  deviceTokens: z.nullable(z.array(z.string())).optional(),
  cta: MessageCTA$inboundSchema,
  status: NotificationDtoStatus$inboundSchema,
  payload: z.record(z.any()).optional(),
  overrides: z.record(z.any()).optional(),
}).transform((v) => {
  return remap$(v, {
    "_id": "id",
    "_templateId": "templateId",
    "_environmentId": "environmentId",
    "_messageTemplateId": "messageTemplateId",
    "_organizationId": "organizationId",
    "_notificationId": "notificationId",
    "_subscriberId": "subscriberId",
    "_feedId": "feedId",
    "_jobId": "jobId",
  });
});

/** @internal */
export type NotificationDto$Outbound = {
  _id: string;
  _templateId: string;
  _environmentId: string;
  _messageTemplateId: string;
  _organizationId: string;
  _notificationId: string;
  _subscriberId: string;
  _feedId: string;
  _jobId: string;
  createdAt?: string | null | undefined;
  updatedAt?: string | null | undefined;
  actor?: Actor$Outbound | undefined;
  subscriber?: SubscriberResponseDto$Outbound | undefined;
  transactionId: string;
  templateIdentifier?: string | null | undefined;
  providerId?: string | null | undefined;
  content: string;
  subject?: string | null | undefined;
  channel: string;
  read: boolean;
  seen: boolean;
  deleted: boolean;
  deviceTokens?: Array<string> | null | undefined;
  cta: MessageCTA$Outbound;
  status: string;
  payload?: { [k: string]: any } | undefined;
  overrides?: { [k: string]: any } | undefined;
};

/** @internal */
export const NotificationDto$outboundSchema: z.ZodType<
  NotificationDto$Outbound,
  z.ZodTypeDef,
  NotificationDto
> = z.object({
  id: z.string(),
  templateId: z.string(),
  environmentId: z.string(),
  messageTemplateId: z.string(),
  organizationId: z.string(),
  notificationId: z.string(),
  subscriberId: z.string(),
  feedId: z.string(),
  jobId: z.string(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  actor: Actor$outboundSchema.optional(),
  subscriber: SubscriberResponseDto$outboundSchema.optional(),
  transactionId: z.string(),
  templateIdentifier: z.nullable(z.string()).optional(),
  providerId: z.nullable(z.string()).optional(),
  content: z.string(),
  subject: z.nullable(z.string()).optional(),
  channel: NotificationDtoChannel$outboundSchema,
  read: z.boolean(),
  seen: z.boolean(),
  deleted: z.boolean(),
  deviceTokens: z.nullable(z.array(z.string())).optional(),
  cta: MessageCTA$outboundSchema,
  status: NotificationDtoStatus$outboundSchema,
  payload: z.record(z.any()).optional(),
  overrides: z.record(z.any()).optional(),
}).transform((v) => {
  return remap$(v, {
    id: "_id",
    templateId: "_templateId",
    environmentId: "_environmentId",
    messageTemplateId: "_messageTemplateId",
    organizationId: "_organizationId",
    notificationId: "_notificationId",
    subscriberId: "_subscriberId",
    feedId: "_feedId",
    jobId: "_jobId",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotificationDto$ {
  /** @deprecated use `NotificationDto$inboundSchema` instead. */
  export const inboundSchema = NotificationDto$inboundSchema;
  /** @deprecated use `NotificationDto$outboundSchema` instead. */
  export const outboundSchema = NotificationDto$outboundSchema;
  /** @deprecated use `NotificationDto$Outbound` instead. */
  export type Outbound = NotificationDto$Outbound;
}

export function notificationDtoToJSON(
  notificationDto: NotificationDto,
): string {
  return JSON.stringify(NotificationDto$outboundSchema.parse(notificationDto));
}

export function notificationDtoFromJSON(
  jsonString: string,
): SafeParseResult<NotificationDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NotificationDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NotificationDto' from JSON`,
  );
}
