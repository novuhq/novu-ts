/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  TriggerEventRequestDto,
  TriggerEventRequestDto$inboundSchema,
  TriggerEventRequestDto$Outbound,
  TriggerEventRequestDto$outboundSchema,
} from "./triggereventrequestdto.js";

export type BulkTriggerEventDto = {
  events: Array<TriggerEventRequestDto>;
};

/** @internal */
export const BulkTriggerEventDto$inboundSchema: z.ZodType<
  BulkTriggerEventDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  events: z.array(TriggerEventRequestDto$inboundSchema),
});

/** @internal */
export type BulkTriggerEventDto$Outbound = {
  events: Array<TriggerEventRequestDto$Outbound>;
};

/** @internal */
export const BulkTriggerEventDto$outboundSchema: z.ZodType<
  BulkTriggerEventDto$Outbound,
  z.ZodTypeDef,
  BulkTriggerEventDto
> = z.object({
  events: z.array(TriggerEventRequestDto$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BulkTriggerEventDto$ {
  /** @deprecated use `BulkTriggerEventDto$inboundSchema` instead. */
  export const inboundSchema = BulkTriggerEventDto$inboundSchema;
  /** @deprecated use `BulkTriggerEventDto$outboundSchema` instead. */
  export const outboundSchema = BulkTriggerEventDto$outboundSchema;
  /** @deprecated use `BulkTriggerEventDto$Outbound` instead. */
  export type Outbound = BulkTriggerEventDto$Outbound;
}

export function bulkTriggerEventDtoToJSON(
  bulkTriggerEventDto: BulkTriggerEventDto,
): string {
  return JSON.stringify(
    BulkTriggerEventDto$outboundSchema.parse(bulkTriggerEventDto),
  );
}

export function bulkTriggerEventDtoFromJSON(
  jsonString: string,
): SafeParseResult<BulkTriggerEventDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BulkTriggerEventDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BulkTriggerEventDto' from JSON`,
  );
}
