/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Optional feed identifier or array of feed identifiers
 */
export type FeedIdentifier = string | Array<string>;

/**
 * Mark all subscriber messages as read, unread, seen or unseen
 */
export const MarkAllMessageAsRequestDtoMarkAs = {
  Read: "read",
  Seen: "seen",
  Unread: "unread",
  Unseen: "unseen",
} as const;
/**
 * Mark all subscriber messages as read, unread, seen or unseen
 */
export type MarkAllMessageAsRequestDtoMarkAs = ClosedEnum<
  typeof MarkAllMessageAsRequestDtoMarkAs
>;

export type MarkAllMessageAsRequestDto = {
  /**
   * Optional feed identifier or array of feed identifiers
   */
  feedIdentifier?: string | Array<string> | undefined;
  /**
   * Mark all subscriber messages as read, unread, seen or unseen
   */
  markAs: MarkAllMessageAsRequestDtoMarkAs;
};

/** @internal */
export const FeedIdentifier$inboundSchema: z.ZodType<
  FeedIdentifier,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type FeedIdentifier$Outbound = string | Array<string>;

/** @internal */
export const FeedIdentifier$outboundSchema: z.ZodType<
  FeedIdentifier$Outbound,
  z.ZodTypeDef,
  FeedIdentifier
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FeedIdentifier$ {
  /** @deprecated use `FeedIdentifier$inboundSchema` instead. */
  export const inboundSchema = FeedIdentifier$inboundSchema;
  /** @deprecated use `FeedIdentifier$outboundSchema` instead. */
  export const outboundSchema = FeedIdentifier$outboundSchema;
  /** @deprecated use `FeedIdentifier$Outbound` instead. */
  export type Outbound = FeedIdentifier$Outbound;
}

export function feedIdentifierToJSON(feedIdentifier: FeedIdentifier): string {
  return JSON.stringify(FeedIdentifier$outboundSchema.parse(feedIdentifier));
}

export function feedIdentifierFromJSON(
  jsonString: string,
): SafeParseResult<FeedIdentifier, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FeedIdentifier$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FeedIdentifier' from JSON`,
  );
}

/** @internal */
export const MarkAllMessageAsRequestDtoMarkAs$inboundSchema: z.ZodNativeEnum<
  typeof MarkAllMessageAsRequestDtoMarkAs
> = z.nativeEnum(MarkAllMessageAsRequestDtoMarkAs);

/** @internal */
export const MarkAllMessageAsRequestDtoMarkAs$outboundSchema: z.ZodNativeEnum<
  typeof MarkAllMessageAsRequestDtoMarkAs
> = MarkAllMessageAsRequestDtoMarkAs$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MarkAllMessageAsRequestDtoMarkAs$ {
  /** @deprecated use `MarkAllMessageAsRequestDtoMarkAs$inboundSchema` instead. */
  export const inboundSchema = MarkAllMessageAsRequestDtoMarkAs$inboundSchema;
  /** @deprecated use `MarkAllMessageAsRequestDtoMarkAs$outboundSchema` instead. */
  export const outboundSchema = MarkAllMessageAsRequestDtoMarkAs$outboundSchema;
}

/** @internal */
export const MarkAllMessageAsRequestDto$inboundSchema: z.ZodType<
  MarkAllMessageAsRequestDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  feedIdentifier: z.union([z.string(), z.array(z.string())]).optional(),
  markAs: MarkAllMessageAsRequestDtoMarkAs$inboundSchema,
});

/** @internal */
export type MarkAllMessageAsRequestDto$Outbound = {
  feedIdentifier?: string | Array<string> | undefined;
  markAs: string;
};

/** @internal */
export const MarkAllMessageAsRequestDto$outboundSchema: z.ZodType<
  MarkAllMessageAsRequestDto$Outbound,
  z.ZodTypeDef,
  MarkAllMessageAsRequestDto
> = z.object({
  feedIdentifier: z.union([z.string(), z.array(z.string())]).optional(),
  markAs: MarkAllMessageAsRequestDtoMarkAs$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MarkAllMessageAsRequestDto$ {
  /** @deprecated use `MarkAllMessageAsRequestDto$inboundSchema` instead. */
  export const inboundSchema = MarkAllMessageAsRequestDto$inboundSchema;
  /** @deprecated use `MarkAllMessageAsRequestDto$outboundSchema` instead. */
  export const outboundSchema = MarkAllMessageAsRequestDto$outboundSchema;
  /** @deprecated use `MarkAllMessageAsRequestDto$Outbound` instead. */
  export type Outbound = MarkAllMessageAsRequestDto$Outbound;
}

export function markAllMessageAsRequestDtoToJSON(
  markAllMessageAsRequestDto: MarkAllMessageAsRequestDto,
): string {
  return JSON.stringify(
    MarkAllMessageAsRequestDto$outboundSchema.parse(markAllMessageAsRequestDto),
  );
}

export function markAllMessageAsRequestDtoFromJSON(
  jsonString: string,
): SafeParseResult<MarkAllMessageAsRequestDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MarkAllMessageAsRequestDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MarkAllMessageAsRequestDto' from JSON`,
  );
}
