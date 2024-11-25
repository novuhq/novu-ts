/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { integrationsCreate } from "../funcs/integrationsCreate.js";
import { integrationsDelete } from "../funcs/integrationsDelete.js";
import { integrationsList } from "../funcs/integrationsList.js";
import { integrationsListActive } from "../funcs/integrationsListActive.js";
<<<<<<< Updated upstream
import { integrationsSetAsPrimary } from "../funcs/integrationsSetAsPrimary.js";
=======
import { integrationsSetPrimary } from "../funcs/integrationsSetPrimary.js";
>>>>>>> Stashed changes
import { integrationsUpdate } from "../funcs/integrationsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";
<<<<<<< Updated upstream
import { Webhooks } from "./webhooks.js";

export class Integrations extends ClientSDK {
  private _webhooks?: Webhooks;
  get webhooks(): Webhooks {
    return (this._webhooks ??= new Webhooks(this.options$));
  }

  /**
   * Create integration
   *
   * @remarks
   * Create an integration for the current environment the user is based on the API key provided
   */
  async create(
    request: components.CreateIntegrationRequestDto,
    options?: RequestOptions,
  ): Promise<components.IntegrationResponseDto> {
    return unwrapAsync(integrationsCreate(
      this,
      request,
=======

export class Integrations extends ClientSDK {
  /**
   * Create integration
   *
   * @remarks
   * Create an integration for the current environment the user is based on the API key provided
   */
  async create(
    request: components.CreateIntegrationRequestDto,
    options?: RequestOptions,
  ): Promise<components.IntegrationResponseDto> {
    return unwrapAsync(integrationsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete integration
   */
  async delete(
    integrationId: string,
    options?: RequestOptions,
  ): Promise<Array<components.IntegrationResponseDto>> {
    return unwrapAsync(integrationsDelete(
      this,
      integrationId,
>>>>>>> Stashed changes
      options,
    ));
  }

  /**
<<<<<<< Updated upstream
   * Delete integration
   */
  async delete(
    integrationId: string,
    options?: RequestOptions,
  ): Promise<Array<components.IntegrationResponseDto>> {
    return unwrapAsync(integrationsDelete(
      this,
      integrationId,
=======
   * Get integrations
   *
   * @remarks
   * Return all the integrations the user has created for that organization. Review v.0.17.0 changelog for a breaking change
   */
  async list(
    options?: RequestOptions,
  ): Promise<Array<components.IntegrationResponseDto>> {
    return unwrapAsync(integrationsList(
      this,
>>>>>>> Stashed changes
      options,
    ));
  }

  /**
<<<<<<< Updated upstream
   * Get integrations
   *
   * @remarks
   * Return all the integrations the user has created for that organization. Review v.0.17.0 changelog for a breaking change
   */
  async list(
    options?: RequestOptions,
  ): Promise<Array<components.IntegrationResponseDto>> {
    return unwrapAsync(integrationsList(
=======
   * Get active integrations
   *
   * @remarks
   * Return all the active integrations the user has created for that organization. Review v.0.17.0 changelog for a breaking change
   */
  async listActive(
    options?: RequestOptions,
  ): Promise<Array<components.IntegrationResponseDto>> {
    return unwrapAsync(integrationsListActive(
>>>>>>> Stashed changes
      this,
      options,
    ));
  }

  /**
<<<<<<< Updated upstream
   * Get active integrations
   *
   * @remarks
   * Return all the active integrations the user has created for that organization. Review v.0.17.0 changelog for a breaking change
   */
  async listActive(
    options?: RequestOptions,
  ): Promise<Array<components.IntegrationResponseDto>> {
    return unwrapAsync(integrationsListActive(
      this,
=======
   * Set integration as primary
   */
  async setPrimary(
    integrationId: string,
    options?: RequestOptions,
  ): Promise<components.IntegrationResponseDto> {
    return unwrapAsync(integrationsSetPrimary(
      this,
      integrationId,
>>>>>>> Stashed changes
      options,
    ));
  }

  /**
<<<<<<< Updated upstream
   * Set integration as primary
   */
  async setAsPrimary(
    integrationId: string,
    options?: RequestOptions,
  ): Promise<components.IntegrationResponseDto> {
    return unwrapAsync(integrationsSetAsPrimary(
      this,
      integrationId,
      options,
    ));
  }

  /**
   * Update integration
   */
  async update(
    integrationId: string,
    updateIntegrationRequestDto: components.UpdateIntegrationRequestDto,
=======
   * Update integration
   */
  async update(
    updateIntegrationRequestDto: components.UpdateIntegrationRequestDto,
    integrationId: string,
>>>>>>> Stashed changes
    options?: RequestOptions,
  ): Promise<components.IntegrationResponseDto> {
    return unwrapAsync(integrationsUpdate(
      this,
<<<<<<< Updated upstream
      integrationId,
      updateIntegrationRequestDto,
=======
      updateIntegrationRequestDto,
      integrationId,
>>>>>>> Stashed changes
      options,
    ));
  }
}
