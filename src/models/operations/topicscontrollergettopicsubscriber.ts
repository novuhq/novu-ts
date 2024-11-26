/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type TopicsControllerGetTopicSubscriberRequest = {
  /**
   * The external subscriber id
   */
  externalSubscriberId: string;
  /**
   * The topic key
   */
  topicKey: string;
};

export type TopicsControllerGetTopicSubscriberResponse = {
  headers: { [k: string]: Array<string> };
  result: components.TopicSubscriberDto;
};

/** @internal */
export const TopicsControllerGetTopicSubscriberRequest$inboundSchema: z.ZodType<
  TopicsControllerGetTopicSubscriberRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  externalSubscriberId: z.string(),
  topicKey: z.string(),
});

/** @internal */
export type TopicsControllerGetTopicSubscriberRequest$Outbound = {
  externalSubscriberId: string;
  topicKey: string;
};

/** @internal */
export const TopicsControllerGetTopicSubscriberRequest$outboundSchema:
  z.ZodType<
    TopicsControllerGetTopicSubscriberRequest$Outbound,
    z.ZodTypeDef,
    TopicsControllerGetTopicSubscriberRequest
  > = z.object({
    externalSubscriberId: z.string(),
    topicKey: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TopicsControllerGetTopicSubscriberRequest$ {
  /** @deprecated use `TopicsControllerGetTopicSubscriberRequest$inboundSchema` instead. */
  export const inboundSchema =
    TopicsControllerGetTopicSubscriberRequest$inboundSchema;
  /** @deprecated use `TopicsControllerGetTopicSubscriberRequest$outboundSchema` instead. */
  export const outboundSchema =
    TopicsControllerGetTopicSubscriberRequest$outboundSchema;
  /** @deprecated use `TopicsControllerGetTopicSubscriberRequest$Outbound` instead. */
  export type Outbound = TopicsControllerGetTopicSubscriberRequest$Outbound;
}

export function topicsControllerGetTopicSubscriberRequestToJSON(
  topicsControllerGetTopicSubscriberRequest:
    TopicsControllerGetTopicSubscriberRequest,
): string {
  return JSON.stringify(
    TopicsControllerGetTopicSubscriberRequest$outboundSchema.parse(
      topicsControllerGetTopicSubscriberRequest,
    ),
  );
}

export function topicsControllerGetTopicSubscriberRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  TopicsControllerGetTopicSubscriberRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      TopicsControllerGetTopicSubscriberRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'TopicsControllerGetTopicSubscriberRequest' from JSON`,
  );
}

/** @internal */
export const TopicsControllerGetTopicSubscriberResponse$inboundSchema:
  z.ZodType<TopicsControllerGetTopicSubscriberResponse, z.ZodTypeDef, unknown> =
    z.object({
      Headers: z.record(z.array(z.string())),
      Result: components.TopicSubscriberDto$inboundSchema,
    }).transform((v) => {
      return remap$(v, {
        "Headers": "headers",
        "Result": "result",
      });
    });

/** @internal */
export type TopicsControllerGetTopicSubscriberResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.TopicSubscriberDto$Outbound;
};

/** @internal */
export const TopicsControllerGetTopicSubscriberResponse$outboundSchema:
  z.ZodType<
    TopicsControllerGetTopicSubscriberResponse$Outbound,
    z.ZodTypeDef,
    TopicsControllerGetTopicSubscriberResponse
  > = z.object({
    headers: z.record(z.array(z.string())),
    result: components.TopicSubscriberDto$outboundSchema,
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
export namespace TopicsControllerGetTopicSubscriberResponse$ {
  /** @deprecated use `TopicsControllerGetTopicSubscriberResponse$inboundSchema` instead. */
  export const inboundSchema =
    TopicsControllerGetTopicSubscriberResponse$inboundSchema;
  /** @deprecated use `TopicsControllerGetTopicSubscriberResponse$outboundSchema` instead. */
  export const outboundSchema =
    TopicsControllerGetTopicSubscriberResponse$outboundSchema;
  /** @deprecated use `TopicsControllerGetTopicSubscriberResponse$Outbound` instead. */
  export type Outbound = TopicsControllerGetTopicSubscriberResponse$Outbound;
}

export function topicsControllerGetTopicSubscriberResponseToJSON(
  topicsControllerGetTopicSubscriberResponse:
    TopicsControllerGetTopicSubscriberResponse,
): string {
  return JSON.stringify(
    TopicsControllerGetTopicSubscriberResponse$outboundSchema.parse(
      topicsControllerGetTopicSubscriberResponse,
    ),
  );
}

export function topicsControllerGetTopicSubscriberResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  TopicsControllerGetTopicSubscriberResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      TopicsControllerGetTopicSubscriberResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'TopicsControllerGetTopicSubscriberResponse' from JSON`,
  );
}
