/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  NotificationGroup,
  NotificationGroup$inboundSchema,
  NotificationGroup$Outbound,
  NotificationGroup$outboundSchema,
} from "./notificationgroup.js";
import {
  NotificationStep,
  NotificationStep$inboundSchema,
  NotificationStep$Outbound,
  NotificationStep$outboundSchema,
} from "./notificationstep.js";
import {
  NotificationTrigger,
  NotificationTrigger$inboundSchema,
  NotificationTrigger$Outbound,
  NotificationTrigger$outboundSchema,
} from "./notificationtrigger.js";
import {
  PreferenceChannels,
  PreferenceChannels$inboundSchema,
  PreferenceChannels$Outbound,
  PreferenceChannels$outboundSchema,
} from "./preferencechannels.js";

export type WorkflowResponseData = {};

export type WorkflowIntegrationStatus = {};

export type WorkflowResponse = {
  id?: string | undefined;
  name: string;
  description: string;
  active: boolean;
  draft: boolean;
  preferenceSettings: PreferenceChannels;
  critical: boolean;
  tags: Array<string>;
  steps: Array<NotificationStep>;
  organizationId: string;
  creatorId: string;
  environmentId: string;
  triggers: Array<NotificationTrigger>;
  notificationGroupId: string;
  parentId?: string | undefined;
  deleted: boolean;
  deletedAt: string;
  deletedBy: string;
  notificationGroup?: NotificationGroup | undefined;
  data?: WorkflowResponseData | undefined;
  workflowIntegrationStatus?: WorkflowIntegrationStatus | undefined;
};

/** @internal */
export const WorkflowResponseData$inboundSchema: z.ZodType<
  WorkflowResponseData,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type WorkflowResponseData$Outbound = {};

/** @internal */
export const WorkflowResponseData$outboundSchema: z.ZodType<
  WorkflowResponseData$Outbound,
  z.ZodTypeDef,
  WorkflowResponseData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkflowResponseData$ {
  /** @deprecated use `WorkflowResponseData$inboundSchema` instead. */
  export const inboundSchema = WorkflowResponseData$inboundSchema;
  /** @deprecated use `WorkflowResponseData$outboundSchema` instead. */
  export const outboundSchema = WorkflowResponseData$outboundSchema;
  /** @deprecated use `WorkflowResponseData$Outbound` instead. */
  export type Outbound = WorkflowResponseData$Outbound;
}

export function workflowResponseDataToJSON(
  workflowResponseData: WorkflowResponseData,
): string {
  return JSON.stringify(
    WorkflowResponseData$outboundSchema.parse(workflowResponseData),
  );
}

export function workflowResponseDataFromJSON(
  jsonString: string,
): SafeParseResult<WorkflowResponseData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WorkflowResponseData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WorkflowResponseData' from JSON`,
  );
}

/** @internal */
export const WorkflowIntegrationStatus$inboundSchema: z.ZodType<
  WorkflowIntegrationStatus,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type WorkflowIntegrationStatus$Outbound = {};

/** @internal */
export const WorkflowIntegrationStatus$outboundSchema: z.ZodType<
  WorkflowIntegrationStatus$Outbound,
  z.ZodTypeDef,
  WorkflowIntegrationStatus
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkflowIntegrationStatus$ {
  /** @deprecated use `WorkflowIntegrationStatus$inboundSchema` instead. */
  export const inboundSchema = WorkflowIntegrationStatus$inboundSchema;
  /** @deprecated use `WorkflowIntegrationStatus$outboundSchema` instead. */
  export const outboundSchema = WorkflowIntegrationStatus$outboundSchema;
  /** @deprecated use `WorkflowIntegrationStatus$Outbound` instead. */
  export type Outbound = WorkflowIntegrationStatus$Outbound;
}

export function workflowIntegrationStatusToJSON(
  workflowIntegrationStatus: WorkflowIntegrationStatus,
): string {
  return JSON.stringify(
    WorkflowIntegrationStatus$outboundSchema.parse(workflowIntegrationStatus),
  );
}

export function workflowIntegrationStatusFromJSON(
  jsonString: string,
): SafeParseResult<WorkflowIntegrationStatus, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WorkflowIntegrationStatus$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WorkflowIntegrationStatus' from JSON`,
  );
}

