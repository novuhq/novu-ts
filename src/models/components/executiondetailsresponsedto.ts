/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import { ClosedEnum } from "../../types";
import * as z from "zod";

export const Channel = {
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
export type Channel = ClosedEnum<typeof Channel>;

export const Source = {
    Credentials: "Credentials",
    Internal: "Internal",
    Payload: "Payload",
    Webhook: "Webhook",
} as const;
export type Source = ClosedEnum<typeof Source>;

export const Status = {
    Success: "Success",
    Warning: "Warning",
    Failed: "Failed",
    Pending: "Pending",
    Queued: "Queued",
    ReadConfirmation: "ReadConfirmation",
} as const;
export type Status = ClosedEnum<typeof Status>;

export type ExecutionDetailsResponseDto = {
    id?: string | undefined;
    organizationId: string;
    jobId: string;
    environmentId: string;
    notificationId: string;
    notificationTemplateId: string;
    subscriberId: string;
    messageId?: string | undefined;
    providerId?: string | undefined;
    transactionId: string;
    channel: Channel;
    detail: string;
    source: Source;
    status: Status;
    isTest: boolean;
    isRetry: boolean;
    createdAt?: string | undefined;
};

/** @internal */
export namespace Channel$ {
    export const inboundSchema = z.nativeEnum(Channel);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Source$ {
    export const inboundSchema = z.nativeEnum(Source);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Status$ {
    export const inboundSchema = z.nativeEnum(Status);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ExecutionDetailsResponseDto$ {
    export const inboundSchema: z.ZodType<ExecutionDetailsResponseDto, z.ZodTypeDef, unknown> = z
        .object({
            _id: z.string().optional(),
            _organizationId: z.string(),
            _jobId: z.string(),
            _environmentId: z.string(),
            _notificationId: z.string(),
            _notificationTemplateId: z.string(),
            _subscriberId: z.string(),
            _messageId: z.string().optional(),
            providerId: z.string().optional(),
            transactionId: z.string(),
            channel: Channel$.inboundSchema,
            detail: z.string(),
            source: Source$.inboundSchema,
            status: Status$.inboundSchema,
            isTest: z.boolean(),
            isRetry: z.boolean(),
            createdAt: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                _id: "id",
                _organizationId: "organizationId",
                _jobId: "jobId",
                _environmentId: "environmentId",
                _notificationId: "notificationId",
                _notificationTemplateId: "notificationTemplateId",
                _subscriberId: "subscriberId",
                _messageId: "messageId",
            });
        });

    export type Outbound = {
        _id?: string | undefined;
        _organizationId: string;
        _jobId: string;
        _environmentId: string;
        _notificationId: string;
        _notificationTemplateId: string;
        _subscriberId: string;
        _messageId?: string | undefined;
        providerId?: string | undefined;
        transactionId: string;
        channel: string;
        detail: string;
        source: string;
        status: string;
        isTest: boolean;
        isRetry: boolean;
        createdAt?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ExecutionDetailsResponseDto> = z
        .object({
            id: z.string().optional(),
            organizationId: z.string(),
            jobId: z.string(),
            environmentId: z.string(),
            notificationId: z.string(),
            notificationTemplateId: z.string(),
            subscriberId: z.string(),
            messageId: z.string().optional(),
            providerId: z.string().optional(),
            transactionId: z.string(),
            channel: Channel$.outboundSchema,
            detail: z.string(),
            source: Source$.outboundSchema,
            status: Status$.outboundSchema,
            isTest: z.boolean(),
            isRetry: z.boolean(),
            createdAt: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                id: "_id",
                organizationId: "_organizationId",
                jobId: "_jobId",
                environmentId: "_environmentId",
                notificationId: "_notificationId",
                notificationTemplateId: "_notificationTemplateId",
                subscriberId: "_subscriberId",
                messageId: "_messageId",
            });
        });
}
