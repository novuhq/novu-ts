/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { topicsSubscribersAdd } from "../funcs/topicsSubscribersAdd.js";
import { topicsSubscribersCheck } from "../funcs/topicsSubscribersCheck.js";
import { topicsSubscribersRemove } from "../funcs/topicsSubscribersRemove.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class NovuTopicsSubscribers extends ClientSDK {
  /**
   * Subscribers addition
   *
   * @remarks
   * Add subscribers to a topic by key
   */
  async add(
    addSubscribersRequestDto: components.AddSubscribersRequestDto,
    topicKey: string,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(topicsSubscribersAdd(
      this,
      addSubscribersRequestDto,
      topicKey,
      options,
    ));
  }

  /**
   * Check topic subscriber
   *
   * @remarks
   * Check if a subscriber belongs to a certain topic
   */
  async check(
    externalSubscriberId: string,
    topicKey: string,
    options?: RequestOptions,
  ): Promise<components.TopicSubscriberDto> {
    return unwrapAsync(topicsSubscribersCheck(
      this,
      externalSubscriberId,
      topicKey,
      options,
    ));
  }

  /**
   * Subscribers removal
   *
   * @remarks
   * Remove subscribers from a topic
   */
  async remove(
    removeSubscribersRequestDto: components.RemoveSubscribersRequestDto,
    topicKey: string,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(topicsSubscribersRemove(
      this,
      removeSubscribersRequestDto,
      topicKey,
      options,
    ));
  }
}
