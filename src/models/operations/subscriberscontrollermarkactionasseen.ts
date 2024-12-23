/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SubscribersControllerMarkActionAsSeenRequest = {
  /**
   * A header for idempotency purposes
   */
  idempotencyKey?: string | undefined;
  messageId: string;
  type?: any | undefined;
  subscriberId: string;
  markMessageActionAsSeenDto: components.MarkMessageActionAsSeenDto;
};

export type SubscribersControllerMarkActionAsSeenResponse = {
  headers: { [k: string]: Array<string> };
  result: components.MessageResponseDto;
};

/** @internal */
export const SubscribersControllerMarkActionAsSeenRequest$inboundSchema:
  z.ZodType<
    SubscribersControllerMarkActionAsSeenRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    "Idempotency-Key": z.string().optional(),
    messageId: z.string(),
    type: z.any().optional(),
    subscriberId: z.string(),
    MarkMessageActionAsSeenDto:
      components.MarkMessageActionAsSeenDto$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "Idempotency-Key": "idempotencyKey",
      "MarkMessageActionAsSeenDto": "markMessageActionAsSeenDto",
    });
  });

/** @internal */
export type SubscribersControllerMarkActionAsSeenRequest$Outbound = {
  "Idempotency-Key"?: string | undefined;
  messageId: string;
  type?: any | undefined;
  subscriberId: string;
  MarkMessageActionAsSeenDto: components.MarkMessageActionAsSeenDto$Outbound;
};

/** @internal */
export const SubscribersControllerMarkActionAsSeenRequest$outboundSchema:
  z.ZodType<
    SubscribersControllerMarkActionAsSeenRequest$Outbound,
    z.ZodTypeDef,
    SubscribersControllerMarkActionAsSeenRequest
  > = z.object({
    idempotencyKey: z.string().optional(),
    messageId: z.string(),
    type: z.any().optional(),
    subscriberId: z.string(),
    markMessageActionAsSeenDto:
      components.MarkMessageActionAsSeenDto$outboundSchema,
  }).transform((v) => {
    return remap$(v, {
      idempotencyKey: "Idempotency-Key",
      markMessageActionAsSeenDto: "MarkMessageActionAsSeenDto",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscribersControllerMarkActionAsSeenRequest$ {
  /** @deprecated use `SubscribersControllerMarkActionAsSeenRequest$inboundSchema` instead. */
  export const inboundSchema =
    SubscribersControllerMarkActionAsSeenRequest$inboundSchema;
  /** @deprecated use `SubscribersControllerMarkActionAsSeenRequest$outboundSchema` instead. */
  export const outboundSchema =
    SubscribersControllerMarkActionAsSeenRequest$outboundSchema;
  /** @deprecated use `SubscribersControllerMarkActionAsSeenRequest$Outbound` instead. */
  export type Outbound = SubscribersControllerMarkActionAsSeenRequest$Outbound;
}

export function subscribersControllerMarkActionAsSeenRequestToJSON(
  subscribersControllerMarkActionAsSeenRequest:
    SubscribersControllerMarkActionAsSeenRequest,
): string {
  return JSON.stringify(
    SubscribersControllerMarkActionAsSeenRequest$outboundSchema.parse(
      subscribersControllerMarkActionAsSeenRequest,
    ),
  );
}

export function subscribersControllerMarkActionAsSeenRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  SubscribersControllerMarkActionAsSeenRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      SubscribersControllerMarkActionAsSeenRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'SubscribersControllerMarkActionAsSeenRequest' from JSON`,
  );
}

/** @internal */
export const SubscribersControllerMarkActionAsSeenResponse$inboundSchema:
  z.ZodType<
    SubscribersControllerMarkActionAsSeenResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    Headers: z.record(z.array(z.string())),
    Result: components.MessageResponseDto$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "Headers": "headers",
      "Result": "result",
    });
  });

/** @internal */
export type SubscribersControllerMarkActionAsSeenResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.MessageResponseDto$Outbound;
};

/** @internal */
export const SubscribersControllerMarkActionAsSeenResponse$outboundSchema:
  z.ZodType<
    SubscribersControllerMarkActionAsSeenResponse$Outbound,
    z.ZodTypeDef,
    SubscribersControllerMarkActionAsSeenResponse
  > = z.object({
    headers: z.record(z.array(z.string())),
    result: components.MessageResponseDto$outboundSchema,
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
export namespace SubscribersControllerMarkActionAsSeenResponse$ {
  /** @deprecated use `SubscribersControllerMarkActionAsSeenResponse$inboundSchema` instead. */
  export const inboundSchema =
    SubscribersControllerMarkActionAsSeenResponse$inboundSchema;
  /** @deprecated use `SubscribersControllerMarkActionAsSeenResponse$outboundSchema` instead. */
  export const outboundSchema =
    SubscribersControllerMarkActionAsSeenResponse$outboundSchema;
  /** @deprecated use `SubscribersControllerMarkActionAsSeenResponse$Outbound` instead. */
  export type Outbound = SubscribersControllerMarkActionAsSeenResponse$Outbound;
}

export function subscribersControllerMarkActionAsSeenResponseToJSON(
  subscribersControllerMarkActionAsSeenResponse:
    SubscribersControllerMarkActionAsSeenResponse,
): string {
  return JSON.stringify(
    SubscribersControllerMarkActionAsSeenResponse$outboundSchema.parse(
      subscribersControllerMarkActionAsSeenResponse,
    ),
  );
}

export function subscribersControllerMarkActionAsSeenResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  SubscribersControllerMarkActionAsSeenResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      SubscribersControllerMarkActionAsSeenResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'SubscribersControllerMarkActionAsSeenResponse' from JSON`,
  );
}
