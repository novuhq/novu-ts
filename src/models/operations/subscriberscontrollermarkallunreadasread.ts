/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SubscribersControllerMarkAllUnreadAsReadRequest = {
  subscriberId: string;
  markAllMessageAsRequestDto: components.MarkAllMessageAsRequestDto;
};

export type SubscribersControllerMarkAllUnreadAsReadResponse = {
  headers: { [k: string]: Array<string> };
  result: components.NumberT;
};

/** @internal */
export const SubscribersControllerMarkAllUnreadAsReadRequest$inboundSchema:
  z.ZodType<
    SubscribersControllerMarkAllUnreadAsReadRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    subscriberId: z.string(),
    MarkAllMessageAsRequestDto:
      components.MarkAllMessageAsRequestDto$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "MarkAllMessageAsRequestDto": "markAllMessageAsRequestDto",
    });
  });

/** @internal */
export type SubscribersControllerMarkAllUnreadAsReadRequest$Outbound = {
  subscriberId: string;
  MarkAllMessageAsRequestDto: components.MarkAllMessageAsRequestDto$Outbound;
};

/** @internal */
export const SubscribersControllerMarkAllUnreadAsReadRequest$outboundSchema:
  z.ZodType<
    SubscribersControllerMarkAllUnreadAsReadRequest$Outbound,
    z.ZodTypeDef,
    SubscribersControllerMarkAllUnreadAsReadRequest
  > = z.object({
    subscriberId: z.string(),
    markAllMessageAsRequestDto:
      components.MarkAllMessageAsRequestDto$outboundSchema,
  }).transform((v) => {
    return remap$(v, {
      markAllMessageAsRequestDto: "MarkAllMessageAsRequestDto",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscribersControllerMarkAllUnreadAsReadRequest$ {
  /** @deprecated use `SubscribersControllerMarkAllUnreadAsReadRequest$inboundSchema` instead. */
  export const inboundSchema =
    SubscribersControllerMarkAllUnreadAsReadRequest$inboundSchema;
  /** @deprecated use `SubscribersControllerMarkAllUnreadAsReadRequest$outboundSchema` instead. */
  export const outboundSchema =
    SubscribersControllerMarkAllUnreadAsReadRequest$outboundSchema;
  /** @deprecated use `SubscribersControllerMarkAllUnreadAsReadRequest$Outbound` instead. */
  export type Outbound =
    SubscribersControllerMarkAllUnreadAsReadRequest$Outbound;
}

export function subscribersControllerMarkAllUnreadAsReadRequestToJSON(
  subscribersControllerMarkAllUnreadAsReadRequest:
    SubscribersControllerMarkAllUnreadAsReadRequest,
): string {
  return JSON.stringify(
    SubscribersControllerMarkAllUnreadAsReadRequest$outboundSchema.parse(
      subscribersControllerMarkAllUnreadAsReadRequest,
    ),
  );
}

export function subscribersControllerMarkAllUnreadAsReadRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  SubscribersControllerMarkAllUnreadAsReadRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      SubscribersControllerMarkAllUnreadAsReadRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'SubscribersControllerMarkAllUnreadAsReadRequest' from JSON`,
  );
}

/** @internal */
export const SubscribersControllerMarkAllUnreadAsReadResponse$inboundSchema:
  z.ZodType<
    SubscribersControllerMarkAllUnreadAsReadResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    Headers: z.record(z.array(z.string())),
    Result: components.NumberT$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "Headers": "headers",
      "Result": "result",
    });
  });

/** @internal */
export type SubscribersControllerMarkAllUnreadAsReadResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.NumberT$Outbound;
};

/** @internal */
export const SubscribersControllerMarkAllUnreadAsReadResponse$outboundSchema:
  z.ZodType<
    SubscribersControllerMarkAllUnreadAsReadResponse$Outbound,
    z.ZodTypeDef,
    SubscribersControllerMarkAllUnreadAsReadResponse
  > = z.object({
    headers: z.record(z.array(z.string())),
    result: components.NumberT$outboundSchema,
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
export namespace SubscribersControllerMarkAllUnreadAsReadResponse$ {
  /** @deprecated use `SubscribersControllerMarkAllUnreadAsReadResponse$inboundSchema` instead. */
  export const inboundSchema =
    SubscribersControllerMarkAllUnreadAsReadResponse$inboundSchema;
  /** @deprecated use `SubscribersControllerMarkAllUnreadAsReadResponse$outboundSchema` instead. */
  export const outboundSchema =
    SubscribersControllerMarkAllUnreadAsReadResponse$outboundSchema;
  /** @deprecated use `SubscribersControllerMarkAllUnreadAsReadResponse$Outbound` instead. */
  export type Outbound =
    SubscribersControllerMarkAllUnreadAsReadResponse$Outbound;
}

export function subscribersControllerMarkAllUnreadAsReadResponseToJSON(
  subscribersControllerMarkAllUnreadAsReadResponse:
    SubscribersControllerMarkAllUnreadAsReadResponse,
): string {
  return JSON.stringify(
    SubscribersControllerMarkAllUnreadAsReadResponse$outboundSchema.parse(
      subscribersControllerMarkAllUnreadAsReadResponse,
    ),
  );
}

export function subscribersControllerMarkAllUnreadAsReadResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  SubscribersControllerMarkAllUnreadAsReadResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      SubscribersControllerMarkAllUnreadAsReadResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'SubscribersControllerMarkAllUnreadAsReadResponse' from JSON`,
  );
}
