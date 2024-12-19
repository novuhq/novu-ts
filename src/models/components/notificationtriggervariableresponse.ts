/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The value of the variable
 */
export type Value = {};

/**
 * The type of the variable
 */
export const NotificationTriggerVariableResponseType = {
  String: "String",
  Array: "Array",
  Boolean: "Boolean",
} as const;
/**
 * The type of the variable
 */
export type NotificationTriggerVariableResponseType = ClosedEnum<
  typeof NotificationTriggerVariableResponseType
>;

export type NotificationTriggerVariableResponse = {
  /**
   * The name of the variable
   */
  name: string;
  /**
   * The value of the variable
   */
  value?: Value | undefined;
  /**
   * The type of the variable
   */
  type?: NotificationTriggerVariableResponseType | undefined;
};

/** @internal */
export const Value$inboundSchema: z.ZodType<Value, z.ZodTypeDef, unknown> = z
  .object({});

/** @internal */
export type Value$Outbound = {};

/** @internal */
export const Value$outboundSchema: z.ZodType<
  Value$Outbound,
  z.ZodTypeDef,
  Value
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Value$ {
  /** @deprecated use `Value$inboundSchema` instead. */
  export const inboundSchema = Value$inboundSchema;
  /** @deprecated use `Value$outboundSchema` instead. */
  export const outboundSchema = Value$outboundSchema;
  /** @deprecated use `Value$Outbound` instead. */
  export type Outbound = Value$Outbound;
}

export function valueToJSON(value: Value): string {
  return JSON.stringify(Value$outboundSchema.parse(value));
}

export function valueFromJSON(
  jsonString: string,
): SafeParseResult<Value, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Value$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Value' from JSON`,
  );
}

/** @internal */
export const NotificationTriggerVariableResponseType$inboundSchema:
  z.ZodNativeEnum<typeof NotificationTriggerVariableResponseType> = z
    .nativeEnum(NotificationTriggerVariableResponseType);

/** @internal */
export const NotificationTriggerVariableResponseType$outboundSchema:
  z.ZodNativeEnum<typeof NotificationTriggerVariableResponseType> =
    NotificationTriggerVariableResponseType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotificationTriggerVariableResponseType$ {
  /** @deprecated use `NotificationTriggerVariableResponseType$inboundSchema` instead. */
  export const inboundSchema =
    NotificationTriggerVariableResponseType$inboundSchema;
  /** @deprecated use `NotificationTriggerVariableResponseType$outboundSchema` instead. */
  export const outboundSchema =
    NotificationTriggerVariableResponseType$outboundSchema;
}

/** @internal */
export const NotificationTriggerVariableResponse$inboundSchema: z.ZodType<
  NotificationTriggerVariableResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  value: z.lazy(() => Value$inboundSchema).optional(),
  type: NotificationTriggerVariableResponseType$inboundSchema.optional(),
});

/** @internal */
export type NotificationTriggerVariableResponse$Outbound = {
  name: string;
  value?: Value$Outbound | undefined;
  type?: string | undefined;
};

/** @internal */
export const NotificationTriggerVariableResponse$outboundSchema: z.ZodType<
  NotificationTriggerVariableResponse$Outbound,
  z.ZodTypeDef,
  NotificationTriggerVariableResponse
> = z.object({
  name: z.string(),
  value: z.lazy(() => Value$outboundSchema).optional(),
  type: NotificationTriggerVariableResponseType$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotificationTriggerVariableResponse$ {
  /** @deprecated use `NotificationTriggerVariableResponse$inboundSchema` instead. */
  export const inboundSchema =
    NotificationTriggerVariableResponse$inboundSchema;
  /** @deprecated use `NotificationTriggerVariableResponse$outboundSchema` instead. */
  export const outboundSchema =
    NotificationTriggerVariableResponse$outboundSchema;
  /** @deprecated use `NotificationTriggerVariableResponse$Outbound` instead. */
  export type Outbound = NotificationTriggerVariableResponse$Outbound;
}

export function notificationTriggerVariableResponseToJSON(
  notificationTriggerVariableResponse: NotificationTriggerVariableResponse,
): string {
  return JSON.stringify(
    NotificationTriggerVariableResponse$outboundSchema.parse(
      notificationTriggerVariableResponse,
    ),
  );
}

export function notificationTriggerVariableResponseFromJSON(
  jsonString: string,
): SafeParseResult<NotificationTriggerVariableResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      NotificationTriggerVariableResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NotificationTriggerVariableResponse' from JSON`,
  );
}
