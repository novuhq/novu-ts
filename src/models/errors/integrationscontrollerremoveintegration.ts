/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

/**
 * Not Found
 */
export type IntegrationsControllerRemoveIntegrationIntegrationsResponseBodyData =
  {
    data?: components.ErrorDto | undefined;
  };

/**
 * Not Found
 */
export class IntegrationsControllerRemoveIntegrationIntegrationsResponseBody
  extends Error
{
  data?: components.ErrorDto | undefined;

  /** The original data that was passed to this error instance. */
  data$: IntegrationsControllerRemoveIntegrationIntegrationsResponseBodyData;

  constructor(
    err: IntegrationsControllerRemoveIntegrationIntegrationsResponseBodyData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.data != null) this.data = err.data;

    this.name =
      "IntegrationsControllerRemoveIntegrationIntegrationsResponseBody";
  }
}

/**
 * Bad Request
 */
export type IntegrationsControllerRemoveIntegrationResponseBodyData = {
  data?: components.ErrorDto | undefined;
};

/**
 * Bad Request
 */
export class IntegrationsControllerRemoveIntegrationResponseBody extends Error {
  data?: components.ErrorDto | undefined;

  /** The original data that was passed to this error instance. */
  data$: IntegrationsControllerRemoveIntegrationResponseBodyData;

  constructor(err: IntegrationsControllerRemoveIntegrationResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.data != null) this.data = err.data;

    this.name = "IntegrationsControllerRemoveIntegrationResponseBody";
  }
}

/** @internal */
export const IntegrationsControllerRemoveIntegrationIntegrationsResponseBody$inboundSchema:
  z.ZodType<
    IntegrationsControllerRemoveIntegrationIntegrationsResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    data: components.ErrorDto$inboundSchema.optional(),
  })
    .transform((v) => {
      return new IntegrationsControllerRemoveIntegrationIntegrationsResponseBody(
        v,
      );
    });

/** @internal */
export type IntegrationsControllerRemoveIntegrationIntegrationsResponseBody$Outbound =
  {
    data?: components.ErrorDto$Outbound | undefined;
  };

/** @internal */
export const IntegrationsControllerRemoveIntegrationIntegrationsResponseBody$outboundSchema:
  z.ZodType<
    IntegrationsControllerRemoveIntegrationIntegrationsResponseBody$Outbound,
    z.ZodTypeDef,
    IntegrationsControllerRemoveIntegrationIntegrationsResponseBody
  > = z.instanceof(
    IntegrationsControllerRemoveIntegrationIntegrationsResponseBody,
  )
    .transform(v => v.data$)
    .pipe(z.object({
      data: components.ErrorDto$outboundSchema.optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IntegrationsControllerRemoveIntegrationIntegrationsResponseBody$ {
  /** @deprecated use `IntegrationsControllerRemoveIntegrationIntegrationsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    IntegrationsControllerRemoveIntegrationIntegrationsResponseBody$inboundSchema;
  /** @deprecated use `IntegrationsControllerRemoveIntegrationIntegrationsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    IntegrationsControllerRemoveIntegrationIntegrationsResponseBody$outboundSchema;
  /** @deprecated use `IntegrationsControllerRemoveIntegrationIntegrationsResponseBody$Outbound` instead. */
  export type Outbound =
    IntegrationsControllerRemoveIntegrationIntegrationsResponseBody$Outbound;
}

/** @internal */
export const IntegrationsControllerRemoveIntegrationResponseBody$inboundSchema:
  z.ZodType<
    IntegrationsControllerRemoveIntegrationResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    data: components.ErrorDto$inboundSchema.optional(),
  })
    .transform((v) => {
      return new IntegrationsControllerRemoveIntegrationResponseBody(v);
    });

/** @internal */
export type IntegrationsControllerRemoveIntegrationResponseBody$Outbound = {
  data?: components.ErrorDto$Outbound | undefined;
};

/** @internal */
export const IntegrationsControllerRemoveIntegrationResponseBody$outboundSchema:
  z.ZodType<
    IntegrationsControllerRemoveIntegrationResponseBody$Outbound,
    z.ZodTypeDef,
    IntegrationsControllerRemoveIntegrationResponseBody
  > = z.instanceof(IntegrationsControllerRemoveIntegrationResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      data: components.ErrorDto$outboundSchema.optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IntegrationsControllerRemoveIntegrationResponseBody$ {
  /** @deprecated use `IntegrationsControllerRemoveIntegrationResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    IntegrationsControllerRemoveIntegrationResponseBody$inboundSchema;
  /** @deprecated use `IntegrationsControllerRemoveIntegrationResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    IntegrationsControllerRemoveIntegrationResponseBody$outboundSchema;
  /** @deprecated use `IntegrationsControllerRemoveIntegrationResponseBody$Outbound` instead. */
  export type Outbound =
    IntegrationsControllerRemoveIntegrationResponseBody$Outbound;
}
