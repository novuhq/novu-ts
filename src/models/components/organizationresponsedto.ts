/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  OrganizationBrandingResponseDto,
  OrganizationBrandingResponseDto$inboundSchema,
  OrganizationBrandingResponseDto$Outbound,
  OrganizationBrandingResponseDto$outboundSchema,
} from "./organizationbrandingresponsedto.js";

export type OrganizationResponseDto = {
  branding: OrganizationBrandingResponseDto;
  logo?: string | undefined;
  name: string;
  partnerConfigurations?: Array<string> | undefined;
};

/** @internal */
export const OrganizationResponseDto$inboundSchema: z.ZodType<
  OrganizationResponseDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  branding: OrganizationBrandingResponseDto$inboundSchema,
  logo: z.string().optional(),
  name: z.string(),
  partnerConfigurations: z.array(z.string()).optional(),
});

/** @internal */
export type OrganizationResponseDto$Outbound = {
  branding: OrganizationBrandingResponseDto$Outbound;
  logo?: string | undefined;
  name: string;
  partnerConfigurations?: Array<string> | undefined;
};

/** @internal */
export const OrganizationResponseDto$outboundSchema: z.ZodType<
  OrganizationResponseDto$Outbound,
  z.ZodTypeDef,
  OrganizationResponseDto
> = z.object({
  branding: OrganizationBrandingResponseDto$outboundSchema,
  logo: z.string().optional(),
  name: z.string(),
  partnerConfigurations: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrganizationResponseDto$ {
  /** @deprecated use `OrganizationResponseDto$inboundSchema` instead. */
  export const inboundSchema = OrganizationResponseDto$inboundSchema;
  /** @deprecated use `OrganizationResponseDto$outboundSchema` instead. */
  export const outboundSchema = OrganizationResponseDto$outboundSchema;
  /** @deprecated use `OrganizationResponseDto$Outbound` instead. */
  export type Outbound = OrganizationResponseDto$Outbound;
}
