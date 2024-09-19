/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type NotificationGroup = {
  environmentId: string;
  id?: string | undefined;
  organizationId: string;
  parentId?: string | undefined;
  name: string;
};

/** @internal */
export const NotificationGroup$inboundSchema: z.ZodType<
  NotificationGroup,
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
export type NotificationGroup$Outbound = {
  _environmentId: string;
  _id?: string | undefined;
  _organizationId: string;
  _parentId?: string | undefined;
  name: string;
};

/** @internal */
export const NotificationGroup$outboundSchema: z.ZodType<
  NotificationGroup$Outbound,
  z.ZodTypeDef,
  NotificationGroup
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
export namespace NotificationGroup$ {
  /** @deprecated use `NotificationGroup$inboundSchema` instead. */
  export const inboundSchema = NotificationGroup$inboundSchema;
  /** @deprecated use `NotificationGroup$outboundSchema` instead. */
  export const outboundSchema = NotificationGroup$outboundSchema;
  /** @deprecated use `NotificationGroup$Outbound` instead. */
  export type Outbound = NotificationGroup$Outbound;
}
