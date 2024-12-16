/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  MessageTemplateDto,
  MessageTemplateDto$inboundSchema,
  MessageTemplateDto$Outbound,
  MessageTemplateDto$outboundSchema,
} from "./messagetemplatedto.js";
import {
  StepFilter,
  StepFilter$inboundSchema,
  StepFilter$Outbound,
  StepFilter$outboundSchema,
} from "./stepfilter.js";

export type ActivityNotificationStepResponseDto = {
  /**
   * Unique identifier of the step
   */
  id: string;
  /**
   * Whether the step is active or not
   */
  active: boolean;
  /**
   * Filter criteria for the step
   */
  filters: StepFilter;
  /**
   * Optional template for the step
   */
  template?: MessageTemplateDto | undefined;
};

/** @internal */
export const ActivityNotificationStepResponseDto$inboundSchema: z.ZodType<
  ActivityNotificationStepResponseDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  _id: z.string(),
  active: z.boolean(),
  filters: StepFilter$inboundSchema,
  template: MessageTemplateDto$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "_id": "id",
  });
});

/** @internal */
export type ActivityNotificationStepResponseDto$Outbound = {
  _id: string;
  active: boolean;
  filters: StepFilter$Outbound;
  template?: MessageTemplateDto$Outbound | undefined;
};

/** @internal */
export const ActivityNotificationStepResponseDto$outboundSchema: z.ZodType<
  ActivityNotificationStepResponseDto$Outbound,
  z.ZodTypeDef,
  ActivityNotificationStepResponseDto
> = z.object({
  id: z.string(),
  active: z.boolean(),
  filters: StepFilter$outboundSchema,
  template: MessageTemplateDto$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    id: "_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ActivityNotificationStepResponseDto$ {
  /** @deprecated use `ActivityNotificationStepResponseDto$inboundSchema` instead. */
  export const inboundSchema =
    ActivityNotificationStepResponseDto$inboundSchema;
  /** @deprecated use `ActivityNotificationStepResponseDto$outboundSchema` instead. */
  export const outboundSchema =
    ActivityNotificationStepResponseDto$outboundSchema;
  /** @deprecated use `ActivityNotificationStepResponseDto$Outbound` instead. */
  export type Outbound = ActivityNotificationStepResponseDto$Outbound;
}

export function activityNotificationStepResponseDtoToJSON(
  activityNotificationStepResponseDto: ActivityNotificationStepResponseDto,
): string {
  return JSON.stringify(
    ActivityNotificationStepResponseDto$outboundSchema.parse(
      activityNotificationStepResponseDto,
    ),
  );
}

export function activityNotificationStepResponseDtoFromJSON(
  jsonString: string,
): SafeParseResult<ActivityNotificationStepResponseDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ActivityNotificationStepResponseDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ActivityNotificationStepResponseDto' from JSON`,
  );
}
