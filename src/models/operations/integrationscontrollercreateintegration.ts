/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type IntegrationsControllerCreateIntegrationResponse = {
  headers: { [k: string]: Array<string> };
  result: components.IntegrationResponseDto;
};

/** @internal */
export const IntegrationsControllerCreateIntegrationResponse$inboundSchema:
  z.ZodType<
    IntegrationsControllerCreateIntegrationResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    Headers: z.record(z.array(z.string())),
    Result: components.IntegrationResponseDto$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "Headers": "headers",
      "Result": "result",
    });
  });

/** @internal */
export type IntegrationsControllerCreateIntegrationResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.IntegrationResponseDto$Outbound;
};

/** @internal */
export const IntegrationsControllerCreateIntegrationResponse$outboundSchema:
  z.ZodType<
    IntegrationsControllerCreateIntegrationResponse$Outbound,
    z.ZodTypeDef,
    IntegrationsControllerCreateIntegrationResponse
  > = z.object({
    headers: z.record(z.array(z.string())),
    result: components.IntegrationResponseDto$outboundSchema,
  }).transform((v) => {
    return remap$(v, {
      headers: "Headers",
      result: "Result",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IntegrationsControllerCreateIntegrationResponse$ {
  /** @deprecated use `IntegrationsControllerCreateIntegrationResponse$inboundSchema` instead. */
  export const inboundSchema =
    IntegrationsControllerCreateIntegrationResponse$inboundSchema;
  /** @deprecated use `IntegrationsControllerCreateIntegrationResponse$outboundSchema` instead. */
  export const outboundSchema =
    IntegrationsControllerCreateIntegrationResponse$outboundSchema;
  /** @deprecated use `IntegrationsControllerCreateIntegrationResponse$Outbound` instead. */
  export type Outbound =
    IntegrationsControllerCreateIntegrationResponse$Outbound;
}

export function integrationsControllerCreateIntegrationResponseToJSON(
  integrationsControllerCreateIntegrationResponse:
    IntegrationsControllerCreateIntegrationResponse,
): string {
  return JSON.stringify(
    IntegrationsControllerCreateIntegrationResponse$outboundSchema.parse(
      integrationsControllerCreateIntegrationResponse,
    ),
  );
}

export function integrationsControllerCreateIntegrationResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  IntegrationsControllerCreateIntegrationResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      IntegrationsControllerCreateIntegrationResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'IntegrationsControllerCreateIntegrationResponse' from JSON`,
  );
}