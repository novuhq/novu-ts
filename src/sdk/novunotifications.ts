/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { subscribersNotificationsRetrieve } from "../funcs/subscribersNotificationsRetrieve.js";
import { subscribersNotificationsUnseenCount } from "../funcs/subscribersNotificationsUnseenCount.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class NovuNotifications extends ClientSDK {
  /**
   * Get in-app notification feed for a particular subscriber
   */
  async retrieve(
    request: operations.SubscribersControllerGetNotificationsFeedRequest,
    options?: RequestOptions,
  ): Promise<operations.SubscribersControllerGetNotificationsFeedResponse> {
    return unwrapAsync(subscribersNotificationsRetrieve(
      this,
      request,
      options,
    ));
  }

  /**
   * Get the unseen in-app notifications count for subscribers feed
   */
  async unseenCount(
    request: operations.SubscribersControllerGetUnseenCountRequest,
    options?: RequestOptions,
  ): Promise<operations.SubscribersControllerGetUnseenCountResponse> {
    return unwrapAsync(subscribersNotificationsUnseenCount(
      this,
      request,
      options,
    ));
  }
}
