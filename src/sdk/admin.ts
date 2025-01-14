/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { adminTestIdempotency } from "../funcs/adminTestIdempotency.js";
import { adminTestingControllerIdempotencyGet } from "../funcs/adminTestingControllerIdempotencyGet.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Admin extends ClientSDK {
  async testIdempotency(
    idempotencyBodyDto: components.IdempotencyBodyDto,
    idempotencyKey?: string | undefined,
    options?: RequestOptions,
  ): Promise<operations.TestingControllerIdempotencyResponse> {
    return unwrapAsync(adminTestIdempotency(
      this,
      idempotencyBodyDto,
      idempotencyKey,
      options,
    ));
  }

  async testingControllerIdempotencyGet(
    idempotencyKey?: string | undefined,
    options?: RequestOptions,
  ): Promise<operations.TestingControllerIdempotencyGetResponse> {
    return unwrapAsync(adminTestingControllerIdempotencyGet(
      this,
      idempotencyKey,
      options,
    ));
  }
}
