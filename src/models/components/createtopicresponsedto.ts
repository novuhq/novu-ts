/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateTopicResponseDto = {
  /**
   * The unique identifier for the Topic created.
   */
  id?: string | undefined;
  /**
   * User defined custom key and provided by the user that will be an unique identifier for the Topic created.
   */
  key: string;
};

/** @internal */
export const CreateTopicResponseDto$inboundSchema: z.ZodType<
  CreateTopicResponseDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  _id: z.string().optional(),
  key: z.string(),
}).transform((v) => {
  return remap$(v, {
    "_id": "id",
  });
});

/** @internal */
export type CreateTopicResponseDto$Outbound = {
  _id?: string | undefined;
  key: string;
};

/** @internal */
export const CreateTopicResponseDto$outboundSchema: z.ZodType<
  CreateTopicResponseDto$Outbound,
  z.ZodTypeDef,
  CreateTopicResponseDto
> = z.object({
  id: z.string().optional(),
  key: z.string(),
}).transform((v) => {
  return remap$(v, {
    id: "_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTopicResponseDto$ {
  /** @deprecated use `CreateTopicResponseDto$inboundSchema` instead. */
  export const inboundSchema = CreateTopicResponseDto$inboundSchema;
  /** @deprecated use `CreateTopicResponseDto$outboundSchema` instead. */
  export const outboundSchema = CreateTopicResponseDto$outboundSchema;
  /** @deprecated use `CreateTopicResponseDto$Outbound` instead. */
  export type Outbound = CreateTopicResponseDto$Outbound;
}

export function createTopicResponseDtoToJSON(
  createTopicResponseDto: CreateTopicResponseDto,
): string {
  return JSON.stringify(
    CreateTopicResponseDto$outboundSchema.parse(createTopicResponseDto),
  );
}

export function createTopicResponseDtoFromJSON(
  jsonString: string,
): SafeParseResult<CreateTopicResponseDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTopicResponseDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTopicResponseDto' from JSON`,
  );
}
