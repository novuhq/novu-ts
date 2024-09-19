/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type SubscriberPayloadDtoData = {};

export type SubscriberPayloadDto = {
  /**
   * An http url to the profile image of your subscriber
   */
  avatar?: string | undefined;
  channels?: Array<string> | undefined;
  data?: SubscriberPayloadDtoData | undefined;
  email?: string | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
  locale?: string | undefined;
  phone?: string | undefined;
  /**
   * The internal identifier you used to create this subscriber, usually correlates to the id the user in your systems
   */
  subscriberId: string;
};

/** @internal */
export const SubscriberPayloadDtoData$inboundSchema: z.ZodType<
  SubscriberPayloadDtoData,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type SubscriberPayloadDtoData$Outbound = {};

/** @internal */
export const SubscriberPayloadDtoData$outboundSchema: z.ZodType<
  SubscriberPayloadDtoData$Outbound,
  z.ZodTypeDef,
  SubscriberPayloadDtoData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscriberPayloadDtoData$ {
  /** @deprecated use `SubscriberPayloadDtoData$inboundSchema` instead. */
  export const inboundSchema = SubscriberPayloadDtoData$inboundSchema;
  /** @deprecated use `SubscriberPayloadDtoData$outboundSchema` instead. */
  export const outboundSchema = SubscriberPayloadDtoData$outboundSchema;
  /** @deprecated use `SubscriberPayloadDtoData$Outbound` instead. */
  export type Outbound = SubscriberPayloadDtoData$Outbound;
}

/** @internal */
export const SubscriberPayloadDto$inboundSchema: z.ZodType<
  SubscriberPayloadDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  avatar: z.string().optional(),
  channels: z.array(z.string()).optional(),
  data: z.lazy(() => SubscriberPayloadDtoData$inboundSchema).optional(),
  email: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  locale: z.string().optional(),
  phone: z.string().optional(),
  subscriberId: z.string(),
});

/** @internal */
export type SubscriberPayloadDto$Outbound = {
  avatar?: string | undefined;
  channels?: Array<string> | undefined;
  data?: SubscriberPayloadDtoData$Outbound | undefined;
  email?: string | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
  locale?: string | undefined;
  phone?: string | undefined;
  subscriberId: string;
};

/** @internal */
export const SubscriberPayloadDto$outboundSchema: z.ZodType<
  SubscriberPayloadDto$Outbound,
  z.ZodTypeDef,
  SubscriberPayloadDto
> = z.object({
  avatar: z.string().optional(),
  channels: z.array(z.string()).optional(),
  data: z.lazy(() => SubscriberPayloadDtoData$outboundSchema).optional(),
  email: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  locale: z.string().optional(),
  phone: z.string().optional(),
  subscriberId: z.string(),
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
