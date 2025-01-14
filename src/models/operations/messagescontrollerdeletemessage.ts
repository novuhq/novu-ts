/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type MessagesControllerDeleteMessageRequest = {
  messageId: string;
  /**
   * A header for idempotency purposes
   */
  idempotencyKey?: string | undefined;
};

export type MessagesControllerDeleteMessageResponse = {
  headers: { [k: string]: Array<string> };
  result: components.DeleteMessageResponseDto;
};

/** @internal */
export const MessagesControllerDeleteMessageRequest$inboundSchema: z.ZodType<
  MessagesControllerDeleteMessageRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  messageId: z.string(),
  "Idempotency-Key": z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "Idempotency-Key": "idempotencyKey",
  });
});

/** @internal */
export type MessagesControllerDeleteMessageRequest$Outbound = {
  messageId: string;
  "Idempotency-Key"?: string | undefined;
};

/** @internal */
export const MessagesControllerDeleteMessageRequest$outboundSchema: z.ZodType<
  MessagesControllerDeleteMessageRequest$Outbound,
  z.ZodTypeDef,
  MessagesControllerDeleteMessageRequest
> = z.object({
  messageId: z.string(),
  idempotencyKey: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    idempotencyKey: "Idempotency-Key",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessagesControllerDeleteMessageRequest$ {
  /** @deprecated use `MessagesControllerDeleteMessageRequest$inboundSchema` instead. */
  export const inboundSchema =
    MessagesControllerDeleteMessageRequest$inboundSchema;
  /** @deprecated use `MessagesControllerDeleteMessageRequest$outboundSchema` instead. */
  export const outboundSchema =
    MessagesControllerDeleteMessageRequest$outboundSchema;
  /** @deprecated use `MessagesControllerDeleteMessageRequest$Outbound` instead. */
  export type Outbound = MessagesControllerDeleteMessageRequest$Outbound;
}

export function messagesControllerDeleteMessageRequestToJSON(
  messagesControllerDeleteMessageRequest:
    MessagesControllerDeleteMessageRequest,
): string {
  return JSON.stringify(
    MessagesControllerDeleteMessageRequest$outboundSchema.parse(
      messagesControllerDeleteMessageRequest,
    ),
  );
}

export function messagesControllerDeleteMessageRequestFromJSON(
  jsonString: string,
): SafeParseResult<MessagesControllerDeleteMessageRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      MessagesControllerDeleteMessageRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MessagesControllerDeleteMessageRequest' from JSON`,
  );
}

/** @internal */
export const MessagesControllerDeleteMessageResponse$inboundSchema: z.ZodType<
  MessagesControllerDeleteMessageResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: components.DeleteMessageResponseDto$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type MessagesControllerDeleteMessageResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.DeleteMessageResponseDto$Outbound;
};

/** @internal */
export const MessagesControllerDeleteMessageResponse$outboundSchema: z.ZodType<
  MessagesControllerDeleteMessageResponse$Outbound,
  z.ZodTypeDef,
  MessagesControllerDeleteMessageResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: components.DeleteMessageResponseDto$outboundSchema,
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
export namespace MessagesControllerDeleteMessageResponse$ {
  /** @deprecated use `MessagesControllerDeleteMessageResponse$inboundSchema` instead. */
  export const inboundSchema =
    MessagesControllerDeleteMessageResponse$inboundSchema;
  /** @deprecated use `MessagesControllerDeleteMessageResponse$outboundSchema` instead. */
  export const outboundSchema =
    MessagesControllerDeleteMessageResponse$outboundSchema;
  /** @deprecated use `MessagesControllerDeleteMessageResponse$Outbound` instead. */
  export type Outbound = MessagesControllerDeleteMessageResponse$Outbound;
}

export function messagesControllerDeleteMessageResponseToJSON(
  messagesControllerDeleteMessageResponse:
    MessagesControllerDeleteMessageResponse,
): string {
  return JSON.stringify(
    MessagesControllerDeleteMessageResponse$outboundSchema.parse(
      messagesControllerDeleteMessageResponse,
    ),
  );
}

export function messagesControllerDeleteMessageResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  MessagesControllerDeleteMessageResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      MessagesControllerDeleteMessageResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'MessagesControllerDeleteMessageResponse' from JSON`,
  );
}
