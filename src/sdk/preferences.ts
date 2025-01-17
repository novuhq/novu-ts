/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { subscribersPreferencesList } from "../funcs/subscribersPreferencesList.js";
import { subscribersPreferencesRetrieveByLevel } from "../funcs/subscribersPreferencesRetrieveByLevel.js";
import { subscribersPreferencesUpdate } from "../funcs/subscribersPreferencesUpdate.js";
import { subscribersPreferencesUpdateGlobal } from "../funcs/subscribersPreferencesUpdateGlobal.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Preferences extends ClientSDK {
  /**
   * Get subscriber preferences
   */
  async list(
    subscriberId: string,
    includeInactiveChannels?: boolean | undefined,
    idempotencyKey?: string | undefined,
    options?: RequestOptions,
  ): Promise<
    operations.SubscribersControllerListSubscriberPreferencesResponse
  > {
    return unwrapAsync(subscribersPreferencesList(
      this,
      subscriberId,
      includeInactiveChannels,
      idempotencyKey,
      options,
    ));
  }

  /**
   * Update subscriber global preferences
   */
  async updateGlobal(
    updateSubscriberGlobalPreferencesRequestDto:
      components.UpdateSubscriberGlobalPreferencesRequestDto,
    subscriberId: string,
    idempotencyKey?: string | undefined,
    options?: RequestOptions,
  ): Promise<
    operations.SubscribersControllerUpdateSubscriberGlobalPreferencesResponse
  > {
    return unwrapAsync(subscribersPreferencesUpdateGlobal(
      this,
      updateSubscriberGlobalPreferencesRequestDto,
      subscriberId,
      idempotencyKey,
      options,
    ));
  }

  /**
   * Get subscriber preferences by level
   */
  async retrieveByLevel(
    request:
      operations.SubscribersControllerGetSubscriberPreferenceByLevelRequest,
    options?: RequestOptions,
  ): Promise<
    operations.SubscribersControllerGetSubscriberPreferenceByLevelResponse
  > {
    return unwrapAsync(subscribersPreferencesRetrieveByLevel(
      this,
      request,
      options,
    ));
  }

  /**
   * Update subscriber preference
   */
  async update(
    request: operations.SubscribersControllerUpdateSubscriberPreferenceRequest,
    options?: RequestOptions,
  ): Promise<
    operations.SubscribersControllerUpdateSubscriberPreferenceResponse
  > {
    return unwrapAsync(subscribersPreferencesUpdate(
      this,
      request,
      options,
    ));
  }
}
