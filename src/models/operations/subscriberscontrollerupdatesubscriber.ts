/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type SubscribersControllerUpdateSubscriberRequest = {
  subscriberId: string;
  updateSubscriberRequestDto: components.UpdateSubscriberRequestDto;
};

/** @internal */
export const SubscribersControllerUpdateSubscriberRequest$inboundSchema:
  z.ZodType<
    SubscribersControllerUpdateSubscriberRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    subscriberId: z.string(),
    UpdateSubscriberRequestDto:
      components.UpdateSubscriberRequestDto$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "UpdateSubscriberRequestDto": "updateSubscriberRequestDto",
    });
  });

/** @internal */
export type SubscribersControllerUpdateSubscriberRequest$Outbound = {
  subscriberId: string;
  UpdateSubscriberRequestDto: components.UpdateSubscriberRequestDto$Outbound;
};

/** @internal */
export const SubscribersControllerUpdateSubscriberRequest$outboundSchema:
  z.ZodType<
    SubscribersControllerUpdateSubscriberRequest$Outbound,
    z.ZodTypeDef,
    SubscribersControllerUpdateSubscriberRequest
  > = z.object({
    subscriberId: z.string(),
    updateSubscriberRequestDto:
      components.UpdateSubscriberRequestDto$outboundSchema,
  }).transform((v) => {
    return remap$(v, {
      updateSubscriberRequestDto: "UpdateSubscriberRequestDto",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscribersControllerUpdateSubscriberRequest$ {
  /** @deprecated use `SubscribersControllerUpdateSubscriberRequest$inboundSchema` instead. */
  export const inboundSchema =
    SubscribersControllerUpdateSubscriberRequest$inboundSchema;
  /** @deprecated use `SubscribersControllerUpdateSubscriberRequest$outboundSchema` instead. */
  export const outboundSchema =
    SubscribersControllerUpdateSubscriberRequest$outboundSchema;
  /** @deprecated use `SubscribersControllerUpdateSubscriberRequest$Outbound` instead. */
  export type Outbound = SubscribersControllerUpdateSubscriberRequest$Outbound;
}
