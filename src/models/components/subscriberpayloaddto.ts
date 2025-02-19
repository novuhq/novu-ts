/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  SubscriberChannelDto,
  SubscriberChannelDto$inboundSchema,
  SubscriberChannelDto$Outbound,
  SubscriberChannelDto$outboundSchema,
} from "./subscriberchanneldto.js";

export type Data = string | Array<string> | boolean | number;

export type SubscriberPayloadDto = {
  /**
   * The internal identifier you used to create this subscriber, usually correlates to the id the user in your systems
   */
  subscriberId: string;
  /**
   * The email address of the subscriber.
   */
  email?: string | undefined;
  /**
   * The first name of the subscriber.
   */
  firstName?: string | undefined;
  /**
   * The last name of the subscriber.
   */
  lastName?: string | undefined;
  /**
   * The phone number of the subscriber.
   */
  phone?: string | undefined;
  /**
   * An HTTP URL to the profile image of your subscriber.
   */
  avatar?: string | undefined;
  /**
   * The locale of the subscriber.
   */
  locale?: string | undefined;
  /**
   * An optional payload object that can contain any properties.
   */
  data?: { [k: string]: string | Array<string> | boolean | number } | undefined;
  /**
   * An optional array of subscriber channels.
   */
  channels?: Array<SubscriberChannelDto> | undefined;
  /**
   * The timezone of the subscriber.
   */
  timezone?: string | undefined;
};

/** @internal */
export const Data$inboundSchema: z.ZodType<Data, z.ZodTypeDef, unknown> = z
  .union([z.string(), z.array(z.string()), z.boolean(), z.number()]);

/** @internal */
export type Data$Outbound = string | Array<string> | boolean | number;

/** @internal */
export const Data$outboundSchema: z.ZodType<Data$Outbound, z.ZodTypeDef, Data> =
  z.union([z.string(), z.array(z.string()), z.boolean(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Data$ {
  /** @deprecated use `Data$inboundSchema` instead. */
  export const inboundSchema = Data$inboundSchema;
  /** @deprecated use `Data$outboundSchema` instead. */
  export const outboundSchema = Data$outboundSchema;
  /** @deprecated use `Data$Outbound` instead. */
  export type Outbound = Data$Outbound;
}

export function dataToJSON(data: Data): string {
  return JSON.stringify(Data$outboundSchema.parse(data));
}

export function dataFromJSON(
  jsonString: string,
): SafeParseResult<Data, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Data$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Data' from JSON`,
  );
}

/** @internal */
export const SubscriberPayloadDto$inboundSchema: z.ZodType<
  SubscriberPayloadDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  subscriberId: z.string(),
  email: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  phone: z.string().optional(),
  avatar: z.string().optional(),
  locale: z.string().optional(),
  data: z.record(
    z.union([z.string(), z.array(z.string()), z.boolean(), z.number()]),
  ).optional(),
  channels: z.array(SubscriberChannelDto$inboundSchema).optional(),
  timezone: z.string().optional(),
});

/** @internal */
export type SubscriberPayloadDto$Outbound = {
  subscriberId: string;
  email?: string | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
  phone?: string | undefined;
  avatar?: string | undefined;
  locale?: string | undefined;
  data?: { [k: string]: string | Array<string> | boolean | number } | undefined;
  channels?: Array<SubscriberChannelDto$Outbound> | undefined;
  timezone?: string | undefined;
};

/** @internal */
export const SubscriberPayloadDto$outboundSchema: z.ZodType<
  SubscriberPayloadDto$Outbound,
  z.ZodTypeDef,
  SubscriberPayloadDto
> = z.object({
  subscriberId: z.string(),
  email: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  phone: z.string().optional(),
  avatar: z.string().optional(),
  locale: z.string().optional(),
  data: z.record(
    z.union([z.string(), z.array(z.string()), z.boolean(), z.number()]),
  ).optional(),
  channels: z.array(SubscriberChannelDto$outboundSchema).optional(),
  timezone: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscriberPayloadDto$ {
  /** @deprecated use `SubscriberPayloadDto$inboundSchema` instead. */
  export const inboundSchema = SubscriberPayloadDto$inboundSchema;
  /** @deprecated use `SubscriberPayloadDto$outboundSchema` instead. */
  export const outboundSchema = SubscriberPayloadDto$outboundSchema;
  /** @deprecated use `SubscriberPayloadDto$Outbound` instead. */
  export type Outbound = SubscriberPayloadDto$Outbound;
}

export function subscriberPayloadDtoToJSON(
  subscriberPayloadDto: SubscriberPayloadDto,
): string {
  return JSON.stringify(
    SubscriberPayloadDto$outboundSchema.parse(subscriberPayloadDto),
  );
}

export function subscriberPayloadDtoFromJSON(
  jsonString: string,
): SafeParseResult<SubscriberPayloadDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SubscriberPayloadDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SubscriberPayloadDto' from JSON`,
  );
}
