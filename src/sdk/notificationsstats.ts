/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { notificationsStatsGet } from "../funcs/notificationsStatsGet.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class NotificationsStats extends ClientSDK {
  /**
   * Get notification graph statistics
   */
  async get(
    days?: number | undefined,
    options?: RequestOptions,
  ): Promise<operations.NotificationsControllerGetActivityGraphStatsResponse> {
    return unwrapAsync(notificationsStatsGet(
      this,
      days,
      options,
    ));
  }
}
