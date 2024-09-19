/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  DelayRegularMetadata,
  DelayRegularMetadata$inboundSchema,
  DelayRegularMetadata$Outbound,
  DelayRegularMetadata$outboundSchema,
} from "./delayregularmetadata.js";
import {
  DelayScheduledMetadata,
  DelayScheduledMetadata$inboundSchema,
  DelayScheduledMetadata$Outbound,
  DelayScheduledMetadata$outboundSchema,
} from "./delayscheduledmetadata.js";
import {
  DigestRegularMetadata,
  DigestRegularMetadata$inboundSchema,
  DigestRegularMetadata$Outbound,
  DigestRegularMetadata$outboundSchema,
} from "./digestregularmetadata.js";
import {
  DigestTimedMetadata,
  DigestTimedMetadata$inboundSchema,
  DigestTimedMetadata$Outbound,
  DigestTimedMetadata$outboundSchema,
} from "./digesttimedmetadata.js";
import {
  MessageTemplate,
  MessageTemplate$inboundSchema,
  MessageTemplate$Outbound,
  MessageTemplate$outboundSchema,
} from "./messagetemplate.js";
import {
  StepFilter,
  StepFilter$inboundSchema,
  StepFilter$Outbound,
  StepFilter$outboundSchema,
} from "./stepfilter.js";

export type NotificationStepVariantParentId = {};

export type NotificationStepVariantMetadata =
  | DelayScheduledMetadata
  | DelayRegularMetadata
  | DigestTimedMetadata
  | DigestRegularMetadata;

export type NotificationStepVariantReplyCallback = {};

export type NotificationStepVariant = {
  id?: string | undefined;
  parentId?: NotificationStepVariantParentId | undefined;
  templateId?: string | undefined;
  active?: boolean | undefined;
  filters?: Array<StepFilter> | undefined;
  metadata?:
    | DelayScheduledMetadata
    | DelayRegularMetadata
    | DigestTimedMetadata
    | DigestRegularMetadata
    | undefined;
  name?: string | undefined;
  replyCallback?: NotificationStepVariantReplyCallback | undefined;
  shouldStopOnFail?: boolean | undefined;
  template?: MessageTemplate | undefined;
  uuid?: string | undefined;
};

/** @internal */
export const NotificationStepVariantParentId$inboundSchema: z.ZodType<
  NotificationStepVariantParentId,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type NotificationStepVariantParentId$Outbound = {};

/** @internal */
export const NotificationStepVariantParentId$outboundSchema: z.ZodType<
  NotificationStepVariantParentId$Outbound,
  z.ZodTypeDef,
  NotificationStepVariantParentId
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotificationStepVariantParentId$ {
  /** @deprecated use `NotificationStepVariantParentId$inboundSchema` instead. */
  export const inboundSchema = NotificationStepVariantParentId$inboundSchema;
  /** @deprecated use `NotificationStepVariantParentId$outboundSchema` instead. */
  export const outboundSchema = NotificationStepVariantParentId$outboundSchema;
  /** @deprecated use `NotificationStepVariantParentId$Outbound` instead. */
  export type Outbound = NotificationStepVariantParentId$Outbound;
}

/** @internal */
export const NotificationStepVariantMetadata$inboundSchema: z.ZodType<
  NotificationStepVariantMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([
  DelayScheduledMetadata$inboundSchema,
  DelayRegularMetadata$inboundSchema,
  DigestTimedMetadata$inboundSchema,
  DigestRegularMetadata$inboundSchema,
]);

/** @internal */
export type NotificationStepVariantMetadata$Outbound =
  | DelayScheduledMetadata$Outbound
  | DelayRegularMetadata$Outbound
  | DigestTimedMetadata$Outbound
  | DigestRegularMetadata$Outbound;

/** @internal */
export const NotificationStepVariantMetadata$outboundSchema: z.ZodType<
  NotificationStepVariantMetadata$Outbound,
  z.ZodTypeDef,
  NotificationStepVariantMetadata
