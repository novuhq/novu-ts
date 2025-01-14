/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type TopicsControllerDeleteTopicRequest = {
  /**
   * A header for idempotency purposes
   */
  idempotencyKey?: string | undefined;
  /**
   * The topic key
   */
  topicKey: string;
};

export type TopicsControllerDeleteTopicResponse = {
  headers: { [k: string]: Array<string> };
  result: components.ErrorDto;
};

/** @internal */
export const TopicsControllerDeleteTopicRequest$inboundSchema: z.ZodType<
  TopicsControllerDeleteTopicRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "Idempotency-Key": z.string().optional(),
  topicKey: z.string(),
}).transform((v) => {
  return remap$(v, {
    "Idempotency-Key": "idempotencyKey",
  });
});

/** @internal */
export type TopicsControllerDeleteTopicRequest$Outbound = {
  "Idempotency-Key"?: string | undefined;
  topicKey: string;
};

/** @internal */
export const TopicsControllerDeleteTopicRequest$outboundSchema: z.ZodType<
  TopicsControllerDeleteTopicRequest$Outbound,
  z.ZodTypeDef,
  TopicsControllerDeleteTopicRequest
> = z.object({
  idempotencyKey: z.string().optional(),
  topicKey: z.string(),
}).transform((v) => {
  return remap$(v, {
    idempotencyKey: "Idempotency-Key",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TopicsControllerDeleteTopicRequest$ {
  /** @deprecated use `TopicsControllerDeleteTopicRequest$inboundSchema` instead. */
  export const inboundSchema = TopicsControllerDeleteTopicRequest$inboundSchema;
  /** @deprecated use `TopicsControllerDeleteTopicRequest$outboundSchema` instead. */
  export const outboundSchema =
    TopicsControllerDeleteTopicRequest$outboundSchema;
  /** @deprecated use `TopicsControllerDeleteTopicRequest$Outbound` instead. */
  export type Outbound = TopicsControllerDeleteTopicRequest$Outbound;
}

export function topicsControllerDeleteTopicRequestToJSON(
  topicsControllerDeleteTopicRequest: TopicsControllerDeleteTopicRequest,
): string {
  return JSON.stringify(
    TopicsControllerDeleteTopicRequest$outboundSchema.parse(
      topicsControllerDeleteTopicRequest,
    ),
  );
}

export function topicsControllerDeleteTopicRequestFromJSON(
  jsonString: string,
): SafeParseResult<TopicsControllerDeleteTopicRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      TopicsControllerDeleteTopicRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TopicsControllerDeleteTopicRequest' from JSON`,
  );
}

/** @internal */
export const TopicsControllerDeleteTopicResponse$inboundSchema: z.ZodType<
  TopicsControllerDeleteTopicResponse,
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
export type TopicsControllerDeleteTopicResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.ErrorDto$Outbound;
};

/** @internal */
export const TopicsControllerDeleteTopicResponse$outboundSchema: z.ZodType<
  TopicsControllerDeleteTopicResponse$Outbound,
  z.ZodTypeDef,
  TopicsControllerDeleteTopicResponse
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
export namespace TopicsControllerDeleteTopicResponse$ {
  /** @deprecated use `TopicsControllerDeleteTopicResponse$inboundSchema` instead. */
  export const inboundSchema =
    TopicsControllerDeleteTopicResponse$inboundSchema;
  /** @deprecated use `TopicsControllerDeleteTopicResponse$outboundSchema` instead. */
  export const outboundSchema =
    TopicsControllerDeleteTopicResponse$outboundSchema;
  /** @deprecated use `TopicsControllerDeleteTopicResponse$Outbound` instead. */
  export type Outbound = TopicsControllerDeleteTopicResponse$Outbound;
}

export function topicsControllerDeleteTopicResponseToJSON(
  topicsControllerDeleteTopicResponse: TopicsControllerDeleteTopicResponse,
): string {
  return JSON.stringify(
    TopicsControllerDeleteTopicResponse$outboundSchema.parse(
      topicsControllerDeleteTopicResponse,
    ),
  );
}

export function topicsControllerDeleteTopicResponseFromJSON(
  jsonString: string,
): SafeParseResult<TopicsControllerDeleteTopicResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      TopicsControllerDeleteTopicResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TopicsControllerDeleteTopicResponse' from JSON`,
  );
}
