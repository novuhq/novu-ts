/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types";
import * as z from "zod";

/**
 * The status enum for the performed action
 */
export const DeleteNotificationGroupResponseDtoStatus = {
    Deleted: "deleted",
} as const;
/**
 * The status enum for the performed action
 */
export type DeleteNotificationGroupResponseDtoStatus = ClosedEnum<
    typeof DeleteNotificationGroupResponseDtoStatus
>;

export type DeleteNotificationGroupResponseDto = {
    /**
     * A boolean stating the success of the action
     */
    acknowledged: boolean;
    /**
     * The status enum for the performed action
     */
    status: DeleteNotificationGroupResponseDtoStatus;
};

/** @internal */
export namespace DeleteNotificationGroupResponseDtoStatus$ {
    export const inboundSchema = z.nativeEnum(DeleteNotificationGroupResponseDtoStatus);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace DeleteNotificationGroupResponseDto$ {
    export const inboundSchema: z.ZodType<
        DeleteNotificationGroupResponseDto,
        z.ZodTypeDef,
        unknown
    > = z.object({
        acknowledged: z.boolean(),
        status: DeleteNotificationGroupResponseDtoStatus$.inboundSchema,
    });

    export type Outbound = {
        acknowledged: boolean;
        status: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeleteNotificationGroupResponseDto
    > = z.object({
        acknowledged: z.boolean(),
        status: DeleteNotificationGroupResponseDtoStatus$.outboundSchema,
    });
}
