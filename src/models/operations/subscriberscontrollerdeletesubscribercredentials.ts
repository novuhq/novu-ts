/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type SubscribersControllerDeleteSubscriberCredentialsRequest = {
  subscriberId: string;
  providerId: string;
};

/** @internal */
export const SubscribersControllerDeleteSubscriberCredentialsRequest$inboundSchema:
  z.ZodType<
    SubscribersControllerDeleteSubscriberCredentialsRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    subscriberId: z.string(),
    providerId: z.string(),
  });

/** @internal */
export type SubscribersControllerDeleteSubscriberCredentialsRequest$Outbound = {
  subscriberId: string;
  providerId: string;
};

/** @internal */
export const SubscribersControllerDeleteSubscriberCredentialsRequest$outboundSchema:
  z.ZodType<
    SubscribersControllerDeleteSubscriberCredentialsRequest$Outbound,
    z.ZodTypeDef,
    SubscribersControllerDeleteSubscriberCredentialsRequest
  > = z.object({
    subscriberId: z.string(),
    providerId: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscribersControllerDeleteSubscriberCredentialsRequest$ {
  /** @deprecated use `SubscribersControllerDeleteSubscriberCredentialsRequest$inboundSchema` instead. */
  export const inboundSchema =
    SubscribersControllerDeleteSubscriberCredentialsRequest$inboundSchema;
  /** @deprecated use `SubscribersControllerDeleteSubscriberCredentialsRequest$outboundSchema` instead. */
  export const outboundSchema =
    SubscribersControllerDeleteSubscriberCredentialsRequest$outboundSchema;
  /** @deprecated use `SubscribersControllerDeleteSubscriberCredentialsRequest$Outbound` instead. */
  export type Outbound =
    SubscribersControllerDeleteSubscriberCredentialsRequest$Outbound;
}
