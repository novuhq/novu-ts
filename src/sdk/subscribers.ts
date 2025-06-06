/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { subscribersCreate } from "../funcs/subscribersCreate.js";
import { subscribersCreateBulk } from "../funcs/subscribersCreateBulk.js";
import { subscribersDelete } from "../funcs/subscribersDelete.js";
import { subscribersPatch } from "../funcs/subscribersPatch.js";
import { subscribersRetrieve } from "../funcs/subscribersRetrieve.js";
import { subscribersSearch } from "../funcs/subscribersSearch.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { Credentials } from "./credentials.js";
import { NovuMessages } from "./novumessages.js";
import { NovuNotifications } from "./novunotifications.js";
import { NovuTopics } from "./novutopics.js";
import { Preferences } from "./preferences.js";
import { Properties } from "./properties.js";

export class Subscribers extends ClientSDK {
  private _preferences?: Preferences;
  get preferences(): Preferences {
    return (this._preferences ??= new Preferences(this._options));
  }

  private _topics?: NovuTopics;
  get topics(): NovuTopics {
    return (this._topics ??= new NovuTopics(this._options));
  }

  private _credentials?: Credentials;
  get credentials(): Credentials {
    return (this._credentials ??= new Credentials(this._options));
  }

  private _messages?: NovuMessages;
  get messages(): NovuMessages {
    return (this._messages ??= new NovuMessages(this._options));
  }

  private _notifications?: NovuNotifications;
  get notifications(): NovuNotifications {
    return (this._notifications ??= new NovuNotifications(this._options));
  }

  private _properties?: Properties;
  get properties(): Properties {
    return (this._properties ??= new Properties(this._options));
  }

  /**
   * Search subscribers
   *
   * @remarks
   * Search subscribers by their **email**, **phone**, **subscriberId** and **name**.
   *     The search is case sensitive and supports pagination.Checkout all available filters in the query section.
   */
  async search(
    request: operations.SubscribersControllerSearchSubscribersRequest,
    options?: RequestOptions,
  ): Promise<operations.SubscribersControllerSearchSubscribersResponse> {
    return unwrapAsync(subscribersSearch(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a subscriber
   *
   * @remarks
   * Create a subscriber with the subscriber attributes.
   *       **subscriberId** is a required field, rest other fields are optional, if the subscriber already exists, it will be updated
   */
  async create(
    createSubscriberRequestDto: components.CreateSubscriberRequestDto,
    idempotencyKey?: string | undefined,
    options?: RequestOptions,
  ): Promise<operations.SubscribersControllerCreateSubscriberResponse> {
    return unwrapAsync(subscribersCreate(
      this,
      createSubscriberRequestDto,
      idempotencyKey,
      options,
    ));
  }

  /**
   * Retrieve a subscriber
   *
   * @remarks
   * Retrieve a subscriber by its unique key identifier **subscriberId**.
   *     **subscriberId** field is required.
   */
  async retrieve(
    subscriberId: string,
    idempotencyKey?: string | undefined,
    options?: RequestOptions,
  ): Promise<operations.SubscribersControllerGetSubscriberResponse> {
    return unwrapAsync(subscribersRetrieve(
      this,
      subscriberId,
      idempotencyKey,
      options,
    ));
  }

  /**
   * Update a subscriber
   *
   * @remarks
   * Update a subscriber by its unique key identifier **subscriberId**.
   *     **subscriberId** is a required field, rest other fields are optional
   */
  async patch(
    patchSubscriberRequestDto: components.PatchSubscriberRequestDto,
    subscriberId: string,
    idempotencyKey?: string | undefined,
    options?: RequestOptions,
  ): Promise<operations.SubscribersControllerPatchSubscriberResponse> {
    return unwrapAsync(subscribersPatch(
      this,
      patchSubscriberRequestDto,
      subscriberId,
      idempotencyKey,
      options,
    ));
  }

  /**
   * Delete a subscriber
   *
   * @remarks
   * Deletes a subscriber entity from the Novu platform along with associated messages, preferences, and topic subscriptions.
   *       **subscriberId** is a required field.
   */
  async delete(
    subscriberId: string,
    idempotencyKey?: string | undefined,
    options?: RequestOptions,
  ): Promise<operations.SubscribersControllerRemoveSubscriberResponse> {
    return unwrapAsync(subscribersDelete(
      this,
      subscriberId,
      idempotencyKey,
      options,
    ));
  }

  /**
   * Bulk create subscribers
   *
   * @remarks
   *
   *       Using this endpoint multiple subscribers can be created at once. The bulk API is limited to 500 subscribers per request.
   */
  async createBulk(
    bulkSubscriberCreateDto: components.BulkSubscriberCreateDto,
    idempotencyKey?: string | undefined,
    options?: RequestOptions,
  ): Promise<operations.SubscribersV1ControllerBulkCreateSubscribersResponse> {
    return unwrapAsync(subscribersCreateBulk(
      this,
      bulkSubscriberCreateDto,
      idempotencyKey,
      options,
    ));
  }
}
