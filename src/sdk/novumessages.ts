/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { subscribersMessagesMarkAll } from "../funcs/subscribersMessagesMarkAll.js";
import { subscribersMessagesMarkAllAs } from "../funcs/subscribersMessagesMarkAllAs.js";
import { subscribersMessagesUpdateAsSeen } from "../funcs/subscribersMessagesUpdateAsSeen.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class NovuMessages extends ClientSDK {
    /**
     * Marks all the subscriber messages as read, unread, seen or unseen. Optionally you can pass feed id (or array) to mark messages of a particular feed.
     */
    async markAll(
        subscriberId: string,
        markAllMessageAsRequestDto: components.MarkAllMessageAsRequestDto,
        options?: RequestOptions
    ): Promise<number> {
        return unwrapAsync(
            subscribersMessagesMarkAll(this, subscriberId, markAllMessageAsRequestDto, options)
        );
    }

    /**
     * Mark a subscriber messages as seen, read, unseen or unread
     */
    async markAllAs(
        subscriberId: string,
        messageMarkAsRequestDto: components.MessageMarkAsRequestDto,
        options?: RequestOptions
    ): Promise<Array<components.MessageEntity>> {
        return unwrapAsync(
            subscribersMessagesMarkAllAs(this, subscriberId, messageMarkAsRequestDto, options)
        );
    }

    /**
     * Mark message action as seen
     */
    async updateAsSeen(
        request: operations.SubscribersControllerMarkActionAsSeenRequest,
        options?: RequestOptions
    ): Promise<components.MessageResponseDto> {
        return unwrapAsync(subscribersMessagesUpdateAsSeen(this, request, options));
    }
}
