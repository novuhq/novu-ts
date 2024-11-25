/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AddSubscribersRequestDto = {
  /**
   * List of subscriber identifiers that will be associated to the topic
   */
  subscribers: Array<string>;
};

/** @internal */
export const AddSubscribersRequestDto$inboundSchema: z.ZodType<
  AddSubscribersRequestDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  subscribers: z.array(z.string()),
});

/** @internal */
export type AddSubscribersRequestDto$Outbound = {
  subscribers: Array<string>;
};

/** @internal */
export const AddSubscribersRequestDto$outboundSchema: z.ZodType<
  AddSubscribersRequestDto$Outbound,
  z.ZodTypeDef,
  AddSubscribersRequestDto
> = z.object({
  subscribers: z.array(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddSubscribersRequestDto$ {
  /** @deprecated use `AddSubscribersRequestDto$inboundSchema` instead. */
  export const inboundSchema = AddSubscribersRequestDto$inboundSchema;
  /** @deprecated use `AddSubscribersRequestDto$outboundSchema` instead. */
  export const outboundSchema = AddSubscribersRequestDto$outboundSchema;
  /** @deprecated use `AddSubscribersRequestDto$Outbound` instead. */
  export type Outbound = AddSubscribersRequestDto$Outbound;
}

export function addSubscribersRequestDtoToJSON(
  addSubscribersRequestDto: AddSubscribersRequestDto,
): string {
  return JSON.stringify(
    AddSubscribersRequestDto$outboundSchema.parse(addSubscribersRequestDto),
  );
}

export function addSubscribersRequestDtoFromJSON(
  jsonString: string,
): SafeParseResult<AddSubscribersRequestDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AddSubscribersRequestDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AddSubscribersRequestDto' from JSON`,
  );
}
