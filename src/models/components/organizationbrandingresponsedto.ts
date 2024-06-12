/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types";
import * as z from "zod";

export const Direction = {
    Ltr: "ltr",
    Trl: "trl",
} as const;
export type Direction = ClosedEnum<typeof Direction>;

export type OrganizationBrandingResponseDto = {
    direction?: Direction | undefined;
    logo: string;
    color: string;
    fontColor: string;
    contentBackground: string;
    fontFamily?: string | undefined;
};

/** @internal */
export namespace Direction$ {
    export const inboundSchema = z.nativeEnum(Direction);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace OrganizationBrandingResponseDto$ {
    export const inboundSchema: z.ZodType<OrganizationBrandingResponseDto, z.ZodTypeDef, unknown> =
        z.object({
            direction: Direction$.inboundSchema.optional(),
            logo: z.string(),
            color: z.string(),
            fontColor: z.string(),
            contentBackground: z.string(),
            fontFamily: z.string().optional(),
        });

    export type Outbound = {
        direction?: string | undefined;
        logo: string;
        color: string;
        fontColor: string;
        contentBackground: string;
        fontFamily?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        OrganizationBrandingResponseDto
    > = z.object({
        direction: Direction$.outboundSchema.optional(),
        logo: z.string(),
        color: z.string(),
        fontColor: z.string(),
        contentBackground: z.string(),
        fontFamily: z.string().optional(),
    });
}
