/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CreateTopicRequestDto = {
    /**
     * User defined custom key and provided by the user that will be an unique identifier for the Topic created.
     */
    key: string;
    /**
     * User defined custom name and provided by the user that will name the Topic created.
     */
    name: string;
};

/** @internal */
export namespace CreateTopicRequestDto$ {
    export const inboundSchema: z.ZodType<CreateTopicRequestDto, z.ZodTypeDef, unknown> = z.object({
        key: z.string(),
        name: z.string(),
    });

    export type Outbound = {
        key: string;
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateTopicRequestDto> =
        z.object({
            key: z.string(),
            name: z.string(),
        });
}
