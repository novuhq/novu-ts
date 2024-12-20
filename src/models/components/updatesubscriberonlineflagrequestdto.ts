/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateSubscriberOnlineFlagRequestDto = {
  isOnline: boolean;
};

/** @internal */
export const UpdateSubscriberOnlineFlagRequestDto$inboundSchema: z.ZodType<
  UpdateSubscriberOnlineFlagRequestDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  isOnline: z.boolean(),
});

/** @internal */
export type UpdateSubscriberOnlineFlagRequestDto$Outbound = {
  isOnline: boolean;
};

/** @internal */
export const UpdateSubscriberOnlineFlagRequestDto$outboundSchema: z.ZodType<
  UpdateSubscriberOnlineFlagRequestDto$Outbound,
  z.ZodTypeDef,
  UpdateSubscriberOnlineFlagRequestDto
> = z.object({
  isOnline: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateSubscriberOnlineFlagRequestDto$ {
  /** @deprecated use `UpdateSubscriberOnlineFlagRequestDto$inboundSchema` instead. */
  export const inboundSchema =
    UpdateSubscriberOnlineFlagRequestDto$inboundSchema;
  /** @deprecated use `UpdateSubscriberOnlineFlagRequestDto$outboundSchema` instead. */
  export const outboundSchema =
    UpdateSubscriberOnlineFlagRequestDto$outboundSchema;
  /** @deprecated use `UpdateSubscriberOnlineFlagRequestDto$Outbound` instead. */
  export type Outbound = UpdateSubscriberOnlineFlagRequestDto$Outbound;
}

export function updateSubscriberOnlineFlagRequestDtoToJSON(
  updateSubscriberOnlineFlagRequestDto: UpdateSubscriberOnlineFlagRequestDto,
): string {
  return JSON.stringify(
    UpdateSubscriberOnlineFlagRequestDto$outboundSchema.parse(
      updateSubscriberOnlineFlagRequestDto,
    ),
  );
}

export function updateSubscriberOnlineFlagRequestDtoFromJSON(
  jsonString: string,
): SafeParseResult<UpdateSubscriberOnlineFlagRequestDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      UpdateSubscriberOnlineFlagRequestDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateSubscriberOnlineFlagRequestDto' from JSON`,
  );
}
