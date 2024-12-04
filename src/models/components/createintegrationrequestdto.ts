/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
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

/**
 * The channel type for the integration
 */
export const CreateIntegrationRequestDtoChannel = {
  InApp: "in_app",
  Email: "email",
  Sms: "sms",
  Chat: "chat",
  Push: "push",
} as const;
/**
 * The channel type for the integration
 */
export type CreateIntegrationRequestDtoChannel = ClosedEnum<
  typeof CreateIntegrationRequestDtoChannel
>;

export type CreateIntegrationRequestDto = {
  /**
   * The name of the integration
   */
  name?: string | undefined;
  /**
   * The unique identifier for the integration
   */
  identifier?: string | undefined;
  /**
   * The ID of the associated environment
   */
  environmentId?: string | undefined;
  /**
   * The provider ID for the integration
   */
  providerId: string;
  /**
   * The channel type for the integration
   */
  channel: CreateIntegrationRequestDtoChannel;
  /**
   * The credentials for the integration
   */
  credentials?: CredentialsDto | undefined;
  /**
   * If the integration is active, the validation on the credentials field will run
   */
  active?: boolean | undefined;
  /**
   * Flag to check the integration status
   */
  check?: boolean | undefined;
  /**
   * Conditions for the integration
   */
  conditions?: Array<StepFilter> | undefined;
};

/** @internal */
export const CreateIntegrationRequestDtoChannel$inboundSchema: z.ZodNativeEnum<
  typeof CreateIntegrationRequestDtoChannel
> = z.nativeEnum(CreateIntegrationRequestDtoChannel);

/** @internal */
export const CreateIntegrationRequestDtoChannel$outboundSchema: z.ZodNativeEnum<
  typeof CreateIntegrationRequestDtoChannel
> = CreateIntegrationRequestDtoChannel$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateIntegrationRequestDtoChannel$ {
  /** @deprecated use `CreateIntegrationRequestDtoChannel$inboundSchema` instead. */
  export const inboundSchema = CreateIntegrationRequestDtoChannel$inboundSchema;
  /** @deprecated use `CreateIntegrationRequestDtoChannel$outboundSchema` instead. */
  export const outboundSchema =
    CreateIntegrationRequestDtoChannel$outboundSchema;
}

/** @internal */
export const CreateIntegrationRequestDto$inboundSchema: z.ZodType<
  CreateIntegrationRequestDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  identifier: z.string().optional(),
  _environmentId: z.string().optional(),
  providerId: z.string(),
  channel: CreateIntegrationRequestDtoChannel$inboundSchema,
  credentials: CredentialsDto$inboundSchema.optional(),
  active: z.boolean().optional(),
  check: z.boolean().optional(),
  conditions: z.array(StepFilter$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "_environmentId": "environmentId",
  });
});

/** @internal */
export type CreateIntegrationRequestDto$Outbound = {
  name?: string | undefined;
  identifier?: string | undefined;
  _environmentId?: string | undefined;
  providerId: string;
  channel: string;
  credentials?: CredentialsDto$Outbound | undefined;
  active?: boolean | undefined;
  check?: boolean | undefined;
  conditions?: Array<StepFilter$Outbound> | undefined;
};

/** @internal */
export const CreateIntegrationRequestDto$outboundSchema: z.ZodType<
  CreateIntegrationRequestDto$Outbound,
  z.ZodTypeDef,
  CreateIntegrationRequestDto
> = z.object({
  name: z.string().optional(),
  identifier: z.string().optional(),
  environmentId: z.string().optional(),
  providerId: z.string(),
  channel: CreateIntegrationRequestDtoChannel$outboundSchema,
  credentials: CredentialsDto$outboundSchema.optional(),
  active: z.boolean().optional(),
  check: z.boolean().optional(),
  conditions: z.array(StepFilter$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    environmentId: "_environmentId",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateIntegrationRequestDto$ {
  /** @deprecated use `CreateIntegrationRequestDto$inboundSchema` instead. */
  export const inboundSchema = CreateIntegrationRequestDto$inboundSchema;
  /** @deprecated use `CreateIntegrationRequestDto$outboundSchema` instead. */
  export const outboundSchema = CreateIntegrationRequestDto$outboundSchema;
  /** @deprecated use `CreateIntegrationRequestDto$Outbound` instead. */
  export type Outbound = CreateIntegrationRequestDto$Outbound;
}

export function createIntegrationRequestDtoToJSON(
  createIntegrationRequestDto: CreateIntegrationRequestDto,
): string {
  return JSON.stringify(
    CreateIntegrationRequestDto$outboundSchema.parse(
      createIntegrationRequestDto,
    ),
  );
}

export function createIntegrationRequestDtoFromJSON(
  jsonString: string,
): SafeParseResult<CreateIntegrationRequestDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateIntegrationRequestDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateIntegrationRequestDto' from JSON`,
  );
}
