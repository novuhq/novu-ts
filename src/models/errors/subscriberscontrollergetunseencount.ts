/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

/**
 * Not Found
 */
export type SubscribersControllerGetUnseenCountSubscribersNotificationsResponseBodyData =
  {
    data?: components.ErrorDto | undefined;
  };

/**
 * Not Found
 */
export class SubscribersControllerGetUnseenCountSubscribersNotificationsResponseBody
  extends Error
{
  data?: components.ErrorDto | undefined;

  /** The original data that was passed to this error instance. */
  data$:
    SubscribersControllerGetUnseenCountSubscribersNotificationsResponseBodyData;

  constructor(
    err:
      SubscribersControllerGetUnseenCountSubscribersNotificationsResponseBodyData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.data != null) this.data = err.data;

    this.name =
      "SubscribersControllerGetUnseenCountSubscribersNotificationsResponseBody";
  }
}

/**
 * Bad Request
 */
export type SubscribersControllerGetUnseenCountResponseBodyData = {
  data?: components.ErrorDto | undefined;
};

/**
 * Bad Request
 */
export class SubscribersControllerGetUnseenCountResponseBody extends Error {
  data?: components.ErrorDto | undefined;

  /** The original data that was passed to this error instance. */
  data$: SubscribersControllerGetUnseenCountResponseBodyData;

  constructor(err: SubscribersControllerGetUnseenCountResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.data != null) this.data = err.data;

    this.name = "SubscribersControllerGetUnseenCountResponseBody";
  }
}

/** @internal */
export const SubscribersControllerGetUnseenCountSubscribersNotificationsResponseBody$inboundSchema:
  z.ZodType<
    SubscribersControllerGetUnseenCountSubscribersNotificationsResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    data: components.ErrorDto$inboundSchema.optional(),
  })
    .transform((v) => {
      return new SubscribersControllerGetUnseenCountSubscribersNotificationsResponseBody(
        v,
      );
    });

/** @internal */
export type SubscribersControllerGetUnseenCountSubscribersNotificationsResponseBody$Outbound =
  {
    data?: components.ErrorDto$Outbound | undefined;
  };

/** @internal */
export const SubscribersControllerGetUnseenCountSubscribersNotificationsResponseBody$outboundSchema:
  z.ZodType<
    SubscribersControllerGetUnseenCountSubscribersNotificationsResponseBody$Outbound,
    z.ZodTypeDef,
    SubscribersControllerGetUnseenCountSubscribersNotificationsResponseBody
  > = z.instanceof(
    SubscribersControllerGetUnseenCountSubscribersNotificationsResponseBody,
  )
    .transform(v => v.data$)
    .pipe(z.object({
      data: components.ErrorDto$outboundSchema.optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscribersControllerGetUnseenCountSubscribersNotificationsResponseBody$ {
  /** @deprecated use `SubscribersControllerGetUnseenCountSubscribersNotificationsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    SubscribersControllerGetUnseenCountSubscribersNotificationsResponseBody$inboundSchema;
  /** @deprecated use `SubscribersControllerGetUnseenCountSubscribersNotificationsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    SubscribersControllerGetUnseenCountSubscribersNotificationsResponseBody$outboundSchema;
  /** @deprecated use `SubscribersControllerGetUnseenCountSubscribersNotificationsResponseBody$Outbound` instead. */
  export type Outbound =
    SubscribersControllerGetUnseenCountSubscribersNotificationsResponseBody$Outbound;
}

/** @internal */
export const SubscribersControllerGetUnseenCountResponseBody$inboundSchema:
  z.ZodType<
    SubscribersControllerGetUnseenCountResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    data: components.ErrorDto$inboundSchema.optional(),
  })
    .transform((v) => {
      return new SubscribersControllerGetUnseenCountResponseBody(v);
    });

/** @internal */
export type SubscribersControllerGetUnseenCountResponseBody$Outbound = {
  data?: components.ErrorDto$Outbound | undefined;
};

/** @internal */
export const SubscribersControllerGetUnseenCountResponseBody$outboundSchema:
  z.ZodType<
    SubscribersControllerGetUnseenCountResponseBody$Outbound,
    z.ZodTypeDef,
    SubscribersControllerGetUnseenCountResponseBody
  > = z.instanceof(SubscribersControllerGetUnseenCountResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      data: components.ErrorDto$outboundSchema.optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscribersControllerGetUnseenCountResponseBody$ {
  /** @deprecated use `SubscribersControllerGetUnseenCountResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    SubscribersControllerGetUnseenCountResponseBody$inboundSchema;
  /** @deprecated use `SubscribersControllerGetUnseenCountResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    SubscribersControllerGetUnseenCountResponseBody$outboundSchema;
  /** @deprecated use `SubscribersControllerGetUnseenCountResponseBody$Outbound` instead. */
  export type Outbound =
    SubscribersControllerGetUnseenCountResponseBody$Outbound;
}
