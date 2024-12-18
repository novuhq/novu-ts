/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const TextAlign = {
  Center: "center",
  Left: "left",
  Right: "right",
} as const;
export type TextAlign = ClosedEnum<typeof TextAlign>;

export type EmailBlockStyles = {
  textAlign: TextAlign;
};

/** @internal */
export const TextAlign$inboundSchema: z.ZodNativeEnum<typeof TextAlign> = z
  .nativeEnum(TextAlign);

/** @internal */
export const TextAlign$outboundSchema: z.ZodNativeEnum<typeof TextAlign> =
  TextAlign$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TextAlign$ {
  /** @deprecated use `TextAlign$inboundSchema` instead. */
  export const inboundSchema = TextAlign$inboundSchema;
  /** @deprecated use `TextAlign$outboundSchema` instead. */
  export const outboundSchema = TextAlign$outboundSchema;
}

/** @internal */
export const EmailBlockStyles$inboundSchema: z.ZodType<
  EmailBlockStyles,
  z.ZodTypeDef,
  unknown
> = z.object({
  textAlign: TextAlign$inboundSchema,
});

/** @internal */
export type EmailBlockStyles$Outbound = {
  textAlign: string;
};

/** @internal */
export const EmailBlockStyles$outboundSchema: z.ZodType<
  EmailBlockStyles$Outbound,
  z.ZodTypeDef,
  EmailBlockStyles
> = z.object({
  textAlign: TextAlign$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmailBlockStyles$ {
  /** @deprecated use `EmailBlockStyles$inboundSchema` instead. */
  export const inboundSchema = EmailBlockStyles$inboundSchema;
  /** @deprecated use `EmailBlockStyles$outboundSchema` instead. */
  export const outboundSchema = EmailBlockStyles$outboundSchema;
  /** @deprecated use `EmailBlockStyles$Outbound` instead. */
  export type Outbound = EmailBlockStyles$Outbound;
}

export function emailBlockStylesToJSON(
  emailBlockStyles: EmailBlockStyles,
): string {
  return JSON.stringify(
    EmailBlockStyles$outboundSchema.parse(emailBlockStyles),
  );
}

export function emailBlockStylesFromJSON(
  jsonString: string,
): SafeParseResult<EmailBlockStyles, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EmailBlockStyles$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EmailBlockStyles' from JSON`,
  );
}
