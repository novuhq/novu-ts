/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type EventsControllerBroadcastEventToAllResponse = {
  headers: { [k: string]: Array<string> };
  result: components.TriggerEventResponseDto;
};

/** @internal */
export const EventsControllerBroadcastEventToAllResponse$inboundSchema:
  z.ZodType<
    EventsControllerBroadcastEventToAllResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    Headers: z.record(z.array(z.string())),
    Result: components.TriggerEventResponseDto$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "Headers": "headers",
      "Result": "result",
    });
  });

/** @internal */
export type EventsControllerBroadcastEventToAllResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.TriggerEventResponseDto$Outbound;
};

/** @internal */
export const EventsControllerBroadcastEventToAllResponse$outboundSchema:
  z.ZodType<
    EventsControllerBroadcastEventToAllResponse$Outbound,
    z.ZodTypeDef,
    EventsControllerBroadcastEventToAllResponse
  > = z.object({
    headers: z.record(z.array(z.string())),
    result: components.TriggerEventResponseDto$outboundSchema,
  }).transform((v) => {
    return remap$(v, {
      headers: "Headers",
      result: "Result",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventsControllerBroadcastEventToAllResponse$ {
  /** @deprecated use `EventsControllerBroadcastEventToAllResponse$inboundSchema` instead. */
  export const inboundSchema =
    EventsControllerBroadcastEventToAllResponse$inboundSchema;
  /** @deprecated use `EventsControllerBroadcastEventToAllResponse$outboundSchema` instead. */
  export const outboundSchema =
    EventsControllerBroadcastEventToAllResponse$outboundSchema;
  /** @deprecated use `EventsControllerBroadcastEventToAllResponse$Outbound` instead. */
  export type Outbound = EventsControllerBroadcastEventToAllResponse$Outbound;
}

export function eventsControllerBroadcastEventToAllResponseToJSON(
  eventsControllerBroadcastEventToAllResponse:
    EventsControllerBroadcastEventToAllResponse,
): string {
  return JSON.stringify(
    EventsControllerBroadcastEventToAllResponse$outboundSchema.parse(
      eventsControllerBroadcastEventToAllResponse,
    ),
  );
}

export function eventsControllerBroadcastEventToAllResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  EventsControllerBroadcastEventToAllResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      EventsControllerBroadcastEventToAllResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'EventsControllerBroadcastEventToAllResponse' from JSON`,
  );
}
