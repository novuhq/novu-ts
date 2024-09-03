/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const DelayScheduledMetadataType = {
    Scheduled: "scheduled",
} as const;
export type DelayScheduledMetadataType = ClosedEnum<typeof DelayScheduledMetadataType>;

export type DelayScheduledMetadata = {
    delayPath: string;
    type: DelayScheduledMetadataType;
};

/** @internal */
export const DelayScheduledMetadataType$inboundSchema: z.ZodNativeEnum<
    typeof DelayScheduledMetadataType
> = z.nativeEnum(DelayScheduledMetadataType);

/** @internal */
export const DelayScheduledMetadataType$outboundSchema: z.ZodNativeEnum<
    typeof DelayScheduledMetadataType
> = DelayScheduledMetadataType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DelayScheduledMetadataType$ {
    /** @deprecated use `DelayScheduledMetadataType$inboundSchema` instead. */
    export const inboundSchema = DelayScheduledMetadataType$inboundSchema;
    /** @deprecated use `DelayScheduledMetadataType$outboundSchema` instead. */
    export const outboundSchema = DelayScheduledMetadataType$outboundSchema;
}

/** @internal */
export const DelayScheduledMetadata$inboundSchema: z.ZodType<
    DelayScheduledMetadata,
    z.ZodTypeDef,
    unknown
> = z.object({
    delayPath: z.string(),
    type: DelayScheduledMetadataType$inboundSchema,
});

/** @internal */
export type DelayScheduledMetadata$Outbound = {
    delayPath: string;
    type: string;
};

/** @internal */
export const DelayScheduledMetadata$outboundSchema: z.ZodType<
    DelayScheduledMetadata$Outbound,
    z.ZodTypeDef,
    DelayScheduledMetadata
> = z.object({
    delayPath: z.string(),
    type: DelayScheduledMetadataType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DelayScheduledMetadata$ {
    /** @deprecated use `DelayScheduledMetadata$inboundSchema` instead. */
    export const inboundSchema = DelayScheduledMetadata$inboundSchema;
    /** @deprecated use `DelayScheduledMetadata$outboundSchema` instead. */
    export const outboundSchema = DelayScheduledMetadata$outboundSchema;
    /** @deprecated use `DelayScheduledMetadata$Outbound` instead. */
    export type Outbound = DelayScheduledMetadata$Outbound;
}
