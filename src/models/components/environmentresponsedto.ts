/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type EnvironmentResponseDto = {
  id?: string | undefined;
  organizationId: string;
  parentId: string;
  apiKeys?: Array<string> | undefined;
  identifier: string;
  name: string;
};

/** @internal */
export const EnvironmentResponseDto$inboundSchema: z.ZodType<
  EnvironmentResponseDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  _id: z.string().optional(),
  _organizationId: z.string(),
  _parentId: z.string(),
  apiKeys: z.array(z.string()).optional(),
  identifier: z.string(),
  name: z.string(),
}).transform((v) => {
  return remap$(v, {
    "_id": "id",
    "_organizationId": "organizationId",
    "_parentId": "parentId",
  });
});

/** @internal */
export type EnvironmentResponseDto$Outbound = {
  _id?: string | undefined;
  _organizationId: string;
  _parentId: string;
  apiKeys?: Array<string> | undefined;
  identifier: string;
  name: string;
};

/** @internal */
export const EnvironmentResponseDto$outboundSchema: z.ZodType<
  EnvironmentResponseDto$Outbound,
  z.ZodTypeDef,
  EnvironmentResponseDto
> = z.object({
  id: z.string().optional(),
  organizationId: z.string(),
  parentId: z.string(),
  apiKeys: z.array(z.string()).optional(),
  identifier: z.string(),
  name: z.string(),
}).transform((v) => {
  return remap$(v, {
    id: "_id",
    organizationId: "_organizationId",
    parentId: "_parentId",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EnvironmentResponseDto$ {
  /** @deprecated use `EnvironmentResponseDto$inboundSchema` instead. */
  export const inboundSchema = EnvironmentResponseDto$inboundSchema;
  /** @deprecated use `EnvironmentResponseDto$outboundSchema` instead. */
  export const outboundSchema = EnvironmentResponseDto$outboundSchema;
  /** @deprecated use `EnvironmentResponseDto$Outbound` instead. */
  export type Outbound = EnvironmentResponseDto$Outbound;
}
