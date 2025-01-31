/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { subscribersNotificationsFeed } from "../funcs/subscribersNotificationsFeed.js";
import { subscribersNotificationsUnseenCount } from "../funcs/subscribersNotificationsUnseenCount.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class NovuNotifications extends ClientSDK {
  /**
   * Get in-app notification feed for a particular subscriber
   */
  async feed(
    request: operations.SubscribersV1ControllerGetNotificationsFeedRequest,
    options?: RequestOptions,
  ): Promise<operations.SubscribersV1ControllerGetNotificationsFeedResponse> {
    return unwrapAsync(subscribersNotificationsFeed(
      this,
      request,
      options,
    ));
  }

  /**
   * Get the unseen in-app notifications count for subscribers feed
   */
  async unseenCount(
    request: operations.SubscribersV1ControllerGetUnseenCountRequest,
    options?: RequestOptions,
  ): Promise<operations.SubscribersV1ControllerGetUnseenCountResponse> {
    return unwrapAsync(subscribersNotificationsUnseenCount(
      this,
      request,
      options,
    ));
  }
}
