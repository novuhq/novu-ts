/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

/**
 * Not Found
 */
export type SubscribersControllerGetNotificationsFeedSubscribersNotificationsResponseBodyData =
  {
    data?: components.ErrorDto | undefined;
  };

/**
 * Not Found
 */
export class SubscribersControllerGetNotificationsFeedSubscribersNotificationsResponseBody
  extends Error
{
  data?: components.ErrorDto | undefined;

  /** The original data that was passed to this error instance. */
  data$:
    SubscribersControllerGetNotificationsFeedSubscribersNotificationsResponseBodyData;

  constructor(
    err:
      SubscribersControllerGetNotificationsFeedSubscribersNotificationsResponseBodyData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.data != null) this.data = err.data;

    this.name =
      "SubscribersControllerGetNotificationsFeedSubscribersNotificationsResponseBody";
  }
}

/**
 * Bad Request
 */
export type SubscribersControllerGetNotificationsFeedResponseBodyData = {
  data?: components.ErrorDto | undefined;
};

/**
 * Bad Request
 */
export class SubscribersControllerGetNotificationsFeedResponseBody
  extends Error
{
  data?: components.ErrorDto | undefined;

  /** The original data that was passed to this error instance. */
  data$: SubscribersControllerGetNotificationsFeedResponseBodyData;

  constructor(err: SubscribersControllerGetNotificationsFeedResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.data != null) this.data = err.data;

    this.name = "SubscribersControllerGetNotificationsFeedResponseBody";
  }
}

/** @internal */
export const SubscribersControllerGetNotificationsFeedSubscribersNotificationsResponseBody$inboundSchema:
  z.ZodType<
    SubscribersControllerGetNotificationsFeedSubscribersNotificationsResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    data: components.ErrorDto$inboundSchema.optional(),
  })
    .transform((v) => {
      return new SubscribersControllerGetNotificationsFeedSubscribersNotificationsResponseBody(
        v,
      );
    });

/** @internal */
export type SubscribersControllerGetNotificationsFeedSubscribersNotificationsResponseBody$Outbound =
  {
    data?: components.ErrorDto$Outbound | undefined;
  };

/** @internal */
export const SubscribersControllerGetNotificationsFeedSubscribersNotificationsResponseBody$outboundSchema:
  z.ZodType<
    SubscribersControllerGetNotificationsFeedSubscribersNotificationsResponseBody$Outbound,
    z.ZodTypeDef,
    SubscribersControllerGetNotificationsFeedSubscribersNotificationsResponseBody
  > = z.instanceof(
    SubscribersControllerGetNotificationsFeedSubscribersNotificationsResponseBody,
  )
    .transform(v => v.data$)
    .pipe(z.object({
      data: components.ErrorDto$outboundSchema.optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscribersControllerGetNotificationsFeedSubscribersNotificationsResponseBody$ {
  /** @deprecated use `SubscribersControllerGetNotificationsFeedSubscribersNotificationsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    SubscribersControllerGetNotificationsFeedSubscribersNotificationsResponseBody$inboundSchema;
  /** @deprecated use `SubscribersControllerGetNotificationsFeedSubscribersNotificationsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    SubscribersControllerGetNotificationsFeedSubscribersNotificationsResponseBody$outboundSchema;
  /** @deprecated use `SubscribersControllerGetNotificationsFeedSubscribersNotificationsResponseBody$Outbound` instead. */
  export type Outbound =
    SubscribersControllerGetNotificationsFeedSubscribersNotificationsResponseBody$Outbound;
}

/** @internal */
export const SubscribersControllerGetNotificationsFeedResponseBody$inboundSchema:
  z.ZodType<
    SubscribersControllerGetNotificationsFeedResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    data: components.ErrorDto$inboundSchema.optional(),
  })
    .transform((v) => {
      return new SubscribersControllerGetNotificationsFeedResponseBody(v);
    });

/** @internal */
export type SubscribersControllerGetNotificationsFeedResponseBody$Outbound = {
  data?: components.ErrorDto$Outbound | undefined;
};

/** @internal */
export const SubscribersControllerGetNotificationsFeedResponseBody$outboundSchema:
  z.ZodType<
    SubscribersControllerGetNotificationsFeedResponseBody$Outbound,
    z.ZodTypeDef,
    SubscribersControllerGetNotificationsFeedResponseBody
  > = z.instanceof(SubscribersControllerGetNotificationsFeedResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      data: components.ErrorDto$outboundSchema.optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscribersControllerGetNotificationsFeedResponseBody$ {
  /** @deprecated use `SubscribersControllerGetNotificationsFeedResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    SubscribersControllerGetNotificationsFeedResponseBody$inboundSchema;
  /** @deprecated use `SubscribersControllerGetNotificationsFeedResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    SubscribersControllerGetNotificationsFeedResponseBody$outboundSchema;
  /** @deprecated use `SubscribersControllerGetNotificationsFeedResponseBody$Outbound` instead. */
  export type Outbound =
    SubscribersControllerGetNotificationsFeedResponseBody$Outbound;
}
