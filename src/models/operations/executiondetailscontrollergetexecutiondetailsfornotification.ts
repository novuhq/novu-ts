/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest =
  {
    notificationId: string;
    subscriberId: string;
  };

export type ExecutionDetailsControllerGetExecutionDetailsForNotificationResponse =
  {
    headers: { [k: string]: Array<string> };
    result: Array<components.ExecutionDetailsResponseDto>;
  };

/** @internal */
export const ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest$inboundSchema:
  z.ZodType<
    ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    notificationId: z.string(),
    subscriberId: z.string(),
  });

/** @internal */
export type ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest$Outbound =
  {
    notificationId: string;
    subscriberId: string;
  };

/** @internal */
export const ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest$outboundSchema:
  z.ZodType<
    ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest$Outbound,
    z.ZodTypeDef,
    ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest
  > = z.object({
    notificationId: z.string(),
    subscriberId: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest$ {
  /** @deprecated use `ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest$inboundSchema` instead. */
  export const inboundSchema =
    ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest$inboundSchema;
  /** @deprecated use `ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest$outboundSchema` instead. */
  export const outboundSchema =
    ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest$outboundSchema;
  /** @deprecated use `ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest$Outbound` instead. */
  export type Outbound =
    ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest$Outbound;
}

export function executionDetailsControllerGetExecutionDetailsForNotificationRequestToJSON(
  executionDetailsControllerGetExecutionDetailsForNotificationRequest:
    ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest,
): string {
  return JSON.stringify(
    ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest$outboundSchema
      .parse(
        executionDetailsControllerGetExecutionDetailsForNotificationRequest,
      ),
  );
}

export function executionDetailsControllerGetExecutionDetailsForNotificationRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'ExecutionDetailsControllerGetExecutionDetailsForNotificationRequest' from JSON`,
  );
}

/** @internal */
export const ExecutionDetailsControllerGetExecutionDetailsForNotificationResponse$inboundSchema:
  z.ZodType<
    ExecutionDetailsControllerGetExecutionDetailsForNotificationResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    Headers: z.record(z.array(z.string())),
    Result: z.array(components.ExecutionDetailsResponseDto$inboundSchema),
  }).transform((v) => {
    return remap$(v, {
      "Headers": "headers",
      "Result": "result",
    });
  });

/** @internal */
export type ExecutionDetailsControllerGetExecutionDetailsForNotificationResponse$Outbound =
  {
    Headers: { [k: string]: Array<string> };
    Result: Array<components.ExecutionDetailsResponseDto$Outbound>;
  };

/** @internal */
export const ExecutionDetailsControllerGetExecutionDetailsForNotificationResponse$outboundSchema:
  z.ZodType<
    ExecutionDetailsControllerGetExecutionDetailsForNotificationResponse$Outbound,
    z.ZodTypeDef,
    ExecutionDetailsControllerGetExecutionDetailsForNotificationResponse
  > = z.object({
    headers: z.record(z.array(z.string())),
    result: z.array(components.ExecutionDetailsResponseDto$outboundSchema),
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
export namespace ExecutionDetailsControllerGetExecutionDetailsForNotificationResponse$ {
  /** @deprecated use `ExecutionDetailsControllerGetExecutionDetailsForNotificationResponse$inboundSchema` instead. */
  export const inboundSchema =
    ExecutionDetailsControllerGetExecutionDetailsForNotificationResponse$inboundSchema;
  /** @deprecated use `ExecutionDetailsControllerGetExecutionDetailsForNotificationResponse$outboundSchema` instead. */
  export const outboundSchema =
    ExecutionDetailsControllerGetExecutionDetailsForNotificationResponse$outboundSchema;
  /** @deprecated use `ExecutionDetailsControllerGetExecutionDetailsForNotificationResponse$Outbound` instead. */
  export type Outbound =
    ExecutionDetailsControllerGetExecutionDetailsForNotificationResponse$Outbound;
}

export function executionDetailsControllerGetExecutionDetailsForNotificationResponseToJSON(
  executionDetailsControllerGetExecutionDetailsForNotificationResponse:
    ExecutionDetailsControllerGetExecutionDetailsForNotificationResponse,
): string {
  return JSON.stringify(
    ExecutionDetailsControllerGetExecutionDetailsForNotificationResponse$outboundSchema
      .parse(
        executionDetailsControllerGetExecutionDetailsForNotificationResponse,
      ),
  );
}

export function executionDetailsControllerGetExecutionDetailsForNotificationResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  ExecutionDetailsControllerGetExecutionDetailsForNotificationResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ExecutionDetailsControllerGetExecutionDetailsForNotificationResponse$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'ExecutionDetailsControllerGetExecutionDetailsForNotificationResponse' from JSON`,
  );
}
