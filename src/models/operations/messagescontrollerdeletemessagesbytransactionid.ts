/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The channel of the message to be deleted
 */
export const Channel = {
  InApp: "in_app",
  Email: "email",
  Sms: "sms",
  Chat: "chat",
  Push: "push",
} as const;
/**
 * The channel of the message to be deleted
 */
export type Channel = ClosedEnum<typeof Channel>;

export type MessagesControllerDeleteMessagesByTransactionIdRequest = {
  /**
   * A header for idempotency purposes
   */
  idempotencyKey?: string | undefined;
  /**
   * The channel of the message to be deleted
   */
  channel?: Channel | undefined;
  transactionId: string;
};

export type MessagesControllerDeleteMessagesByTransactionIdResponse = {
  headers: { [k: string]: Array<string> };
  result: components.ErrorDto;
};

/** @internal */
export const Channel$inboundSchema: z.ZodNativeEnum<typeof Channel> = z
  .nativeEnum(Channel);

/** @internal */
export const Channel$outboundSchema: z.ZodNativeEnum<typeof Channel> =
  Channel$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Channel$ {
  /** @deprecated use `Channel$inboundSchema` instead. */
  export const inboundSchema = Channel$inboundSchema;
  /** @deprecated use `Channel$outboundSchema` instead. */
  export const outboundSchema = Channel$outboundSchema;
}

/** @internal */
export const MessagesControllerDeleteMessagesByTransactionIdRequest$inboundSchema:
  z.ZodType<
    MessagesControllerDeleteMessagesByTransactionIdRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    "Idempotency-Key": z.string().optional(),
    channel: Channel$inboundSchema.optional(),
    transactionId: z.string(),
  }).transform((v) => {
    return remap$(v, {
      "Idempotency-Key": "idempotencyKey",
    });
  });

/** @internal */
export type MessagesControllerDeleteMessagesByTransactionIdRequest$Outbound = {
  "Idempotency-Key"?: string | undefined;
  channel?: string | undefined;
  transactionId: string;
};

/** @internal */
export const MessagesControllerDeleteMessagesByTransactionIdRequest$outboundSchema:
  z.ZodType<
    MessagesControllerDeleteMessagesByTransactionIdRequest$Outbound,
    z.ZodTypeDef,
    MessagesControllerDeleteMessagesByTransactionIdRequest
  > = z.object({
    idempotencyKey: z.string().optional(),
    channel: Channel$outboundSchema.optional(),
    transactionId: z.string(),
  }).transform((v) => {
    return remap$(v, {
      idempotencyKey: "Idempotency-Key",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessagesControllerDeleteMessagesByTransactionIdRequest$ {
  /** @deprecated use `MessagesControllerDeleteMessagesByTransactionIdRequest$inboundSchema` instead. */
  export const inboundSchema =
    MessagesControllerDeleteMessagesByTransactionIdRequest$inboundSchema;
  /** @deprecated use `MessagesControllerDeleteMessagesByTransactionIdRequest$outboundSchema` instead. */
  export const outboundSchema =
    MessagesControllerDeleteMessagesByTransactionIdRequest$outboundSchema;
  /** @deprecated use `MessagesControllerDeleteMessagesByTransactionIdRequest$Outbound` instead. */
  export type Outbound =
    MessagesControllerDeleteMessagesByTransactionIdRequest$Outbound;
}

export function messagesControllerDeleteMessagesByTransactionIdRequestToJSON(
  messagesControllerDeleteMessagesByTransactionIdRequest:
    MessagesControllerDeleteMessagesByTransactionIdRequest,
): string {
  return JSON.stringify(
    MessagesControllerDeleteMessagesByTransactionIdRequest$outboundSchema.parse(
      messagesControllerDeleteMessagesByTransactionIdRequest,
    ),
  );
}

export function messagesControllerDeleteMessagesByTransactionIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  MessagesControllerDeleteMessagesByTransactionIdRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      MessagesControllerDeleteMessagesByTransactionIdRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'MessagesControllerDeleteMessagesByTransactionIdRequest' from JSON`,
  );
}

/** @internal */
export const MessagesControllerDeleteMessagesByTransactionIdResponse$inboundSchema:
  z.ZodType<
    MessagesControllerDeleteMessagesByTransactionIdResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    Headers: z.record(z.array(z.string())),
    Result: components.ErrorDto$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "Headers": "headers",
      "Result": "result",
    });
  });

/** @internal */
export type MessagesControllerDeleteMessagesByTransactionIdResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.ErrorDto$Outbound;
};

/** @internal */
export const MessagesControllerDeleteMessagesByTransactionIdResponse$outboundSchema:
  z.ZodType<
    MessagesControllerDeleteMessagesByTransactionIdResponse$Outbound,
    z.ZodTypeDef,
    MessagesControllerDeleteMessagesByTransactionIdResponse
  > = z.object({
    headers: z.record(z.array(z.string())),
    result: components.ErrorDto$outboundSchema,
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
export namespace MessagesControllerDeleteMessagesByTransactionIdResponse$ {
  /** @deprecated use `MessagesControllerDeleteMessagesByTransactionIdResponse$inboundSchema` instead. */
  export const inboundSchema =
    MessagesControllerDeleteMessagesByTransactionIdResponse$inboundSchema;
  /** @deprecated use `MessagesControllerDeleteMessagesByTransactionIdResponse$outboundSchema` instead. */
  export const outboundSchema =
    MessagesControllerDeleteMessagesByTransactionIdResponse$outboundSchema;
  /** @deprecated use `MessagesControllerDeleteMessagesByTransactionIdResponse$Outbound` instead. */
  export type Outbound =
    MessagesControllerDeleteMessagesByTransactionIdResponse$Outbound;
}

export function messagesControllerDeleteMessagesByTransactionIdResponseToJSON(
  messagesControllerDeleteMessagesByTransactionIdResponse:
    MessagesControllerDeleteMessagesByTransactionIdResponse,
): string {
  return JSON.stringify(
    MessagesControllerDeleteMessagesByTransactionIdResponse$outboundSchema
      .parse(messagesControllerDeleteMessagesByTransactionIdResponse),
  );
}

export function messagesControllerDeleteMessagesByTransactionIdResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  MessagesControllerDeleteMessagesByTransactionIdResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      MessagesControllerDeleteMessagesByTransactionIdResponse$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'MessagesControllerDeleteMessagesByTransactionIdResponse' from JSON`,
  );
}