> = z.union([
  DelayScheduledMetadata$outboundSchema,
  DelayRegularMetadata$outboundSchema,
  DigestTimedMetadata$outboundSchema,
  DigestRegularMetadata$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotificationStepVariantMetadata$ {
  /** @deprecated use `NotificationStepVariantMetadata$inboundSchema` instead. */
  export const inboundSchema = NotificationStepVariantMetadata$inboundSchema;
  /** @deprecated use `NotificationStepVariantMetadata$outboundSchema` instead. */
  export const outboundSchema = NotificationStepVariantMetadata$outboundSchema;
  /** @deprecated use `NotificationStepVariantMetadata$Outbound` instead. */
  export type Outbound = NotificationStepVariantMetadata$Outbound;
}

/** @internal */
export const NotificationStepVariantReplyCallback$inboundSchema: z.ZodType<
  NotificationStepVariantReplyCallback,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type NotificationStepVariantReplyCallback$Outbound = {};

/** @internal */
export const NotificationStepVariantReplyCallback$outboundSchema: z.ZodType<
  NotificationStepVariantReplyCallback$Outbound,
  z.ZodTypeDef,
  NotificationStepVariantReplyCallback
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotificationStepVariantReplyCallback$ {
  /** @deprecated use `NotificationStepVariantReplyCallback$inboundSchema` instead. */
  export const inboundSchema =
    NotificationStepVariantReplyCallback$inboundSchema;
  /** @deprecated use `NotificationStepVariantReplyCallback$outboundSchema` instead. */
  export const outboundSchema =
    NotificationStepVariantReplyCallback$outboundSchema;
  /** @deprecated use `NotificationStepVariantReplyCallback$Outbound` instead. */
  export type Outbound = NotificationStepVariantReplyCallback$Outbound;
}

/** @internal */
export const NotificationStepVariant$inboundSchema: z.ZodType<
  NotificationStepVariant,
  z.ZodTypeDef,
  unknown
> = z.object({
  _id: z.string().optional(),
  _parentId: z.lazy(() => NotificationStepVariantParentId$inboundSchema)
    .optional(),
  _templateId: z.string().optional(),
  active: z.boolean().optional(),
  filters: z.array(StepFilter$inboundSchema).optional(),
  metadata: z.union([
    DelayScheduledMetadata$inboundSchema,
    DelayRegularMetadata$inboundSchema,
    DigestTimedMetadata$inboundSchema,
    DigestRegularMetadata$inboundSchema,
  ]).optional(),
  name: z.string().optional(),
  replyCallback: z.lazy(() =>
    NotificationStepVariantReplyCallback$inboundSchema
  ).optional(),
  shouldStopOnFail: z.boolean().optional(),
  template: MessageTemplate$inboundSchema.optional(),
  uuid: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "_id": "id",
    "_parentId": "parentId",
    "_templateId": "templateId",
  });
});

/** @internal */
export type NotificationStepVariant$Outbound = {
  _id?: string | undefined;
  _parentId?: NotificationStepVariantParentId$Outbound | undefined;
  _templateId?: string | undefined;
  active?: boolean | undefined;
  filters?: Array<StepFilter$Outbound> | undefined;
  metadata?:
    | DelayScheduledMetadata$Outbound
    | DelayRegularMetadata$Outbound
    | DigestTimedMetadata$Outbound
    | DigestRegularMetadata$Outbound
    | undefined;
  name?: string | undefined;
  replyCallback?: NotificationStepVariantReplyCallback$Outbound | undefined;
  shouldStopOnFail?: boolean | undefined;
  template?: MessageTemplate$Outbound | undefined;
  uuid?: string | undefined;
};

/** @internal */
export const NotificationStepVariant$outboundSchema: z.ZodType<
  NotificationStepVariant$Outbound,
  z.ZodTypeDef,
  NotificationStepVariant
> = z.object({
  id: z.string().optional(),
  parentId: z.lazy(() => NotificationStepVariantParentId$outboundSchema)
    .optional(),
  templateId: z.string().optional(),
  active: z.boolean().optional(),
  filters: z.array(StepFilter$outboundSchema).optional(),
  metadata: z.union([
    DelayScheduledMetadata$outboundSchema,
    DelayRegularMetadata$outboundSchema,
    DigestTimedMetadata$outboundSchema,
    DigestRegularMetadata$outboundSchema,
  ]).optional(),
  name: z.string().optional(),
  replyCallback: z.lazy(() =>
    NotificationStepVariantReplyCallback$outboundSchema
  ).optional(),
  shouldStopOnFail: z.boolean().optional(),
  template: MessageTemplate$outboundSchema.optional(),
  uuid: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    id: "_id",
    parentId: "_parentId",
    templateId: "_templateId",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotificationStepVariant$ {
  /** @deprecated use `NotificationStepVariant$inboundSchema` instead. */
  export const inboundSchema = NotificationStepVariant$inboundSchema;
  /** @deprecated use `NotificationStepVariant$outboundSchema` instead. */
  export const outboundSchema = NotificationStepVariant$outboundSchema;
  /** @deprecated use `NotificationStepVariant$Outbound` instead. */
  export type Outbound = NotificationStepVariant$Outbound;
}