/** @internal */
export const WorkflowResponse$inboundSchema: z.ZodType<
  WorkflowResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  _id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  active: z.boolean(),
  draft: z.boolean(),
  preferenceSettings: PreferenceChannels$inboundSchema,
  critical: z.boolean(),
  tags: z.array(z.string()),
  steps: z.array(NotificationStep$inboundSchema),
  _organizationId: z.string(),
  _creatorId: z.string(),
  _environmentId: z.string(),
  triggers: z.array(NotificationTrigger$inboundSchema),
  _notificationGroupId: z.string(),
  _parentId: z.string().optional(),
  deleted: z.boolean(),
  deletedAt: z.string(),
  deletedBy: z.string(),
  notificationGroup: NotificationGroup$inboundSchema.optional(),
  data: z.lazy(() => WorkflowResponseData$inboundSchema).optional(),
  workflowIntegrationStatus: z.lazy(() =>
    WorkflowIntegrationStatus$inboundSchema
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "_id": "id",
    "_organizationId": "organizationId",
    "_creatorId": "creatorId",
    "_environmentId": "environmentId",
    "_notificationGroupId": "notificationGroupId",
    "_parentId": "parentId",
  });
});

/** @internal */
export type WorkflowResponse$Outbound = {
  _id?: string | undefined;
  name: string;
  description: string;
  active: boolean;
  draft: boolean;
  preferenceSettings: PreferenceChannels$Outbound;
  critical: boolean;
  tags: Array<string>;
  steps: Array<NotificationStep$Outbound>;
  _organizationId: string;
  _creatorId: string;
  _environmentId: string;
  triggers: Array<NotificationTrigger$Outbound>;
  _notificationGroupId: string;
  _parentId?: string | undefined;
  deleted: boolean;
  deletedAt: string;
  deletedBy: string;
  notificationGroup?: NotificationGroup$Outbound | undefined;
  data?: WorkflowResponseData$Outbound | undefined;
  workflowIntegrationStatus?: WorkflowIntegrationStatus$Outbound | undefined;
};

/** @internal */
export const WorkflowResponse$outboundSchema: z.ZodType<
  WorkflowResponse$Outbound,
  z.ZodTypeDef,
  WorkflowResponse
> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  active: z.boolean(),
  draft: z.boolean(),
  preferenceSettings: PreferenceChannels$outboundSchema,
  critical: z.boolean(),
  tags: z.array(z.string()),
  steps: z.array(NotificationStep$outboundSchema),
  organizationId: z.string(),
  creatorId: z.string(),
  environmentId: z.string(),
  triggers: z.array(NotificationTrigger$outboundSchema),
  notificationGroupId: z.string(),
  parentId: z.string().optional(),
  deleted: z.boolean(),
  deletedAt: z.string(),
  deletedBy: z.string(),
  notificationGroup: NotificationGroup$outboundSchema.optional(),
  data: z.lazy(() => WorkflowResponseData$outboundSchema).optional(),
  workflowIntegrationStatus: z.lazy(() =>
    WorkflowIntegrationStatus$outboundSchema
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    id: "_id",
    organizationId: "_organizationId",
    creatorId: "_creatorId",
    environmentId: "_environmentId",
    notificationGroupId: "_notificationGroupId",
    parentId: "_parentId",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkflowResponse$ {
  /** @deprecated use `WorkflowResponse$inboundSchema` instead. */
  export const inboundSchema = WorkflowResponse$inboundSchema;
  /** @deprecated use `WorkflowResponse$outboundSchema` instead. */
  export const outboundSchema = WorkflowResponse$outboundSchema;
  /** @deprecated use `WorkflowResponse$Outbound` instead. */
  export type Outbound = WorkflowResponse$Outbound;
}

export function workflowResponseToJSON(
  workflowResponse: WorkflowResponse,
): string {
  return JSON.stringify(
    WorkflowResponse$outboundSchema.parse(workflowResponse),
  );
}

export function workflowResponseFromJSON(
  jsonString: string,
): SafeParseResult<WorkflowResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WorkflowResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WorkflowResponse' from JSON`,
  );
}
