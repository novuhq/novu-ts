/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type FailedAssignmentsDto = {
  /**
   * List of subscriber IDs that were not found
   */
  notFound?: Array<string> | undefined;
};

/** @internal */
export const FailedAssignmentsDto$inboundSchema: z.ZodType<
  FailedAssignmentsDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  notFound: z.array(z.string()).optional(),
});

/** @internal */
export type FailedAssignmentsDto$Outbound = {
  notFound?: Array<string> | undefined;
};

/** @internal */
export const FailedAssignmentsDto$outboundSchema: z.ZodType<
  FailedAssignmentsDto$Outbound,
  z.ZodTypeDef,
  FailedAssignmentsDto
> = z.object({
  notFound: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FailedAssignmentsDto$ {
  /** @deprecated use `FailedAssignmentsDto$inboundSchema` instead. */
  export const inboundSchema = FailedAssignmentsDto$inboundSchema;
  /** @deprecated use `FailedAssignmentsDto$outboundSchema` instead. */
  export const outboundSchema = FailedAssignmentsDto$outboundSchema;
  /** @deprecated use `FailedAssignmentsDto$Outbound` instead. */
  export type Outbound = FailedAssignmentsDto$Outbound;
}

export function failedAssignmentsDtoToJSON(
  failedAssignmentsDto: FailedAssignmentsDto,
): string {
  return JSON.stringify(
    FailedAssignmentsDto$outboundSchema.parse(failedAssignmentsDto),
  );
}

export function failedAssignmentsDtoFromJSON(
  jsonString: string,
): SafeParseResult<FailedAssignmentsDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FailedAssignmentsDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FailedAssignmentsDto' from JSON`,
  );
}
