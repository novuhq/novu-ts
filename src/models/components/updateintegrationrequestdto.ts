/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  CredentialsDto,
  CredentialsDto$inboundSchema,
  CredentialsDto$Outbound,
  CredentialsDto$outboundSchema,
} from "./credentialsdto.js";
import {
  StepFilter,
  StepFilter$inboundSchema,
  StepFilter$Outbound,
  StepFilter$outboundSchema,
} from "./stepfilter.js";

export type UpdateIntegrationRequestDto = {
  environmentId?: string | undefined;
  /**
   * If the integration is active the validation on the credentials field will run
   */
  active?: boolean | undefined;
  check?: boolean | undefined;
  conditions?: Array<StepFilter> | undefined;
  credentials?: CredentialsDto | undefined;
  identifier?: string | undefined;
  name?: string | undefined;
  /**
   * If true, the Novu branding will be removed from the Inbox component
   */
  removeNovuBranding?: boolean | undefined;
};

/** @internal */
export const UpdateIntegrationRequestDto$inboundSchema: z.ZodType<
  UpdateIntegrationRequestDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  _environmentId: z.string().optional(),
  active: z.boolean().optional(),
  check: z.boolean().optional(),
  conditions: z.array(StepFilter$inboundSchema).optional(),
  credentials: CredentialsDto$inboundSchema.optional(),
  identifier: z.string().optional(),
  name: z.string().optional(),
  removeNovuBranding: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "_environmentId": "environmentId",
  });
});

/** @internal */
export type UpdateIntegrationRequestDto$Outbound = {
  _environmentId?: string | undefined;
  active?: boolean | undefined;
  check?: boolean | undefined;
  conditions?: Array<StepFilter$Outbound> | undefined;
  credentials?: CredentialsDto$Outbound | undefined;
  identifier?: string | undefined;
  name?: string | undefined;
  removeNovuBranding?: boolean | undefined;
};

/** @internal */
export const UpdateIntegrationRequestDto$outboundSchema: z.ZodType<
  UpdateIntegrationRequestDto$Outbound,
  z.ZodTypeDef,
  UpdateIntegrationRequestDto
> = z.object({
  environmentId: z.string().optional(),
  active: z.boolean().optional(),
  check: z.boolean().optional(),
  conditions: z.array(StepFilter$outboundSchema).optional(),
  credentials: CredentialsDto$outboundSchema.optional(),
  identifier: z.string().optional(),
  name: z.string().optional(),
  removeNovuBranding: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    environmentId: "_environmentId",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateIntegrationRequestDto$ {
  /** @deprecated use `UpdateIntegrationRequestDto$inboundSchema` instead. */
  export const inboundSchema = UpdateIntegrationRequestDto$inboundSchema;
  /** @deprecated use `UpdateIntegrationRequestDto$outboundSchema` instead. */
  export const outboundSchema = UpdateIntegrationRequestDto$outboundSchema;
  /** @deprecated use `UpdateIntegrationRequestDto$Outbound` instead. */
  export type Outbound = UpdateIntegrationRequestDto$Outbound;
}
