/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { NovuCore } from "../core.js";
import * as M from "../lib/matchers.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { Result } from "../types/fp.js";

/**
 * Get available variables
 *
 * @remarks
 * Get the variables that can be used in the workflow
 */
export async function workflowsVariablesRetrieve(
  client: NovuCore,
  options?: RequestOptions,
): Promise<
  Result<
    components.VariablesResponseDto,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const path = pathToFunc("/v1/workflows/variables")();

  const headers = new Headers({
    Accept: "application/json",
  });

  const secConfig = await extractSecurity(client._options.apiKey);
  const securityInput = secConfig == null ? {} : { apiKey: secConfig };
  const context = {
    operationID: "WorkflowController_getWorkflowVariables",
    oAuth2Scopes: [],
    securitySource: client._options.apiKey,
  };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    path: path,
    headers: headers,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["409", "429", "4XX", "503", "5XX"],
    retryConfig: options?.retries
      || client._options.retryConfig
      || {
        strategy: "backoff",
        backoff: {
          initialInterval: 500,
          maxInterval: 30000,
          exponent: 1.5,
          maxElapsedTime: 3600000,
        },
        retryConnectionErrors: true,
      },
    retryCodes: options?.retryCodes || ["408", "409", "429", "5XX"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const [result] = await M.match<
    components.VariablesResponseDto,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, components.VariablesResponseDto$inboundSchema),
    M.fail([409, 429, "4XX", 503, "5XX"]),
  )(response);
  if (!result.ok) {
    return result;
  }

  return result;
}
