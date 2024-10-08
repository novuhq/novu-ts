/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";

export const ExecutionDetailsResponseDtoChannel = {
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
export type ExecutionDetailsResponseDtoChannel = ClosedEnum<
  typeof ExecutionDetailsResponseDtoChannel
>;

export const Source = {
  Credentials: "Credentials",
  Internal: "Internal",
  Payload: "Payload",
  Webhook: "Webhook",
} as const;
export type Source = ClosedEnum<typeof Source>;

export const ExecutionDetailsResponseDtoStatus = {
  Success: "Success",
  Warning: "Warning",
  Failed: "Failed",
  Pending: "Pending",
  Queued: "Queued",
  ReadConfirmation: "ReadConfirmation",
} as const;
export type ExecutionDetailsResponseDtoStatus = ClosedEnum<
  typeof ExecutionDetailsResponseDtoStatus
>;

export type ExecutionDetailsResponseDto = {
  environmentId: string;
  id?: string | undefined;
  jobId: string;
  messageId?: string | undefined;
  notificationId: string;
  notificationTemplateId: string;
  organizationId: string;
  subscriberId: string;
  channel: ExecutionDetailsResponseDtoChannel;
  createdAt?: string | undefined;
  detail: string;
  isRetry: boolean;
  isTest: boolean;
  providerId?: string | undefined;
  source: Source;
  status: ExecutionDetailsResponseDtoStatus;
  transactionId: string;
};

/** @internal */
export const ExecutionDetailsResponseDtoChannel$inboundSchema: z.ZodNativeEnum<
  typeof ExecutionDetailsResponseDtoChannel
> = z.nativeEnum(ExecutionDetailsResponseDtoChannel);

/** @internal */
export const ExecutionDetailsResponseDtoChannel$outboundSchema: z.ZodNativeEnum<
  typeof ExecutionDetailsResponseDtoChannel
> = ExecutionDetailsResponseDtoChannel$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExecutionDetailsResponseDtoChannel$ {
  /** @deprecated use `ExecutionDetailsResponseDtoChannel$inboundSchema` instead. */
  export const inboundSchema = ExecutionDetailsResponseDtoChannel$inboundSchema;
  /** @deprecated use `ExecutionDetailsResponseDtoChannel$outboundSchema` instead. */
  export const outboundSchema =
    ExecutionDetailsResponseDtoChannel$outboundSchema;
}

/** @internal */
export const Source$inboundSchema: z.ZodNativeEnum<typeof Source> = z
  .nativeEnum(Source);

/** @internal */
export const Source$outboundSchema: z.ZodNativeEnum<typeof Source> =
  Source$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Source$ {
  /** @deprecated use `Source$inboundSchema` instead. */
  export const inboundSchema = Source$inboundSchema;
  /** @deprecated use `Source$outboundSchema` instead. */
  export const outboundSchema = Source$outboundSchema;
}

/** @internal */
export const ExecutionDetailsResponseDtoStatus$inboundSchema: z.ZodNativeEnum<
  typeof ExecutionDetailsResponseDtoStatus
> = z.nativeEnum(ExecutionDetailsResponseDtoStatus);

/** @internal */
export const ExecutionDetailsResponseDtoStatus$outboundSchema: z.ZodNativeEnum<
  typeof ExecutionDetailsResponseDtoStatus
> = ExecutionDetailsResponseDtoStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExecutionDetailsResponseDtoStatus$ {
  /** @deprecated use `ExecutionDetailsResponseDtoStatus$inboundSchema` instead. */
  export const inboundSchema = ExecutionDetailsResponseDtoStatus$inboundSchema;
  /** @deprecated use `ExecutionDetailsResponseDtoStatus$outboundSchema` instead. */
  export const outboundSchema =
    ExecutionDetailsResponseDtoStatus$outboundSchema;
}

/** @internal */
export const ExecutionDetailsResponseDto$inboundSchema: z.ZodType<
  ExecutionDetailsResponseDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  _environmentId: z.string(),
  _id: z.string().optional(),
  _jobId: z.string(),
  _messageId: z.string().optional(),
  _notificationId: z.string(),
  _notificationTemplateId: z.string(),
  _organizationId: z.string(),
  _subscriberId: z.string(),
  channel: ExecutionDetailsResponseDtoChannel$inboundSchema,
  createdAt: z.string().optional(),
  detail: z.string(),
  isRetry: z.boolean(),
  isTest: z.boolean(),
  providerId: z.string().optional(),
  source: Source$inboundSchema,
  status: ExecutionDetailsResponseDtoStatus$inboundSchema,
  transactionId: z.string(),
}).transform((v) => {
  return remap$(v, {
    "_environmentId": "environmentId",
    "_id": "id",
    "_jobId": "jobId",
    "_messageId": "messageId",
    "_notificationId": "notificationId",
    "_notificationTemplateId": "notificationTemplateId",
    "_organizationId": "organizationId",
    "_subscriberId": "subscriberId",
  });
});

/** @internal */
export type ExecutionDetailsResponseDto$Outbound = {
  _environmentId: string;
  _id?: string | undefined;
  _jobId: string;
  _messageId?: string | undefined;
  _notificationId: string;
  _notificationTemplateId: string;
  _organizationId: string;
  _subscriberId: string;
  channel: string;
  createdAt?: string | undefined;
  detail: string;
  isRetry: boolean;
  isTest: boolean;
  providerId?: string | undefined;
  source: string;
  status: string;
  transactionId: string;
};

/** @internal */
export const ExecutionDetailsResponseDto$outboundSchema: z.ZodType<
  ExecutionDetailsResponseDto$Outbound,
  z.ZodTypeDef,
  ExecutionDetailsResponseDto
> = z.object({
  environmentId: z.string(),
  id: z.string().optional(),
  jobId: z.string(),
  messageId: z.string().optional(),
  notificationId: z.string(),
  notificationTemplateId: z.string(),
  organizationId: z.string(),
  subscriberId: z.string(),
  channel: ExecutionDetailsResponseDtoChannel$outboundSchema,
  createdAt: z.string().optional(),
  detail: z.string(),
  isRetry: z.boolean(),
  isTest: z.boolean(),
  providerId: z.string().optional(),
  source: Source$outboundSchema,
  status: ExecutionDetailsResponseDtoStatus$outboundSchema,
  transactionId: z.string(),
}).transform((v) => {
  return remap$(v, {
    environmentId: "_environmentId",
    id: "_id",
    jobId: "_jobId",
    messageId: "_messageId",
    notificationId: "_notificationId",
    notificationTemplateId: "_notificationTemplateId",
    organizationId: "_organizationId",
    subscriberId: "_subscriberId",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExecutionDetailsResponseDto$ {
  /** @deprecated use `ExecutionDetailsResponseDto$inboundSchema` instead. */
  export const inboundSchema = ExecutionDetailsResponseDto$inboundSchema;
  /** @deprecated use `ExecutionDetailsResponseDto$outboundSchema` instead. */
  export const outboundSchema = ExecutionDetailsResponseDto$outboundSchema;
  /** @deprecated use `ExecutionDetailsResponseDto$Outbound` instead. */
  export type Outbound = ExecutionDetailsResponseDto$Outbound;
}
