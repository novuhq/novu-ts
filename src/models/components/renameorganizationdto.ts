/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type RenameOrganizationDto = {
  name: string;
};

/** @internal */
export const RenameOrganizationDto$inboundSchema: z.ZodType<
  RenameOrganizationDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
});

/** @internal */
export type RenameOrganizationDto$Outbound = {
  name: string;
};

/** @internal */
export const RenameOrganizationDto$outboundSchema: z.ZodType<
  RenameOrganizationDto$Outbound,
  z.ZodTypeDef,
  RenameOrganizationDto
> = z.object({
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RenameOrganizationDto$ {
  /** @deprecated use `RenameOrganizationDto$inboundSchema` instead. */
  export const inboundSchema = RenameOrganizationDto$inboundSchema;
  /** @deprecated use `RenameOrganizationDto$outboundSchema` instead. */
  export const outboundSchema = RenameOrganizationDto$outboundSchema;
  /** @deprecated use `RenameOrganizationDto$Outbound` instead. */
  export type Outbound = RenameOrganizationDto$Outbound;
}
