/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const BackoffUnit = {
  Seconds: "seconds",
  Minutes: "minutes",
  Hours: "hours",
  Days: "days",
  Weeks: "weeks",
  Months: "months",
} as const;
export type BackoffUnit = ClosedEnum<typeof BackoffUnit>;

export const DigestRegularMetadataType = {
  Regular: "regular",
  Backoff: "backoff",
} as const;
export type DigestRegularMetadataType = ClosedEnum<
  typeof DigestRegularMetadataType
>;

export const DigestRegularMetadataUnit = {
  Seconds: "seconds",
  Minutes: "minutes",
  Hours: "hours",
  Days: "days",
  Weeks: "weeks",
  Months: "months",
} as const;
export type DigestRegularMetadataUnit = ClosedEnum<
  typeof DigestRegularMetadataUnit
>;

export type DigestRegularMetadata = {
  amount?: number | undefined;
  backoff?: boolean | undefined;
  backoffAmount?: number | undefined;
  backoffUnit?: BackoffUnit | undefined;
  digestKey?: string | undefined;
  type: DigestRegularMetadataType;
  unit?: DigestRegularMetadataUnit | undefined;
  updateMode?: boolean | undefined;
};

/** @internal */
export const BackoffUnit$inboundSchema: z.ZodNativeEnum<typeof BackoffUnit> = z
  .nativeEnum(BackoffUnit);

/** @internal */
export const BackoffUnit$outboundSchema: z.ZodNativeEnum<typeof BackoffUnit> =
  BackoffUnit$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BackoffUnit$ {
  /** @deprecated use `BackoffUnit$inboundSchema` instead. */
  export const inboundSchema = BackoffUnit$inboundSchema;
  /** @deprecated use `BackoffUnit$outboundSchema` instead. */
  export const outboundSchema = BackoffUnit$outboundSchema;
}

/** @internal */
export const DigestRegularMetadataType$inboundSchema: z.ZodNativeEnum<
  typeof DigestRegularMetadataType
> = z.nativeEnum(DigestRegularMetadataType);

/** @internal */
export const DigestRegularMetadataType$outboundSchema: z.ZodNativeEnum<
  typeof DigestRegularMetadataType
> = DigestRegularMetadataType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DigestRegularMetadataType$ {
  /** @deprecated use `DigestRegularMetadataType$inboundSchema` instead. */
  export const inboundSchema = DigestRegularMetadataType$inboundSchema;
  /** @deprecated use `DigestRegularMetadataType$outboundSchema` instead. */
  export const outboundSchema = DigestRegularMetadataType$outboundSchema;
}

/** @internal */
export const DigestRegularMetadataUnit$inboundSchema: z.ZodNativeEnum<
  typeof DigestRegularMetadataUnit
> = z.nativeEnum(DigestRegularMetadataUnit);

/** @internal */
export const DigestRegularMetadataUnit$outboundSchema: z.ZodNativeEnum<
  typeof DigestRegularMetadataUnit
> = DigestRegularMetadataUnit$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DigestRegularMetadataUnit$ {
  /** @deprecated use `DigestRegularMetadataUnit$inboundSchema` instead. */
  export const inboundSchema = DigestRegularMetadataUnit$inboundSchema;
  /** @deprecated use `DigestRegularMetadataUnit$outboundSchema` instead. */
  export const outboundSchema = DigestRegularMetadataUnit$outboundSchema;
}

/** @internal */
export const DigestRegularMetadata$inboundSchema: z.ZodType<
  DigestRegularMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.number().optional(),
  backoff: z.boolean().optional(),
  backoffAmount: z.number().optional(),
  backoffUnit: BackoffUnit$inboundSchema.optional(),
  digestKey: z.string().optional(),
  type: DigestRegularMetadataType$inboundSchema,
  unit: DigestRegularMetadataUnit$inboundSchema.optional(),
  updateMode: z.boolean().optional(),
});

/** @internal */
export type DigestRegularMetadata$Outbound = {
  amount?: number | undefined;
  backoff?: boolean | undefined;
  backoffAmount?: number | undefined;
  backoffUnit?: string | undefined;
  digestKey?: string | undefined;
  type: string;
  unit?: string | undefined;
  updateMode?: boolean | undefined;
};

/** @internal */
export const DigestRegularMetadata$outboundSchema: z.ZodType<
  DigestRegularMetadata$Outbound,
  z.ZodTypeDef,
  DigestRegularMetadata
> = z.object({
  amount: z.number().optional(),
  backoff: z.boolean().optional(),
  backoffAmount: z.number().optional(),
  backoffUnit: BackoffUnit$outboundSchema.optional(),
  digestKey: z.string().optional(),
  type: DigestRegularMetadataType$outboundSchema,
  unit: DigestRegularMetadataUnit$outboundSchema.optional(),
  updateMode: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DigestRegularMetadata$ {
  /** @deprecated use `DigestRegularMetadata$inboundSchema` instead. */
  export const inboundSchema = DigestRegularMetadata$inboundSchema;
  /** @deprecated use `DigestRegularMetadata$outboundSchema` instead. */
  export const outboundSchema = DigestRegularMetadata$outboundSchema;
  /** @deprecated use `DigestRegularMetadata$Outbound` instead. */
  export type Outbound = DigestRegularMetadata$Outbound;
}
