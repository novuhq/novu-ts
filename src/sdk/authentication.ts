/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { subscribersAuthenticationChatAccessOauth } from "../funcs/subscribersAuthenticationChatAccessOauth.js";
import { subscribersAuthenticationChatAccessOauthCallBack } from "../funcs/subscribersAuthenticationChatAccessOauthCallBack.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Authentication extends ClientSDK {
  /**
   * Handle providers oauth redirect
   */
  async chatAccessOauthCallBack(
    request: operations.SubscribersControllerChatOauthCallbackRequest,
    options?: RequestOptions,
  ): Promise<
    operations.SubscribersControllerChatOauthCallbackResponse | undefined
  > {
    return unwrapAsync(subscribersAuthenticationChatAccessOauthCallBack(
      this,
      request,
      options,
    ));
  }

  /**
   * Handle chat oauth
   */
  async chatAccessOauth(
    request: operations.SubscribersControllerChatAccessOauthRequest,
    options?: RequestOptions,
  ): Promise<
    operations.SubscribersControllerChatAccessOauthResponse | undefined
  > {
    return unwrapAsync(subscribersAuthenticationChatAccessOauth(
      this,
      request,
      options,
    ));
  }
}
