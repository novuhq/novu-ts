/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type MarkMessagesAsSecurity = {
    bearer?: string | undefined;
    apiKey?: string | undefined;
};

export type MarkMessagesAsRequest = {
    subscriberId: string;
    messageMarkAsRequestDto: components.MessageMarkAsRequestDto;
};

/** @internal */
export namespace MarkMessagesAsSecurity$ {
    export const inboundSchema: z.ZodType<MarkMessagesAsSecurity, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MarkMessagesAsSecurity> = z
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
export namespace MarkMessagesAsRequest$ {
    export const inboundSchema: z.ZodType<MarkMessagesAsRequest, z.ZodTypeDef, unknown> = z
        .object({
            subscriberId: z.string(),
            MessageMarkAsRequestDto: components.MessageMarkAsRequestDto$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                MessageMarkAsRequestDto: "messageMarkAsRequestDto",
            });
        });

    export type Outbound = {
        subscriberId: string;
        MessageMarkAsRequestDto: components.MessageMarkAsRequestDto$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MarkMessagesAsRequest> = z
        .object({
            subscriberId: z.string(),
            messageMarkAsRequestDto: components.MessageMarkAsRequestDto$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                messageMarkAsRequestDto: "MessageMarkAsRequestDto",
            });
        });
}
