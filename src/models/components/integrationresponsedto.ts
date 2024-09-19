/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
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

export const IntegrationResponseDtoChannel = {
  InApp: "in_app",
  Email: "email",
  Sms: "sms",
  Chat: "chat",
  Push: "push",
} as const;
export type IntegrationResponseDtoChannel = ClosedEnum<
  typeof IntegrationResponseDtoChannel
>;

export type IntegrationResponseDto = {
  environmentId: string;
  id?: string | undefined;
  organizationId: string;
  active: boolean;
  channel: IntegrationResponseDtoChannel;
  conditions?: Array<StepFilter> | undefined;
  credentials: CredentialsDto;
  deleted: boolean;
  deletedAt: string;
  deletedBy: string;
  identifier: string;
  name: string;
  primary: boolean;
  providerId: string;
};

/** @internal */
export const IntegrationResponseDtoChannel$inboundSchema: z.ZodNativeEnum<
  typeof IntegrationResponseDtoChannel
> = z.nativeEnum(IntegrationResponseDtoChannel);

/** @internal */
export const IntegrationResponseDtoChannel$outboundSchema: z.ZodNativeEnum<
  typeof IntegrationResponseDtoChannel
> = IntegrationResponseDtoChannel$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IntegrationResponseDtoChannel$ {
  /** @deprecated use `IntegrationResponseDtoChannel$inboundSchema` instead. */
  export const inboundSchema = IntegrationResponseDtoChannel$inboundSchema;
  /** @deprecated use `IntegrationResponseDtoChannel$outboundSchema` instead. */
  export const outboundSchema = IntegrationResponseDtoChannel$outboundSchema;
}

/** @internal */
export const IntegrationResponseDto$inboundSchema: z.ZodType<
  IntegrationResponseDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  _environmentId: z.string(),
  _id: z.string().optional(),
  _organizationId: z.string(),
  active: z.boolean(),
  channel: IntegrationResponseDtoChannel$inboundSchema,
  conditions: z.array(StepFilter$inboundSchema).optional(),
  credentials: CredentialsDto$inboundSchema,
  deleted: z.boolean(),
  deletedAt: z.string(),
  deletedBy: z.string(),
  identifier: z.string(),
  name: z.string(),
  primary: z.boolean(),
  providerId: z.string(),
}).transform((v) => {
  return remap$(v, {
    "_environmentId": "environmentId",
    "_id": "id",
    "_organizationId": "organizationId",
  });
});

/** @internal */
export type IntegrationResponseDto$Outbound = {
  _environmentId: string;
  _id?: string | undefined;
  _organizationId: string;
  active: boolean;
  channel: string;
  conditions?: Array<StepFilter$Outbound> | undefined;
  credentials: CredentialsDto$Outbound;
  deleted: boolean;
  deletedAt: string;
  deletedBy: string;
  identifier: string;
  name: string;
  primary: boolean;
  providerId: string;
};

/** @internal */
export const IntegrationResponseDto$outboundSchema: z.ZodType<
  IntegrationResponseDto$Outbound,
  z.ZodTypeDef,
  IntegrationResponseDto
> = z.object({
  environmentId: z.string(),
  id: z.string().optional(),
  organizationId: z.string(),
  active: z.boolean(),
  channel: IntegrationResponseDtoChannel$outboundSchema,
  conditions: z.array(StepFilter$outboundSchema).optional(),
  credentials: CredentialsDto$outboundSchema,
  deleted: z.boolean(),
  deletedAt: z.string(),
  deletedBy: z.string(),
  identifier: z.string(),
  name: z.string(),
  primary: z.boolean(),
  providerId: z.string(),
}).transform((v) => {
  return remap$(v, {
    environmentId: "_environmentId",
    id: "_id",
    organizationId: "_organizationId",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IntegrationResponseDto$ {
  /** @deprecated use `IntegrationResponseDto$inboundSchema` instead. */
  export const inboundSchema = IntegrationResponseDto$inboundSchema;
  /** @deprecated use `IntegrationResponseDto$outboundSchema` instead. */
  export const outboundSchema = IntegrationResponseDto$outboundSchema;
  /** @deprecated use `IntegrationResponseDto$Outbound` instead. */
  export type Outbound = IntegrationResponseDto$Outbound;
}
