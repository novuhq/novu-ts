/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { NovuCore } from "../core.js";
import { encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
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
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

/**
 * Get tenant
 *
 * @remarks
 * Get tenant by your internal id used to identify the tenant Tenants is not supported in code first version of the API.
 */
export async function tenantsRetrieve(
  client$: NovuCore,
  identifier: string,
  options?: RequestOptions,
): Promise<
  Result<
    components.GetTenantResponseDto,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input$: operations.TenantControllerGetTenantByIdRequest = {
    identifier: identifier,
  };

  const parsed$ = schemas$.safeParse(
    input$,
    (value$) =>
      operations.TenantControllerGetTenantByIdRequest$outboundSchema.parse(
        value$,
      ),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = null;

  const pathParams$ = {
    identifier: encodeSimple$("identifier", payload$.identifier, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path$ = pathToFunc("/v1/tenants/{identifier}")(pathParams$);

  const headers$ = new Headers({
    Accept: "application/json",
  });

  const apiKey$ = await extractSecurity(client$.options$.apiKey);
  const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
  const context = {
    operationID: "TenantController_getTenantById",
    oAuth2Scopes: [],
    securitySource: client$.options$.apiKey,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "GET",
    path: path$,
    headers: headers$,
    body: body$,
    timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const request$ = requestRes.value;

  const doResult = await client$.do$(request$, {
    context,
    errorCodes: ["404", "409", "429", "4XX", "503", "5XX"],
    retryConfig: options?.retries
      || client$.options$.retryConfig
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

  const [result$] = await m$.match<
    components.GetTenantResponseDto,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.json(200, components.GetTenantResponseDto$inboundSchema),
    m$.fail([404, 409, 429, "4XX", 503, "5XX"]),
  )(response);
  if (!result$.ok) {
    return result$;
  }

  return result$;
}