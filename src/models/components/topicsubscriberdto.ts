/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type TopicSubscriberDto = {
  environmentId: string;
  organizationId: string;
  subscriberId: string;
  topicId: string;
  externalSubscriberId: string;
  topicKey: string;
};

/** @internal */
export const TopicSubscriberDto$inboundSchema: z.ZodType<
  TopicSubscriberDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  _environmentId: z.string(),
  _organizationId: z.string(),
  _subscriberId: z.string(),
  _topicId: z.string(),
  externalSubscriberId: z.string(),
  topicKey: z.string(),
}).transform((v) => {
  return remap$(v, {
    "_environmentId": "environmentId",
    "_organizationId": "organizationId",
    "_subscriberId": "subscriberId",
    "_topicId": "topicId",
  });
});

/** @internal */
export type TopicSubscriberDto$Outbound = {
  _environmentId: string;
  _organizationId: string;
  _subscriberId: string;
  _topicId: string;
  externalSubscriberId: string;
  topicKey: string;
};

/** @internal */
export const TopicSubscriberDto$outboundSchema: z.ZodType<
  TopicSubscriberDto$Outbound,
  z.ZodTypeDef,
  TopicSubscriberDto
> = z.object({
  environmentId: z.string(),
  organizationId: z.string(),
  subscriberId: z.string(),
  topicId: z.string(),
  externalSubscriberId: z.string(),
  topicKey: z.string(),
}).transform((v) => {
  return remap$(v, {
    environmentId: "_environmentId",
    organizationId: "_organizationId",
    subscriberId: "_subscriberId",
    topicId: "_topicId",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TopicSubscriberDto$ {
  /** @deprecated use `TopicSubscriberDto$inboundSchema` instead. */
  export const inboundSchema = TopicSubscriberDto$inboundSchema;
  /** @deprecated use `TopicSubscriberDto$outboundSchema` instead. */
  export const outboundSchema = TopicSubscriberDto$outboundSchema;
  /** @deprecated use `TopicSubscriberDto$Outbound` instead. */
  export type Outbound = TopicSubscriberDto$Outbound;
}
