/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type RemoveSubscribersSecurity = {
    bearer?: string | undefined;
    apiKey?: string | undefined;
};

export type RemoveSubscribersRequest = {
    topicKey: string;
    removeSubscribersRequestDto: components.RemoveSubscribersRequestDto;
};

/** @internal */
export namespace RemoveSubscribersSecurity$ {
    export const inboundSchema: z.ZodType<RemoveSubscribersSecurity, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RemoveSubscribersSecurity> = z
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
export namespace RemoveSubscribersRequest$ {
    export const inboundSchema: z.ZodType<RemoveSubscribersRequest, z.ZodTypeDef, unknown> = z
        .object({
            topicKey: z.string(),
            RemoveSubscribersRequestDto: components.RemoveSubscribersRequestDto$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                RemoveSubscribersRequestDto: "removeSubscribersRequestDto",
            });
        });

    export type Outbound = {
        topicKey: string;
        RemoveSubscribersRequestDto: components.RemoveSubscribersRequestDto$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RemoveSubscribersRequest> = z
        .object({
            topicKey: z.string(),
            removeSubscribersRequestDto: components.RemoveSubscribersRequestDto$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                removeSubscribersRequestDto: "RemoveSubscribersRequestDto",
            });
        });
}
