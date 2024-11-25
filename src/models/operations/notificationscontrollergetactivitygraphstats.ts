/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type NotificationsControllerGetActivityGraphStatsRequest = {
  days?: number | undefined;
};

export type NotificationsControllerGetActivityGraphStatsResponse = {
  headers: { [k: string]: Array<string> };
  result: Array<components.ActivityGraphStatesResponse>;
};

/** @internal */
export const NotificationsControllerGetActivityGraphStatsRequest$inboundSchema:
  z.ZodType<
    NotificationsControllerGetActivityGraphStatsRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    days: z.number().optional(),
  });

/** @internal */
export type NotificationsControllerGetActivityGraphStatsRequest$Outbound = {
  days?: number | undefined;
};

/** @internal */
export const NotificationsControllerGetActivityGraphStatsRequest$outboundSchema:
  z.ZodType<
    NotificationsControllerGetActivityGraphStatsRequest$Outbound,
    z.ZodTypeDef,
    NotificationsControllerGetActivityGraphStatsRequest
  > = z.object({
    days: z.number().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotificationsControllerGetActivityGraphStatsRequest$ {
  /** @deprecated use `NotificationsControllerGetActivityGraphStatsRequest$inboundSchema` instead. */
  export const inboundSchema =
    NotificationsControllerGetActivityGraphStatsRequest$inboundSchema;
  /** @deprecated use `NotificationsControllerGetActivityGraphStatsRequest$outboundSchema` instead. */
  export const outboundSchema =
    NotificationsControllerGetActivityGraphStatsRequest$outboundSchema;
  /** @deprecated use `NotificationsControllerGetActivityGraphStatsRequest$Outbound` instead. */
  export type Outbound =
    NotificationsControllerGetActivityGraphStatsRequest$Outbound;
}

export function notificationsControllerGetActivityGraphStatsRequestToJSON(
  notificationsControllerGetActivityGraphStatsRequest:
    NotificationsControllerGetActivityGraphStatsRequest,
): string {
  return JSON.stringify(
    NotificationsControllerGetActivityGraphStatsRequest$outboundSchema.parse(
      notificationsControllerGetActivityGraphStatsRequest,
    ),
  );
}

export function notificationsControllerGetActivityGraphStatsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  NotificationsControllerGetActivityGraphStatsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      NotificationsControllerGetActivityGraphStatsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'NotificationsControllerGetActivityGraphStatsRequest' from JSON`,
  );
}

/** @internal */
export const NotificationsControllerGetActivityGraphStatsResponse$inboundSchema:
  z.ZodType<
    NotificationsControllerGetActivityGraphStatsResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    Headers: z.record(z.array(z.string())),
    Result: z.array(components.ActivityGraphStatesResponse$inboundSchema),
  }).transform((v) => {
    return remap$(v, {
      "Headers": "headers",
      "Result": "result",
    });
  });

/** @internal */
export type NotificationsControllerGetActivityGraphStatsResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: Array<components.ActivityGraphStatesResponse$Outbound>;
};

/** @internal */
export const NotificationsControllerGetActivityGraphStatsResponse$outboundSchema:
  z.ZodType<
    NotificationsControllerGetActivityGraphStatsResponse$Outbound,
    z.ZodTypeDef,
    NotificationsControllerGetActivityGraphStatsResponse
  > = z.object({
    headers: z.record(z.array(z.string())),
    result: z.array(components.ActivityGraphStatesResponse$outboundSchema),
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
export namespace NotificationsControllerGetActivityGraphStatsResponse$ {
  /** @deprecated use `NotificationsControllerGetActivityGraphStatsResponse$inboundSchema` instead. */
  export const inboundSchema =
    NotificationsControllerGetActivityGraphStatsResponse$inboundSchema;
  /** @deprecated use `NotificationsControllerGetActivityGraphStatsResponse$outboundSchema` instead. */
  export const outboundSchema =
    NotificationsControllerGetActivityGraphStatsResponse$outboundSchema;
  /** @deprecated use `NotificationsControllerGetActivityGraphStatsResponse$Outbound` instead. */
  export type Outbound =
    NotificationsControllerGetActivityGraphStatsResponse$Outbound;
}

export function notificationsControllerGetActivityGraphStatsResponseToJSON(
  notificationsControllerGetActivityGraphStatsResponse:
    NotificationsControllerGetActivityGraphStatsResponse,
): string {
  return JSON.stringify(
    NotificationsControllerGetActivityGraphStatsResponse$outboundSchema.parse(
      notificationsControllerGetActivityGraphStatsResponse,
    ),
  );
}

export function notificationsControllerGetActivityGraphStatsResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  NotificationsControllerGetActivityGraphStatsResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      NotificationsControllerGetActivityGraphStatsResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'NotificationsControllerGetActivityGraphStatsResponse' from JSON`,
  );
}
