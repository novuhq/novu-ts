/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
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
import * as z from "zod";

export type WorkflowResponseData = {};

export type WorkflowIntegrationStatus = {};

export type WorkflowResponse = {
    creatorId: string;
    environmentId: string;
    id?: string | undefined;
    notificationGroupId: string;
    organizationId: string;
    parentId?: string | undefined;
    active: boolean;
    critical: boolean;
    data?: WorkflowResponseData | undefined;
    deleted: boolean;
    deletedAt: string;
    deletedBy: string;
    description: string;
    draft: boolean;
    name: string;
    notificationGroup?: NotificationGroup | undefined;
    preferenceSettings: PreferenceChannels;
    steps: Array<NotificationStep>;
    tags: Array<string>;
    triggers: Array<NotificationTrigger>;
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

/** @internal */
export const WorkflowResponse$inboundSchema: z.ZodType<WorkflowResponse, z.ZodTypeDef, unknown> = z
    .object({
        _creatorId: z.string(),
        _environmentId: z.string(),
        _id: z.string().optional(),
        _notificationGroupId: z.string(),
        _organizationId: z.string(),
        _parentId: z.string().optional(),
        active: z.boolean(),
        critical: z.boolean(),
        data: z.lazy(() => WorkflowResponseData$inboundSchema).optional(),
        deleted: z.boolean(),
        deletedAt: z.string(),
        deletedBy: z.string(),
        description: z.string(),
        draft: z.boolean(),
        name: z.string(),
        notificationGroup: NotificationGroup$inboundSchema.optional(),
        preferenceSettings: PreferenceChannels$inboundSchema,
        steps: z.array(NotificationStep$inboundSchema),
        tags: z.array(z.string()),
        triggers: z.array(NotificationTrigger$inboundSchema),
        workflowIntegrationStatus: z.lazy(() => WorkflowIntegrationStatus$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            _creatorId: "creatorId",
            _environmentId: "environmentId",
            _id: "id",
            _notificationGroupId: "notificationGroupId",
            _organizationId: "organizationId",
            _parentId: "parentId",
        });
    });

/** @internal */
export type WorkflowResponse$Outbound = {
    _creatorId: string;
    _environmentId: string;
    _id?: string | undefined;
    _notificationGroupId: string;
    _organizationId: string;
    _parentId?: string | undefined;
    active: boolean;
    critical: boolean;
    data?: WorkflowResponseData$Outbound | undefined;
    deleted: boolean;
    deletedAt: string;
    deletedBy: string;
    description: string;
    draft: boolean;
    name: string;
    notificationGroup?: NotificationGroup$Outbound | undefined;
    preferenceSettings: PreferenceChannels$Outbound;
    steps: Array<NotificationStep$Outbound>;
    tags: Array<string>;
    triggers: Array<NotificationTrigger$Outbound>;
    workflowIntegrationStatus?: WorkflowIntegrationStatus$Outbound | undefined;
};

/** @internal */
export const WorkflowResponse$outboundSchema: z.ZodType<
    WorkflowResponse$Outbound,
    z.ZodTypeDef,
    WorkflowResponse
> = z
    .object({
        creatorId: z.string(),
        environmentId: z.string(),
        id: z.string().optional(),
        notificationGroupId: z.string(),
        organizationId: z.string(),
        parentId: z.string().optional(),
        active: z.boolean(),
        critical: z.boolean(),
        data: z.lazy(() => WorkflowResponseData$outboundSchema).optional(),
        deleted: z.boolean(),
        deletedAt: z.string(),
        deletedBy: z.string(),
        description: z.string(),
        draft: z.boolean(),
        name: z.string(),
        notificationGroup: NotificationGroup$outboundSchema.optional(),
        preferenceSettings: PreferenceChannels$outboundSchema,
        steps: z.array(NotificationStep$outboundSchema),
        tags: z.array(z.string()),
        triggers: z.array(NotificationTrigger$outboundSchema),
        workflowIntegrationStatus: z
            .lazy(() => WorkflowIntegrationStatus$outboundSchema)
            .optional(),
    })
    .transform((v) => {
        return remap$(v, {
            creatorId: "_creatorId",
            environmentId: "_environmentId",
            id: "_id",
            notificationGroupId: "_notificationGroupId",
            organizationId: "_organizationId",
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
