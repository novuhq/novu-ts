/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

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
export const TopicsControllerGetTopicSubscriberRequest$outboundSchema: z.ZodType<
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
    export const inboundSchema = TopicsControllerGetTopicSubscriberRequest$inboundSchema;
    /** @deprecated use `TopicsControllerGetTopicSubscriberRequest$outboundSchema` instead. */
    export const outboundSchema = TopicsControllerGetTopicSubscriberRequest$outboundSchema;
    /** @deprecated use `TopicsControllerGetTopicSubscriberRequest$Outbound` instead. */
    export type Outbound = TopicsControllerGetTopicSubscriberRequest$Outbound;
}
