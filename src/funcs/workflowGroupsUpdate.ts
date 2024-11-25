/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { NovuCore } from "../core.js";
<<<<<<< Updated upstream
import {
  encodeJSON as encodeJSON$,
  encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
=======
import { encodeJSON, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
>>>>>>> Stashed changes
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
 * Update workflow group
 *
 * @remarks
 * workflow group was previously named notification group
 */
export async function workflowGroupsUpdate(
<<<<<<< Updated upstream
  client$: NovuCore,
  id: string,
  createNotificationGroupRequestDto:
    components.CreateNotificationGroupRequestDto,
=======
  client: NovuCore,
  createNotificationGroupRequestDto:
    components.CreateNotificationGroupRequestDto,
  id: string,
>>>>>>> Stashed changes
  options?: RequestOptions,
): Promise<
  Result<
    components.NotificationGroupResponseDto,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
<<<<<<< Updated upstream
  const input$:
    operations.NotificationGroupsControllerUpdateNotificationGroupRequest = {
      id: id,
      createNotificationGroupRequestDto: createNotificationGroupRequestDto,
    };

  const parsed$ = schemas$.safeParse(
    input$,
    (value$) =>
      operations
        .NotificationGroupsControllerUpdateNotificationGroupRequest$outboundSchema
        .parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = encodeJSON$(
    "body",
    payload$.CreateNotificationGroupRequestDto,
    { explode: true },
  );

  const pathParams$ = {
    id: encodeSimple$("id", payload$.id, {
=======
  const input:
    operations.NotificationGroupsControllerUpdateNotificationGroupRequest = {
      createNotificationGroupRequestDto: createNotificationGroupRequestDto,
      id: id,
    };

  const parsed = safeParse(
    input,
    (value) =>
      operations
        .NotificationGroupsControllerUpdateNotificationGroupRequest$outboundSchema
        .parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.CreateNotificationGroupRequestDto, {
    explode: true,
  });

  const pathParams = {
    id: encodeSimple("id", payload.id, {
>>>>>>> Stashed changes
      explode: false,
      charEncoding: "percent",
    }),
  };

<<<<<<< Updated upstream
  const path$ = pathToFunc("/v1/notification-groups/{id}")(pathParams$);

  const headers$ = new Headers({
=======
  const path = pathToFunc("/v1/notification-groups/{id}")(pathParams);

  const headers = new Headers({
>>>>>>> Stashed changes
    "Content-Type": "application/json",
    Accept: "application/json",
  });

<<<<<<< Updated upstream
  const apiKey$ = await extractSecurity(client$.options$.apiKey);
  const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
  const context = {
    operationID: "NotificationGroupsController_updateNotificationGroup",
    oAuth2Scopes: [],
    securitySource: client$.options$.apiKey,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "PATCH",
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
    errorCodes: ["409", "429", "4XX", "503", "5XX"],
    retryConfig: options?.retries
      || client$.options$.retryConfig
=======
  const secConfig = await extractSecurity(client._options.apiKey);
  const securityInput = secConfig == null ? {} : { apiKey: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "NotificationGroupsController_updateNotificationGroup",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.apiKey,
    retryConfig: options?.retries
      || client._options.retryConfig
>>>>>>> Stashed changes
      || {
        strategy: "backoff",
        backoff: {
          initialInterval: 500,
          maxInterval: 30000,
          exponent: 1.5,
          maxElapsedTime: 3600000,
        },
        retryConnectionErrors: true,
<<<<<<< Updated upstream
      },
    retryCodes: options?.retryCodes || ["408", "409", "429", "5XX"],
=======
      }
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["408", "409", "429", "5XX"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "PATCH",
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["409", "429", "4XX", "503", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
>>>>>>> Stashed changes
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

<<<<<<< Updated upstream
  const [result$] = await m$.match<
=======
  const [result] = await M.match<
>>>>>>> Stashed changes
    components.NotificationGroupResponseDto,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
<<<<<<< Updated upstream
    m$.json(200, components.NotificationGroupResponseDto$inboundSchema),
    m$.fail([409, 429, "4XX", 503, "5XX"]),
  )(response);
  if (!result$.ok) {
    return result$;
  }

  return result$;
=======
    M.json(200, components.NotificationGroupResponseDto$inboundSchema),
    M.fail([409, 429, "4XX", 503, "5XX"]),
  )(response);
  if (!result.ok) {
    return result;
  }

  return result;
>>>>>>> Stashed changes
}
