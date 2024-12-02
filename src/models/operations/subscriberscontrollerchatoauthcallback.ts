/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SubscribersControllerChatOauthCallbackRequest = {
  subscriberId: string;
  providerId?: any | undefined;
  code: string;
  hmacHash: string;
  environmentId: string;
  integrationIdentifier?: string | undefined;
};

export type SubscribersControllerChatOauthCallbackResponseBody = {};

export type SubscribersControllerChatOauthCallbackResponse = {
  headers: { [k: string]: Array<string> };
  result: SubscribersControllerChatOauthCallbackResponseBody;
};

/** @internal */
export const SubscribersControllerChatOauthCallbackRequest$inboundSchema:
  z.ZodType<
    SubscribersControllerChatOauthCallbackRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    subscriberId: z.string(),
    providerId: z.any().optional(),
    code: z.string(),
    hmacHash: z.string(),
    environmentId: z.string(),
    integrationIdentifier: z.string().optional(),
  });

/** @internal */
export type SubscribersControllerChatOauthCallbackRequest$Outbound = {
  subscriberId: string;
  providerId?: any | undefined;
  code: string;
  hmacHash: string;
  environmentId: string;
  integrationIdentifier?: string | undefined;
};

/** @internal */
export const SubscribersControllerChatOauthCallbackRequest$outboundSchema:
  z.ZodType<
    SubscribersControllerChatOauthCallbackRequest$Outbound,
    z.ZodTypeDef,
    SubscribersControllerChatOauthCallbackRequest
  > = z.object({
    subscriberId: z.string(),
    providerId: z.any().optional(),
    code: z.string(),
    hmacHash: z.string(),
    environmentId: z.string(),
    integrationIdentifier: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscribersControllerChatOauthCallbackRequest$ {
  /** @deprecated use `SubscribersControllerChatOauthCallbackRequest$inboundSchema` instead. */
  export const inboundSchema =
    SubscribersControllerChatOauthCallbackRequest$inboundSchema;
  /** @deprecated use `SubscribersControllerChatOauthCallbackRequest$outboundSchema` instead. */
  export const outboundSchema =
    SubscribersControllerChatOauthCallbackRequest$outboundSchema;
  /** @deprecated use `SubscribersControllerChatOauthCallbackRequest$Outbound` instead. */
  export type Outbound = SubscribersControllerChatOauthCallbackRequest$Outbound;
}

export function subscribersControllerChatOauthCallbackRequestToJSON(
  subscribersControllerChatOauthCallbackRequest:
    SubscribersControllerChatOauthCallbackRequest,
): string {
  return JSON.stringify(
    SubscribersControllerChatOauthCallbackRequest$outboundSchema.parse(
      subscribersControllerChatOauthCallbackRequest,
    ),
  );
}

export function subscribersControllerChatOauthCallbackRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  SubscribersControllerChatOauthCallbackRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      SubscribersControllerChatOauthCallbackRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'SubscribersControllerChatOauthCallbackRequest' from JSON`,
  );
}

/** @internal */
export const SubscribersControllerChatOauthCallbackResponseBody$inboundSchema:
  z.ZodType<
    SubscribersControllerChatOauthCallbackResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type SubscribersControllerChatOauthCallbackResponseBody$Outbound = {};

/** @internal */
export const SubscribersControllerChatOauthCallbackResponseBody$outboundSchema:
  z.ZodType<
    SubscribersControllerChatOauthCallbackResponseBody$Outbound,
    z.ZodTypeDef,
    SubscribersControllerChatOauthCallbackResponseBody
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscribersControllerChatOauthCallbackResponseBody$ {
  /** @deprecated use `SubscribersControllerChatOauthCallbackResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    SubscribersControllerChatOauthCallbackResponseBody$inboundSchema;
  /** @deprecated use `SubscribersControllerChatOauthCallbackResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    SubscribersControllerChatOauthCallbackResponseBody$outboundSchema;
  /** @deprecated use `SubscribersControllerChatOauthCallbackResponseBody$Outbound` instead. */
  export type Outbound =
    SubscribersControllerChatOauthCallbackResponseBody$Outbound;
}

export function subscribersControllerChatOauthCallbackResponseBodyToJSON(
  subscribersControllerChatOauthCallbackResponseBody:
    SubscribersControllerChatOauthCallbackResponseBody,
): string {
  return JSON.stringify(
    SubscribersControllerChatOauthCallbackResponseBody$outboundSchema.parse(
      subscribersControllerChatOauthCallbackResponseBody,
    ),
  );
}

export function subscribersControllerChatOauthCallbackResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  SubscribersControllerChatOauthCallbackResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      SubscribersControllerChatOauthCallbackResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'SubscribersControllerChatOauthCallbackResponseBody' from JSON`,
  );
}

/** @internal */
export const SubscribersControllerChatOauthCallbackResponse$inboundSchema:
  z.ZodType<
    SubscribersControllerChatOauthCallbackResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    Headers: z.record(z.array(z.string())),
    Result: z.lazy(() =>
      SubscribersControllerChatOauthCallbackResponseBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "Headers": "headers",
      "Result": "result",
    });
  });

/** @internal */
export type SubscribersControllerChatOauthCallbackResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: SubscribersControllerChatOauthCallbackResponseBody$Outbound;
};

/** @internal */
export const SubscribersControllerChatOauthCallbackResponse$outboundSchema:
  z.ZodType<
    SubscribersControllerChatOauthCallbackResponse$Outbound,
    z.ZodTypeDef,
    SubscribersControllerChatOauthCallbackResponse
  > = z.object({
    headers: z.record(z.array(z.string())),
    result: z.lazy(() =>
      SubscribersControllerChatOauthCallbackResponseBody$outboundSchema
    ),
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
export namespace SubscribersControllerChatOauthCallbackResponse$ {
  /** @deprecated use `SubscribersControllerChatOauthCallbackResponse$inboundSchema` instead. */
  export const inboundSchema =
    SubscribersControllerChatOauthCallbackResponse$inboundSchema;
  /** @deprecated use `SubscribersControllerChatOauthCallbackResponse$outboundSchema` instead. */
  export const outboundSchema =
    SubscribersControllerChatOauthCallbackResponse$outboundSchema;
  /** @deprecated use `SubscribersControllerChatOauthCallbackResponse$Outbound` instead. */
  export type Outbound =
    SubscribersControllerChatOauthCallbackResponse$Outbound;
}

export function subscribersControllerChatOauthCallbackResponseToJSON(
  subscribersControllerChatOauthCallbackResponse:
    SubscribersControllerChatOauthCallbackResponse,
): string {
  return JSON.stringify(
    SubscribersControllerChatOauthCallbackResponse$outboundSchema.parse(
      subscribersControllerChatOauthCallbackResponse,
    ),
  );
}

export function subscribersControllerChatOauthCallbackResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  SubscribersControllerChatOauthCallbackResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      SubscribersControllerChatOauthCallbackResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'SubscribersControllerChatOauthCallbackResponse' from JSON`,
  );
}
