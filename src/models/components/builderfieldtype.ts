/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const BuilderFieldType = {
  Boolean: "BOOLEAN",
  Text: "TEXT",
  Date: "DATE",
  Number: "NUMBER",
  Statement: "STATEMENT",
  List: "LIST",
  MultiList: "MULTI_LIST",
  Group: "GROUP",
} as const;
export type BuilderFieldType = ClosedEnum<typeof BuilderFieldType>;

/** @internal */
export const BuilderFieldType$inboundSchema: z.ZodNativeEnum<
  typeof BuilderFieldType
> = z.nativeEnum(BuilderFieldType);

/** @internal */
export const BuilderFieldType$outboundSchema: z.ZodNativeEnum<
  typeof BuilderFieldType
> = BuilderFieldType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BuilderFieldType$ {
  /** @deprecated use `BuilderFieldType$inboundSchema` instead. */
  export const inboundSchema = BuilderFieldType$inboundSchema;
  /** @deprecated use `BuilderFieldType$outboundSchema` instead. */
  export const outboundSchema = BuilderFieldType$outboundSchema;
}
