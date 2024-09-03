/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type CreateLayoutResponseDto = {
    /**
     * The unique identifier for the Layout created.
     */
    id: string;
};

/** @internal */
export const CreateLayoutResponseDto$inboundSchema: z.ZodType<
    CreateLayoutResponseDto,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        _id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            _id: "id",
        });
    });

/** @internal */
export type CreateLayoutResponseDto$Outbound = {
    _id: string;
};

/** @internal */
export const CreateLayoutResponseDto$outboundSchema: z.ZodType<
    CreateLayoutResponseDto$Outbound,
    z.ZodTypeDef,
    CreateLayoutResponseDto
> = z
    .object({
        id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            id: "_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateLayoutResponseDto$ {
    /** @deprecated use `CreateLayoutResponseDto$inboundSchema` instead. */
    export const inboundSchema = CreateLayoutResponseDto$inboundSchema;
    /** @deprecated use `CreateLayoutResponseDto$outboundSchema` instead. */
    export const outboundSchema = CreateLayoutResponseDto$outboundSchema;
    /** @deprecated use `CreateLayoutResponseDto$Outbound` instead. */
    export type Outbound = CreateLayoutResponseDto$Outbound;
}
