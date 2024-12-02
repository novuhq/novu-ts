/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type NotificationGroupsControllerCreateNotificationGroupResponse = {
  headers: { [k: string]: Array<string> };
  result: components.NotificationGroupResponseDto;
};

/** @internal */
export const NotificationGroupsControllerCreateNotificationGroupResponse$inboundSchema:
  z.ZodType<
    NotificationGroupsControllerCreateNotificationGroupResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    Headers: z.record(z.array(z.string())),
    Result: components.NotificationGroupResponseDto$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "Headers": "headers",
      "Result": "result",
    });
  });

/** @internal */
export type NotificationGroupsControllerCreateNotificationGroupResponse$Outbound =
  {
    Headers: { [k: string]: Array<string> };
    Result: components.NotificationGroupResponseDto$Outbound;
  };

/** @internal */
export const NotificationGroupsControllerCreateNotificationGroupResponse$outboundSchema:
  z.ZodType<
    NotificationGroupsControllerCreateNotificationGroupResponse$Outbound,
    z.ZodTypeDef,
    NotificationGroupsControllerCreateNotificationGroupResponse
  > = z.object({
    headers: z.record(z.array(z.string())),
    result: components.NotificationGroupResponseDto$outboundSchema,
  }).transform((v) => {
    return remap$(v, {
      headers: "Headers",
      result: "Result",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotificationGroupsControllerCreateNotificationGroupResponse$ {
  /** @deprecated use `NotificationGroupsControllerCreateNotificationGroupResponse$inboundSchema` instead. */
  export const inboundSchema =
    NotificationGroupsControllerCreateNotificationGroupResponse$inboundSchema;
  /** @deprecated use `NotificationGroupsControllerCreateNotificationGroupResponse$outboundSchema` instead. */
  export const outboundSchema =
    NotificationGroupsControllerCreateNotificationGroupResponse$outboundSchema;
  /** @deprecated use `NotificationGroupsControllerCreateNotificationGroupResponse$Outbound` instead. */
  export type Outbound =
    NotificationGroupsControllerCreateNotificationGroupResponse$Outbound;
}

export function notificationGroupsControllerCreateNotificationGroupResponseToJSON(
  notificationGroupsControllerCreateNotificationGroupResponse:
    NotificationGroupsControllerCreateNotificationGroupResponse,
): string {
  return JSON.stringify(
    NotificationGroupsControllerCreateNotificationGroupResponse$outboundSchema
      .parse(notificationGroupsControllerCreateNotificationGroupResponse),
  );
}

export function notificationGroupsControllerCreateNotificationGroupResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  NotificationGroupsControllerCreateNotificationGroupResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      NotificationGroupsControllerCreateNotificationGroupResponse$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'NotificationGroupsControllerCreateNotificationGroupResponse' from JSON`,
  );
}
