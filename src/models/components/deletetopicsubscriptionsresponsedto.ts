/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  MetaDto,
  MetaDto$inboundSchema,
  MetaDto$Outbound,
  MetaDto$outboundSchema,
} from "./metadto.js";
import {
  SubscriptionDto,
  SubscriptionDto$inboundSchema,
  SubscriptionDto$Outbound,
  SubscriptionDto$outboundSchema,
} from "./subscriptiondto.js";
import {
  SubscriptionsDeleteErrorDto,
  SubscriptionsDeleteErrorDto$inboundSchema,
  SubscriptionsDeleteErrorDto$Outbound,
  SubscriptionsDeleteErrorDto$outboundSchema,
} from "./subscriptionsdeleteerrordto.js";

export type DeleteTopicSubscriptionsResponseDto = {
  /**
   * The list of successfully deleted subscriptions
   */
  data: Array<SubscriptionDto>;
  /**
   * Metadata about the operation
   */
  meta: MetaDto;
  /**
   * The list of errors for failed deletion attempts
   */
  errors?: Array<SubscriptionsDeleteErrorDto> | undefined;
};

/** @internal */
export const DeleteTopicSubscriptionsResponseDto$inboundSchema: z.ZodType<
  DeleteTopicSubscriptionsResponseDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(SubscriptionDto$inboundSchema),
  meta: MetaDto$inboundSchema,
  errors: z.array(SubscriptionsDeleteErrorDto$inboundSchema).optional(),
});

/** @internal */
export type DeleteTopicSubscriptionsResponseDto$Outbound = {
  data: Array<SubscriptionDto$Outbound>;
  meta: MetaDto$Outbound;
  errors?: Array<SubscriptionsDeleteErrorDto$Outbound> | undefined;
};

/** @internal */
export const DeleteTopicSubscriptionsResponseDto$outboundSchema: z.ZodType<
  DeleteTopicSubscriptionsResponseDto$Outbound,
  z.ZodTypeDef,
  DeleteTopicSubscriptionsResponseDto
> = z.object({
  data: z.array(SubscriptionDto$outboundSchema),
  meta: MetaDto$outboundSchema,
  errors: z.array(SubscriptionsDeleteErrorDto$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteTopicSubscriptionsResponseDto$ {
  /** @deprecated use `DeleteTopicSubscriptionsResponseDto$inboundSchema` instead. */
  export const inboundSchema =
    DeleteTopicSubscriptionsResponseDto$inboundSchema;
  /** @deprecated use `DeleteTopicSubscriptionsResponseDto$outboundSchema` instead. */
  export const outboundSchema =
    DeleteTopicSubscriptionsResponseDto$outboundSchema;
  /** @deprecated use `DeleteTopicSubscriptionsResponseDto$Outbound` instead. */
  export type Outbound = DeleteTopicSubscriptionsResponseDto$Outbound;
}

export function deleteTopicSubscriptionsResponseDtoToJSON(
  deleteTopicSubscriptionsResponseDto: DeleteTopicSubscriptionsResponseDto,
): string {
  return JSON.stringify(
    DeleteTopicSubscriptionsResponseDto$outboundSchema.parse(
      deleteTopicSubscriptionsResponseDto,
    ),
  );
}

export function deleteTopicSubscriptionsResponseDtoFromJSON(
  jsonString: string,
): SafeParseResult<DeleteTopicSubscriptionsResponseDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteTopicSubscriptionsResponseDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteTopicSubscriptionsResponseDto' from JSON`,
  );
}
