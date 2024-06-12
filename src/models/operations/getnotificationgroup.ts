/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as z from "zod";

export type GetNotificationGroupSecurity = {
    bearer?: string | undefined;
    apiKey?: string | undefined;
};

export type GetNotificationGroupRequest = {
    id: string;
};

/** @internal */
export namespace GetNotificationGroupSecurity$ {
    export const inboundSchema: z.ZodType<GetNotificationGroupSecurity, z.ZodTypeDef, unknown> = z
        .object({
            bearer: z.string().optional(),
            "api-key": z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                "api-key": "apiKey",
            });
        });

    export type Outbound = {
        bearer?: string | undefined;
        "api-key"?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetNotificationGroupSecurity> = z
        .object({
            bearer: z.string().optional(),
            apiKey: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                apiKey: "api-key",
            });
        });
}

/** @internal */
export namespace GetNotificationGroupRequest$ {
    export const inboundSchema: z.ZodType<GetNotificationGroupRequest, z.ZodTypeDef, unknown> =
        z.object({
            id: z.string(),
        });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetNotificationGroupRequest> =
        z.object({
            id: z.string(),
        });
}
