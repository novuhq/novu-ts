/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type TopicsControllerRemoveSubscribersRequest = {
  /**
   * The topic key
   */
  topicKey: string;
  /**
   * A header for idempotency purposes
   */
  idempotencyKey?: string | undefined;
  removeSubscribersRequestDto: components.RemoveSubscribersRequestDto;
};

export type TopicsControllerRemoveSubscribersResponse = {
  headers: { [k: string]: Array<string> };
};

/** @internal */
export const TopicsControllerRemoveSubscribersRequest$inboundSchema: z.ZodType<
  TopicsControllerRemoveSubscribersRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  topicKey: z.string(),
  "idempotency-key": z.string().optional(),
  RemoveSubscribersRequestDto:
    components.RemoveSubscribersRequestDto$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "idempotency-key": "idempotencyKey",
    "RemoveSubscribersRequestDto": "removeSubscribersRequestDto",
  });
});

/** @internal */
export type TopicsControllerRemoveSubscribersRequest$Outbound = {
  topicKey: string;
  "idempotency-key"?: string | undefined;
  RemoveSubscribersRequestDto: components.RemoveSubscribersRequestDto$Outbound;
};

/** @internal */
export const TopicsControllerRemoveSubscribersRequest$outboundSchema: z.ZodType<
  TopicsControllerRemoveSubscribersRequest$Outbound,
  z.ZodTypeDef,
  TopicsControllerRemoveSubscribersRequest
> = z.object({
  topicKey: z.string(),
  idempotencyKey: z.string().optional(),
  removeSubscribersRequestDto:
    components.RemoveSubscribersRequestDto$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    idempotencyKey: "idempotency-key",
    removeSubscribersRequestDto: "RemoveSubscribersRequestDto",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TopicsControllerRemoveSubscribersRequest$ {
  /** @deprecated use `TopicsControllerRemoveSubscribersRequest$inboundSchema` instead. */
  export const inboundSchema =
    TopicsControllerRemoveSubscribersRequest$inboundSchema;
  /** @deprecated use `TopicsControllerRemoveSubscribersRequest$outboundSchema` instead. */
  export const outboundSchema =
    TopicsControllerRemoveSubscribersRequest$outboundSchema;
  /** @deprecated use `TopicsControllerRemoveSubscribersRequest$Outbound` instead. */
  export type Outbound = TopicsControllerRemoveSubscribersRequest$Outbound;
}

export function topicsControllerRemoveSubscribersRequestToJSON(
  topicsControllerRemoveSubscribersRequest:
    TopicsControllerRemoveSubscribersRequest,
): string {
  return JSON.stringify(
    TopicsControllerRemoveSubscribersRequest$outboundSchema.parse(
      topicsControllerRemoveSubscribersRequest,
    ),
  );
}

export function topicsControllerRemoveSubscribersRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  TopicsControllerRemoveSubscribersRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      TopicsControllerRemoveSubscribersRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'TopicsControllerRemoveSubscribersRequest' from JSON`,
  );
}

/** @internal */
export const TopicsControllerRemoveSubscribersResponse$inboundSchema: z.ZodType<
  TopicsControllerRemoveSubscribersResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
  });
});

/** @internal */
export type TopicsControllerRemoveSubscribersResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const TopicsControllerRemoveSubscribersResponse$outboundSchema:
  z.ZodType<
    TopicsControllerRemoveSubscribersResponse$Outbound,
    z.ZodTypeDef,
    TopicsControllerRemoveSubscribersResponse
  > = z.object({
    headers: z.record(z.array(z.string())),
  }).transform((v) => {
    return remap$(v, {
      headers: "Headers",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TopicsControllerRemoveSubscribersResponse$ {
  /** @deprecated use `TopicsControllerRemoveSubscribersResponse$inboundSchema` instead. */
  export const inboundSchema =
    TopicsControllerRemoveSubscribersResponse$inboundSchema;
  /** @deprecated use `TopicsControllerRemoveSubscribersResponse$outboundSchema` instead. */
  export const outboundSchema =
    TopicsControllerRemoveSubscribersResponse$outboundSchema;
  /** @deprecated use `TopicsControllerRemoveSubscribersResponse$Outbound` instead. */
  export type Outbound = TopicsControllerRemoveSubscribersResponse$Outbound;
}

export function topicsControllerRemoveSubscribersResponseToJSON(
  topicsControllerRemoveSubscribersResponse:
    TopicsControllerRemoveSubscribersResponse,
): string {
  return JSON.stringify(
    TopicsControllerRemoveSubscribersResponse$outboundSchema.parse(
      topicsControllerRemoveSubscribersResponse,
    ),
  );
}

export function topicsControllerRemoveSubscribersResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  TopicsControllerRemoveSubscribersResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      TopicsControllerRemoveSubscribersResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'TopicsControllerRemoveSubscribersResponse' from JSON`,
  );
}
