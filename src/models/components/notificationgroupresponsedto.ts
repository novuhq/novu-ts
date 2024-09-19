/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type NotificationGroupResponseDto = {
  environmentId: string;
  id?: string | undefined;
  organizationId: string;
  parentId?: string | undefined;
  name: string;
};

/** @internal */
export const NotificationGroupResponseDto$inboundSchema: z.ZodType<
  NotificationGroupResponseDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  _environmentId: z.string(),
  _id: z.string().optional(),
  _organizationId: z.string(),
  _parentId: z.string().optional(),
  name: z.string(),
}).transform((v) => {
  return remap$(v, {
    "_environmentId": "environmentId",
    "_id": "id",
    "_organizationId": "organizationId",
    "_parentId": "parentId",
  });
});

/** @internal */
export type NotificationGroupResponseDto$Outbound = {
  _environmentId: string;
  _id?: string | undefined;
  _organizationId: string;
  _parentId?: string | undefined;
  name: string;
};

/** @internal */
export const NotificationGroupResponseDto$outboundSchema: z.ZodType<
  NotificationGroupResponseDto$Outbound,
  z.ZodTypeDef,
  NotificationGroupResponseDto
> = z.object({
  environmentId: z.string(),
  id: z.string().optional(),
  organizationId: z.string(),
  parentId: z.string().optional(),
  name: z.string(),
}).transform((v) => {
  return remap$(v, {
    environmentId: "_environmentId",
    id: "_id",
    organizationId: "_organizationId",
    parentId: "_parentId",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotificationGroupResponseDto$ {
  /** @deprecated use `NotificationGroupResponseDto$inboundSchema` instead. */
  export const inboundSchema = NotificationGroupResponseDto$inboundSchema;
  /** @deprecated use `NotificationGroupResponseDto$outboundSchema` instead. */
  export const outboundSchema = NotificationGroupResponseDto$outboundSchema;
  /** @deprecated use `NotificationGroupResponseDto$Outbound` instead. */
  export type Outbound = NotificationGroupResponseDto$Outbound;
}
