/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as z from "zod";

export type ListSubscriberPreferencesSecurity = {
    bearer?: string | undefined;
    apiKey?: string | undefined;
};

export type ListSubscriberPreferencesRequest = {
    subscriberId: string;
};

/** @internal */
export namespace ListSubscriberPreferencesSecurity$ {
    export const inboundSchema: z.ZodType<
        ListSubscriberPreferencesSecurity,
        z.ZodTypeDef,
        unknown
    > = z
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

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListSubscriberPreferencesSecurity
    > = z
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
export namespace ListSubscriberPreferencesRequest$ {
    export const inboundSchema: z.ZodType<ListSubscriberPreferencesRequest, z.ZodTypeDef, unknown> =
        z.object({
            subscriberId: z.string(),
        });

    export type Outbound = {
        subscriberId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListSubscriberPreferencesRequest
    > = z.object({
        subscriberId: z.string(),
    });
}
