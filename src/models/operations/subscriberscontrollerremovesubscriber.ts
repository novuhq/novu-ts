/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type SubscribersControllerRemoveSubscriberRequest = {
  subscriberId: string;
};

/** @internal */
export const SubscribersControllerRemoveSubscriberRequest$inboundSchema:
  z.ZodType<
    SubscribersControllerRemoveSubscriberRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    subscriberId: z.string(),
  });

/** @internal */
export type SubscribersControllerRemoveSubscriberRequest$Outbound = {
  subscriberId: string;
};

/** @internal */
export const SubscribersControllerRemoveSubscriberRequest$outboundSchema:
  z.ZodType<
    SubscribersControllerRemoveSubscriberRequest$Outbound,
    z.ZodTypeDef,
    SubscribersControllerRemoveSubscriberRequest
  > = z.object({
    subscriberId: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscribersControllerRemoveSubscriberRequest$ {
  /** @deprecated use `SubscribersControllerRemoveSubscriberRequest$inboundSchema` instead. */
  export const inboundSchema =
    SubscribersControllerRemoveSubscriberRequest$inboundSchema;
  /** @deprecated use `SubscribersControllerRemoveSubscriberRequest$outboundSchema` instead. */
  export const outboundSchema =
    SubscribersControllerRemoveSubscriberRequest$outboundSchema;
  /** @deprecated use `SubscribersControllerRemoveSubscriberRequest$Outbound` instead. */
  export type Outbound = SubscribersControllerRemoveSubscriberRequest$Outbound;
}
