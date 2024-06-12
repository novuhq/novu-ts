/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type UpdateWorkflowByIdSecurity = {
    bearer?: string | undefined;
    apiKey?: string | undefined;
};

export type UpdateWorkflowByIdRequest = {
    workflowId: string;
    updateWorkflowRequestDto: components.UpdateWorkflowRequestDto;
};

/** @internal */
export namespace UpdateWorkflowByIdSecurity$ {
    export const inboundSchema: z.ZodType<UpdateWorkflowByIdSecurity, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateWorkflowByIdSecurity> = z
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
export namespace UpdateWorkflowByIdRequest$ {
    export const inboundSchema: z.ZodType<UpdateWorkflowByIdRequest, z.ZodTypeDef, unknown> = z
        .object({
            workflowId: z.string(),
            UpdateWorkflowRequestDto: components.UpdateWorkflowRequestDto$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                UpdateWorkflowRequestDto: "updateWorkflowRequestDto",
            });
        });

    export type Outbound = {
        workflowId: string;
        UpdateWorkflowRequestDto: components.UpdateWorkflowRequestDto$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateWorkflowByIdRequest> = z
        .object({
            workflowId: z.string(),
            updateWorkflowRequestDto: components.UpdateWorkflowRequestDto$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                updateWorkflowRequestDto: "UpdateWorkflowRequestDto",
            });
        });
}
