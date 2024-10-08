/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { subscribersCredentialsAppend } from "../funcs/subscribersCredentialsAppend.js";
import { subscribersCredentialsDelete } from "../funcs/subscribersCredentialsDelete.js";
import { subscribersCredentialsUpdate } from "../funcs/subscribersCredentialsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Credentials extends ClientSDK {
  /**
   * Modify subscriber credentials
   *
   * @remarks
   * Subscriber credentials associated to the delivery methods such as slack and push tokens.
   *     This endpoint appends provided credentials and deviceTokens to the existing ones.
   */
  async append(
    subscriberId: string,
    updateSubscriberChannelRequestDto:
      components.UpdateSubscriberChannelRequestDto,
    options?: RequestOptions,
  ): Promise<components.SubscriberResponseDto> {
    return unwrapAsync(subscribersCredentialsAppend(
      this,
      subscriberId,
      updateSubscriberChannelRequestDto,
      options,
    ));
  }

  /**
   * Delete subscriber credentials by providerId
   *
   * @remarks
   * Delete subscriber credentials such as slack and expo tokens.
   */
  async delete(
    subscriberId: string,
    providerId: string,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(subscribersCredentialsDelete(
      this,
      subscriberId,
      providerId,
      options,
    ));
  }

  /**
   * Update subscriber credentials
   *
   * @remarks
   * Subscriber credentials associated to the delivery methods such as slack and push tokens.
   */
  async update(
    subscriberId: string,
    updateSubscriberChannelRequestDto:
      components.UpdateSubscriberChannelRequestDto,
    options?: RequestOptions,
  ): Promise<components.SubscriberResponseDto> {
    return unwrapAsync(subscribersCredentialsUpdate(
      this,
      subscriberId,
      updateSubscriberChannelRequestDto,
      options,
    ));
  }
}
