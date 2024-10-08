/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  NotificationStep,
  NotificationStep$inboundSchema,
  NotificationStep$Outbound,
  NotificationStep$outboundSchema,
} from "./notificationstep.js";
import {
  PreferenceChannels,
  PreferenceChannels$inboundSchema,
  PreferenceChannels$Outbound,
  PreferenceChannels$outboundSchema,
} from "./preferencechannels.js";

export type CreateWorkflowRequestDtoData = {};

export type CreateWorkflowRequestDtoNotificationGroup = {};

export type CreateWorkflowRequestDto = {
  active?: boolean | undefined;
  blueprintId?: string | undefined;
  critical?: boolean | undefined;
  data?: CreateWorkflowRequestDtoData | undefined;
  description?: string | undefined;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  draft?: boolean | undefined;
  name: string;
  notificationGroup?: CreateWorkflowRequestDtoNotificationGroup | undefined;
  notificationGroupId: string;
  preferenceSettings?: PreferenceChannels | undefined;
  steps: Array<NotificationStep>;
  tags?: Array<string> | undefined;
};

/** @internal */
export const CreateWorkflowRequestDtoData$inboundSchema: z.ZodType<
  CreateWorkflowRequestDtoData,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CreateWorkflowRequestDtoData$Outbound = {};

/** @internal */
export const CreateWorkflowRequestDtoData$outboundSchema: z.ZodType<
  CreateWorkflowRequestDtoData$Outbound,
  z.ZodTypeDef,
  CreateWorkflowRequestDtoData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateWorkflowRequestDtoData$ {
  /** @deprecated use `CreateWorkflowRequestDtoData$inboundSchema` instead. */
  export const inboundSchema = CreateWorkflowRequestDtoData$inboundSchema;
  /** @deprecated use `CreateWorkflowRequestDtoData$outboundSchema` instead. */
  export const outboundSchema = CreateWorkflowRequestDtoData$outboundSchema;
  /** @deprecated use `CreateWorkflowRequestDtoData$Outbound` instead. */
  export type Outbound = CreateWorkflowRequestDtoData$Outbound;
}

/** @internal */
export const CreateWorkflowRequestDtoNotificationGroup$inboundSchema: z.ZodType<
  CreateWorkflowRequestDtoNotificationGroup,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CreateWorkflowRequestDtoNotificationGroup$Outbound = {};

/** @internal */
export const CreateWorkflowRequestDtoNotificationGroup$outboundSchema:
  z.ZodType<
    CreateWorkflowRequestDtoNotificationGroup$Outbound,
    z.ZodTypeDef,
    CreateWorkflowRequestDtoNotificationGroup
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateWorkflowRequestDtoNotificationGroup$ {
  /** @deprecated use `CreateWorkflowRequestDtoNotificationGroup$inboundSchema` instead. */
  export const inboundSchema =
    CreateWorkflowRequestDtoNotificationGroup$inboundSchema;
  /** @deprecated use `CreateWorkflowRequestDtoNotificationGroup$outboundSchema` instead. */
  export const outboundSchema =
    CreateWorkflowRequestDtoNotificationGroup$outboundSchema;
  /** @deprecated use `CreateWorkflowRequestDtoNotificationGroup$Outbound` instead. */
  export type Outbound = CreateWorkflowRequestDtoNotificationGroup$Outbound;
}

/** @internal */
export const CreateWorkflowRequestDto$inboundSchema: z.ZodType<
  CreateWorkflowRequestDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  active: z.boolean().optional(),
  blueprintId: z.string().optional(),
  critical: z.boolean().optional(),
  data: z.lazy(() => CreateWorkflowRequestDtoData$inboundSchema).optional(),
  description: z.string().optional(),
  draft: z.boolean().optional(),
  name: z.string(),
  notificationGroup: z.lazy(() =>
    CreateWorkflowRequestDtoNotificationGroup$inboundSchema
  ).optional(),
  notificationGroupId: z.string(),
  preferenceSettings: PreferenceChannels$inboundSchema.optional(),
  steps: z.array(NotificationStep$inboundSchema),
  tags: z.array(z.string()).optional(),
});

/** @internal */
export type CreateWorkflowRequestDto$Outbound = {
  active?: boolean | undefined;
  blueprintId?: string | undefined;
  critical?: boolean | undefined;
  data?: CreateWorkflowRequestDtoData$Outbound | undefined;
  description?: string | undefined;
  draft?: boolean | undefined;
  name: string;
  notificationGroup?:
    | CreateWorkflowRequestDtoNotificationGroup$Outbound
    | undefined;
  notificationGroupId: string;
  preferenceSettings?: PreferenceChannels$Outbound | undefined;
  steps: Array<NotificationStep$Outbound>;
  tags?: Array<string> | undefined;
};

/** @internal */
export const CreateWorkflowRequestDto$outboundSchema: z.ZodType<
  CreateWorkflowRequestDto$Outbound,
  z.ZodTypeDef,
  CreateWorkflowRequestDto
> = z.object({
  active: z.boolean().optional(),
  blueprintId: z.string().optional(),
  critical: z.boolean().optional(),
  data: z.lazy(() => CreateWorkflowRequestDtoData$outboundSchema).optional(),
  description: z.string().optional(),
  draft: z.boolean().optional(),
  name: z.string(),
  notificationGroup: z.lazy(() =>
    CreateWorkflowRequestDtoNotificationGroup$outboundSchema
  ).optional(),
  notificationGroupId: z.string(),
  preferenceSettings: PreferenceChannels$outboundSchema.optional(),
  steps: z.array(NotificationStep$outboundSchema),
  tags: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateWorkflowRequestDto$ {
  /** @deprecated use `CreateWorkflowRequestDto$inboundSchema` instead. */
  export const inboundSchema = CreateWorkflowRequestDto$inboundSchema;
  /** @deprecated use `CreateWorkflowRequestDto$outboundSchema` instead. */
  export const outboundSchema = CreateWorkflowRequestDto$outboundSchema;
  /** @deprecated use `CreateWorkflowRequestDto$Outbound` instead. */
  export type Outbound = CreateWorkflowRequestDto$Outbound;
}
