/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type NotificationsControllerGetActivityStatsResponse = {
  headers: { [k: string]: Array<string> };
  result: components.ActivityStatsResponseDto;
};

/** @internal */
export const NotificationsControllerGetActivityStatsResponse$inboundSchema:
  z.ZodType<
    NotificationsControllerGetActivityStatsResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    Headers: z.record(z.array(z.string())),
    Result: components.ActivityStatsResponseDto$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "Headers": "headers",
      "Result": "result",
    });
  });

/** @internal */
export type NotificationsControllerGetActivityStatsResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.ActivityStatsResponseDto$Outbound;
};

/** @internal */
export const NotificationsControllerGetActivityStatsResponse$outboundSchema:
  z.ZodType<
    NotificationsControllerGetActivityStatsResponse$Outbound,
    z.ZodTypeDef,
    NotificationsControllerGetActivityStatsResponse
  > = z.object({
    headers: z.record(z.array(z.string())),
    result: components.ActivityStatsResponseDto$outboundSchema,
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
export namespace NotificationsControllerGetActivityStatsResponse$ {
  /** @deprecated use `NotificationsControllerGetActivityStatsResponse$inboundSchema` instead. */
  export const inboundSchema =
    NotificationsControllerGetActivityStatsResponse$inboundSchema;
  /** @deprecated use `NotificationsControllerGetActivityStatsResponse$outboundSchema` instead. */
  export const outboundSchema =
    NotificationsControllerGetActivityStatsResponse$outboundSchema;
  /** @deprecated use `NotificationsControllerGetActivityStatsResponse$Outbound` instead. */
  export type Outbound =
    NotificationsControllerGetActivityStatsResponse$Outbound;
}

export function notificationsControllerGetActivityStatsResponseToJSON(
  notificationsControllerGetActivityStatsResponse:
    NotificationsControllerGetActivityStatsResponse,
): string {
  return JSON.stringify(
    NotificationsControllerGetActivityStatsResponse$outboundSchema.parse(
      notificationsControllerGetActivityStatsResponse,
    ),
  );
}

export function notificationsControllerGetActivityStatsResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  NotificationsControllerGetActivityStatsResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      NotificationsControllerGetActivityStatsResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'NotificationsControllerGetActivityStatsResponse' from JSON`,
  );
}
