/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type IntegrationsControllerGetWebhookSupportStatusRequest = {
  providerOrIntegrationId: string;
};

/** @internal */
export const IntegrationsControllerGetWebhookSupportStatusRequest$inboundSchema:
  z.ZodType<
    IntegrationsControllerGetWebhookSupportStatusRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    providerOrIntegrationId: z.string(),
  });

/** @internal */
export type IntegrationsControllerGetWebhookSupportStatusRequest$Outbound = {
  providerOrIntegrationId: string;
};

/** @internal */
export const IntegrationsControllerGetWebhookSupportStatusRequest$outboundSchema:
  z.ZodType<
    IntegrationsControllerGetWebhookSupportStatusRequest$Outbound,
    z.ZodTypeDef,
    IntegrationsControllerGetWebhookSupportStatusRequest
  > = z.object({
    providerOrIntegrationId: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IntegrationsControllerGetWebhookSupportStatusRequest$ {
  /** @deprecated use `IntegrationsControllerGetWebhookSupportStatusRequest$inboundSchema` instead. */
  export const inboundSchema =
    IntegrationsControllerGetWebhookSupportStatusRequest$inboundSchema;
  /** @deprecated use `IntegrationsControllerGetWebhookSupportStatusRequest$outboundSchema` instead. */
  export const outboundSchema =
    IntegrationsControllerGetWebhookSupportStatusRequest$outboundSchema;
  /** @deprecated use `IntegrationsControllerGetWebhookSupportStatusRequest$Outbound` instead. */
  export type Outbound =
    IntegrationsControllerGetWebhookSupportStatusRequest$Outbound;
}
