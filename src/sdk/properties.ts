/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { subscribersPropertiesUpdateOnlineFlag } from "../funcs/subscribersPropertiesUpdateOnlineFlag.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Properties extends ClientSDK {
  /**
   * Update subscriber online status
   *
   * @remarks
   * Used to update the subscriber isOnline flag.
   */
  async updateOnlineFlag(
    subscriberId: string,
    updateSubscriberOnlineFlagRequestDto:
      components.UpdateSubscriberOnlineFlagRequestDto,
    options?: RequestOptions,
  ): Promise<components.SubscriberResponseDto> {
    return unwrapAsync(subscribersPropertiesUpdateOnlineFlag(
      this,
      subscriberId,
      updateSubscriberOnlineFlagRequestDto,
      options,
    ));
  }
}
