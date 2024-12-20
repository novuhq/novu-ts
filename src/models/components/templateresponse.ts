/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  NotificationTriggerResponse,
  NotificationTriggerResponse$inboundSchema,
  NotificationTriggerResponse$Outbound,
  NotificationTriggerResponse$outboundSchema,
} from "./notificationtriggerresponse.js";

export type TemplateResponse = {
  /**
   * Unique identifier of the workflow
   */
  id: string;
  /**
   * Name of the workflow
   */
  name: string;
  /**
   * Critical templates will always be delivered to the end user and should be hidden from the subscriber preferences screen
   */
  critical: boolean;
  /**
   * Triggers are the events that will trigger the workflow.
   */
  triggers: Array<NotificationTriggerResponse>;
};

/** @internal */
export const TemplateResponse$inboundSchema: z.ZodType<
  TemplateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  _id: z.string(),
  name: z.string(),
  critical: z.boolean(),
  triggers: z.array(NotificationTriggerResponse$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "_id": "id",
  });
});

/** @internal */
export type TemplateResponse$Outbound = {
  _id: string;
  name: string;
  critical: boolean;
  triggers: Array<NotificationTriggerResponse$Outbound>;
};

/** @internal */
export const TemplateResponse$outboundSchema: z.ZodType<
  TemplateResponse$Outbound,
  z.ZodTypeDef,
  TemplateResponse
> = z.object({
  id: z.string(),
  name: z.string(),
  critical: z.boolean(),
  triggers: z.array(NotificationTriggerResponse$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    id: "_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TemplateResponse$ {
  /** @deprecated use `TemplateResponse$inboundSchema` instead. */
  export const inboundSchema = TemplateResponse$inboundSchema;
  /** @deprecated use `TemplateResponse$outboundSchema` instead. */
  export const outboundSchema = TemplateResponse$outboundSchema;
  /** @deprecated use `TemplateResponse$Outbound` instead. */
  export type Outbound = TemplateResponse$Outbound;
}

export function templateResponseToJSON(
  templateResponse: TemplateResponse,
): string {
  return JSON.stringify(
    TemplateResponse$outboundSchema.parse(templateResponse),
  );
}

export function templateResponseFromJSON(
  jsonString: string,
): SafeParseResult<TemplateResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TemplateResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TemplateResponse' from JSON`,
  );
}
