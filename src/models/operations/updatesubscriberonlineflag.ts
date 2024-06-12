/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type UpdateSubscriberOnlineFlagSecurity = {
    bearer?: string | undefined;
    apiKey?: string | undefined;
};

export type UpdateSubscriberOnlineFlagRequest = {
    subscriberId: string;
    updateSubscriberOnlineFlagRequestDto: components.UpdateSubscriberOnlineFlagRequestDto;
};

/** @internal */
export namespace UpdateSubscriberOnlineFlagSecurity$ {
    export const inboundSchema: z.ZodType<
        UpdateSubscriberOnlineFlagSecurity,
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
        UpdateSubscriberOnlineFlagSecurity
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
export namespace UpdateSubscriberOnlineFlagRequest$ {
    export const inboundSchema: z.ZodType<
        UpdateSubscriberOnlineFlagRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            subscriberId: z.string(),
            UpdateSubscriberOnlineFlagRequestDto:
                components.UpdateSubscriberOnlineFlagRequestDto$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                UpdateSubscriberOnlineFlagRequestDto: "updateSubscriberOnlineFlagRequestDto",
            });
        });

    export type Outbound = {
        subscriberId: string;
        UpdateSubscriberOnlineFlagRequestDto: components.UpdateSubscriberOnlineFlagRequestDto$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UpdateSubscriberOnlineFlagRequest
    > = z
        .object({
            subscriberId: z.string(),
            updateSubscriberOnlineFlagRequestDto:
                components.UpdateSubscriberOnlineFlagRequestDto$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                updateSubscriberOnlineFlagRequestDto: "UpdateSubscriberOnlineFlagRequestDto",
            });
        });
}
