/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type SubscribersControllerGetUnseenCountRequest = {
  seen: boolean;
  subscriberId: string;
  limit: number;
};

/** @internal */
export const SubscribersControllerGetUnseenCountRequest$inboundSchema:
  z.ZodType<SubscribersControllerGetUnseenCountRequest, z.ZodTypeDef, unknown> =
    z.object({
      seen: z.boolean(),
      subscriberId: z.string(),
      limit: z.number(),
    });

/** @internal */
export type SubscribersControllerGetUnseenCountRequest$Outbound = {
  seen: boolean;
  subscriberId: string;
  limit: number;
};

/** @internal */
export const SubscribersControllerGetUnseenCountRequest$outboundSchema:
  z.ZodType<
    SubscribersControllerGetUnseenCountRequest$Outbound,
    z.ZodTypeDef,
    SubscribersControllerGetUnseenCountRequest
  > = z.object({
    seen: z.boolean(),
    subscriberId: z.string(),
    limit: z.number(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscribersControllerGetUnseenCountRequest$ {
  /** @deprecated use `SubscribersControllerGetUnseenCountRequest$inboundSchema` instead. */
  export const inboundSchema =
    SubscribersControllerGetUnseenCountRequest$inboundSchema;
  /** @deprecated use `SubscribersControllerGetUnseenCountRequest$outboundSchema` instead. */
  export const outboundSchema =
    SubscribersControllerGetUnseenCountRequest$outboundSchema;
  /** @deprecated use `SubscribersControllerGetUnseenCountRequest$Outbound` instead. */
  export type Outbound = SubscribersControllerGetUnseenCountRequest$Outbound;
}
