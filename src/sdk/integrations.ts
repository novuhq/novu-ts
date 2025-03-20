/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { integrationsCreate } from "../funcs/integrationsCreate.js";
import { integrationsDelete } from "../funcs/integrationsDelete.js";
import { integrationsList } from "../funcs/integrationsList.js";
import { integrationsListActive } from "../funcs/integrationsListActive.js";
import { integrationsSetAsPrimary } from "../funcs/integrationsSetAsPrimary.js";
import { integrationsUpdate } from "../funcs/integrationsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { Webhooks } from "./webhooks.js";

export class Integrations extends ClientSDK {
  private _webhooks?: Webhooks;
  get webhooks(): Webhooks {
    return (this._webhooks ??= new Webhooks(this._options));
  }

  /**
   * Get integrations
   *
   * @remarks
   * Return all the integrations the user has created for that organization. Review v.0.17.0 changelog for a breaking change
   */
  async list(
    idempotencyKey?: string | undefined,
    options?: RequestOptions,
  ): Promise<operations.IntegrationsControllerListIntegrationsResponse> {
    return unwrapAsync(integrationsList(
      this,
      idempotencyKey,
      options,
    ));
  }

  /**
   * Create integration
   *
   * @remarks
   * Create an integration for the current environment the user is based on the API key provided
   */
  async create(
    createIntegrationRequestDto: components.CreateIntegrationRequestDto,
    idempotencyKey?: string | undefined,
    options?: RequestOptions,
  ): Promise<operations.IntegrationsControllerCreateIntegrationResponse> {
    return unwrapAsync(integrationsCreate(
      this,
      createIntegrationRequestDto,
      idempotencyKey,
      options,
    ));
  }

  /**
   * Update integration
   */
  async update(
    updateIntegrationRequestDto: components.UpdateIntegrationRequestDto,
    integrationId: string,
    idempotencyKey?: string | undefined,
    options?: RequestOptions,
  ): Promise<operations.IntegrationsControllerUpdateIntegrationByIdResponse> {
    return unwrapAsync(integrationsUpdate(
      this,
      updateIntegrationRequestDto,
      integrationId,
      idempotencyKey,
      options,
    ));
  }

  /**
   * Delete integration
   */
  async delete(
    integrationId: string,
    idempotencyKey?: string | undefined,
    options?: RequestOptions,
  ): Promise<operations.IntegrationsControllerRemoveIntegrationResponse> {
    return unwrapAsync(integrationsDelete(
      this,
      integrationId,
      idempotencyKey,
      options,
    ));
  }

  /**
   * Set integration as primary
   */
  async setAsPrimary(
    integrationId: string,
    idempotencyKey?: string | undefined,
    options?: RequestOptions,
  ): Promise<operations.IntegrationsControllerSetIntegrationAsPrimaryResponse> {
    return unwrapAsync(integrationsSetAsPrimary(
      this,
      integrationId,
      idempotencyKey,
      options,
    ));
  }

  /**
   * Get active integrations
   *
   * @remarks
   * Return all the active integrations the user has created for that organization. Review v.0.17.0 changelog for a breaking change
   */
  async listActive(
    idempotencyKey?: string | undefined,
    options?: RequestOptions,
  ): Promise<operations.IntegrationsControllerGetActiveIntegrationsResponse> {
    return unwrapAsync(integrationsListActive(
      this,
      idempotencyKey,
      options,
    ));
  }
}
