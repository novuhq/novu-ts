/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type UpdateSubscriberRequestDtoData = {};

export type UpdateSubscriberRequestDto = {
    avatar?: string | undefined;
    data?: UpdateSubscriberRequestDtoData | undefined;
    email?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    locale?: string | undefined;
    phone?: string | undefined;
};

/** @internal */
export const UpdateSubscriberRequestDtoData$inboundSchema: z.ZodType<
    UpdateSubscriberRequestDtoData,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UpdateSubscriberRequestDtoData$Outbound = {};

/** @internal */
export const UpdateSubscriberRequestDtoData$outboundSchema: z.ZodType<
    UpdateSubscriberRequestDtoData$Outbound,
    z.ZodTypeDef,
    UpdateSubscriberRequestDtoData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateSubscriberRequestDtoData$ {
    /** @deprecated use `UpdateSubscriberRequestDtoData$inboundSchema` instead. */
    export const inboundSchema = UpdateSubscriberRequestDtoData$inboundSchema;
    /** @deprecated use `UpdateSubscriberRequestDtoData$outboundSchema` instead. */
    export const outboundSchema = UpdateSubscriberRequestDtoData$outboundSchema;
    /** @deprecated use `UpdateSubscriberRequestDtoData$Outbound` instead. */
    export type Outbound = UpdateSubscriberRequestDtoData$Outbound;
}

/** @internal */
export const UpdateSubscriberRequestDto$inboundSchema: z.ZodType<
    UpdateSubscriberRequestDto,
    z.ZodTypeDef,
    unknown
> = z.object({
    avatar: z.string().optional(),
    data: z.lazy(() => UpdateSubscriberRequestDtoData$inboundSchema).optional(),
    email: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    locale: z.string().optional(),
    phone: z.string().optional(),
});

/** @internal */
export type UpdateSubscriberRequestDto$Outbound = {
    avatar?: string | undefined;
    data?: UpdateSubscriberRequestDtoData$Outbound | undefined;
    email?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    locale?: string | undefined;
    phone?: string | undefined;
};

/** @internal */
export const UpdateSubscriberRequestDto$outboundSchema: z.ZodType<
    UpdateSubscriberRequestDto$Outbound,
    z.ZodTypeDef,
    UpdateSubscriberRequestDto
> = z.object({
    avatar: z.string().optional(),
    data: z.lazy(() => UpdateSubscriberRequestDtoData$outboundSchema).optional(),
    email: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    locale: z.string().optional(),
    phone: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateSubscriberRequestDto$ {
    /** @deprecated use `UpdateSubscriberRequestDto$inboundSchema` instead. */
    export const inboundSchema = UpdateSubscriberRequestDto$inboundSchema;
    /** @deprecated use `UpdateSubscriberRequestDto$outboundSchema` instead. */
    export const outboundSchema = UpdateSubscriberRequestDto$outboundSchema;
    /** @deprecated use `UpdateSubscriberRequestDto$Outbound` instead. */
    export type Outbound = UpdateSubscriberRequestDto$Outbound;
}
