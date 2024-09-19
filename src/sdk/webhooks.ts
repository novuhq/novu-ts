/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { integrationsWebhooksRetrieve } from "../funcs/integrationsWebhooksRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { unwrapAsync } from "../types/fp.js";

export class Webhooks extends ClientSDK {
  /**
   * Get webhook support status for provider
   *
   * @remarks
   * Return the status of the webhook for this provider, if it is supported or if it is not based on a boolean value
   */
  async retrieve(
    providerOrIntegrationId: string,
    options?: RequestOptions,
  ): Promise<boolean> {
    return unwrapAsync(integrationsWebhooksRetrieve(
      this,
      providerOrIntegrationId,
      options,
    ));
  }
}
