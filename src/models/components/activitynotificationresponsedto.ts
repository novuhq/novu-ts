/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ActivityNotificationSubscriberResponseDto,
  ActivityNotificationSubscriberResponseDto$inboundSchema,
  ActivityNotificationSubscriberResponseDto$Outbound,
  ActivityNotificationSubscriberResponseDto$outboundSchema,
} from "./activitynotificationsubscriberresponsedto.js";
import {
  ActivityNotificationTemplateResponseDto,
  ActivityNotificationTemplateResponseDto$inboundSchema,
  ActivityNotificationTemplateResponseDto$Outbound,
  ActivityNotificationTemplateResponseDto$outboundSchema,
} from "./activitynotificationtemplateresponsedto.js";

export const Channels = {
  InApp: "in_app",
  Email: "email",
  Sms: "sms",
  Chat: "chat",
  Push: "push",
  Digest: "digest",
  Trigger: "trigger",
  Delay: "delay",
  Custom: "custom",
} as const;
export type Channels = ClosedEnum<typeof Channels>;

export type ActivityNotificationResponseDto = {
  id?: string | undefined;
  environmentId: string;
  organizationId: string;
  transactionId: string;
  createdAt?: string | undefined;
  channels?: Channels | undefined;
  subscriber?: ActivityNotificationSubscriberResponseDto | undefined;
  template?: ActivityNotificationTemplateResponseDto | undefined;
  jobs?: Array<string> | undefined;
};

/** @internal */
export const Channels$inboundSchema: z.ZodNativeEnum<typeof Channels> = z
  .nativeEnum(Channels);

/** @internal */
export const Channels$outboundSchema: z.ZodNativeEnum<typeof Channels> =
  Channels$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Channels$ {
  /** @deprecated use `Channels$inboundSchema` instead. */
  export const inboundSchema = Channels$inboundSchema;
  /** @deprecated use `Channels$outboundSchema` instead. */
  export const outboundSchema = Channels$outboundSchema;
}

/** @internal */
export const ActivityNotificationResponseDto$inboundSchema: z.ZodType<
  ActivityNotificationResponseDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  _id: z.string().optional(),
  _environmentId: z.string(),
  _organizationId: z.string(),
  transactionId: z.string(),
  createdAt: z.string().optional(),
  channels: Channels$inboundSchema.optional(),
  subscriber: ActivityNotificationSubscriberResponseDto$inboundSchema
    .optional(),
  template: ActivityNotificationTemplateResponseDto$inboundSchema.optional(),
  jobs: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "_id": "id",
    "_environmentId": "environmentId",
    "_organizationId": "organizationId",
  });
});

/** @internal */
export type ActivityNotificationResponseDto$Outbound = {
  _id?: string | undefined;
  _environmentId: string;
  _organizationId: string;
  transactionId: string;
  createdAt?: string | undefined;
  channels?: string | undefined;
  subscriber?: ActivityNotificationSubscriberResponseDto$Outbound | undefined;
  template?: ActivityNotificationTemplateResponseDto$Outbound | undefined;
  jobs?: Array<string> | undefined;
};

/** @internal */
export const ActivityNotificationResponseDto$outboundSchema: z.ZodType<
  ActivityNotificationResponseDto$Outbound,
  z.ZodTypeDef,
  ActivityNotificationResponseDto
> = z.object({
  id: z.string().optional(),
  environmentId: z.string(),
  organizationId: z.string(),
  transactionId: z.string(),
  createdAt: z.string().optional(),
  channels: Channels$outboundSchema.optional(),
  subscriber: ActivityNotificationSubscriberResponseDto$outboundSchema
    .optional(),
  template: ActivityNotificationTemplateResponseDto$outboundSchema.optional(),
  jobs: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    id: "_id",
    environmentId: "_environmentId",
    organizationId: "_organizationId",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ActivityNotificationResponseDto$ {
  /** @deprecated use `ActivityNotificationResponseDto$inboundSchema` instead. */
  export const inboundSchema = ActivityNotificationResponseDto$inboundSchema;
  /** @deprecated use `ActivityNotificationResponseDto$outboundSchema` instead. */
  export const outboundSchema = ActivityNotificationResponseDto$outboundSchema;
  /** @deprecated use `ActivityNotificationResponseDto$Outbound` instead. */
  export type Outbound = ActivityNotificationResponseDto$Outbound;
}

export function activityNotificationResponseDtoToJSON(
  activityNotificationResponseDto: ActivityNotificationResponseDto,
): string {
  return JSON.stringify(
    ActivityNotificationResponseDto$outboundSchema.parse(
      activityNotificationResponseDto,
    ),
  );
}

export function activityNotificationResponseDtoFromJSON(
  jsonString: string,
): SafeParseResult<ActivityNotificationResponseDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ActivityNotificationResponseDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ActivityNotificationResponseDto' from JSON`,
  );
}
