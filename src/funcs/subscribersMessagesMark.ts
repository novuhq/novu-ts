/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { NovuCore } from "../core.js";
import { encodeJSON, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
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
 * Mark a subscriber messages as seen, read, unseen or unread
 */
export async function subscribersMessagesMark(
  client: NovuCore,
  messageMarkAsRequestDto: components.MessageMarkAsRequestDto,
  subscriberId: string,
  options?: RequestOptions,
): Promise<
  Result<
    Array<components.MessageEntity>,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input: operations.SubscribersControllerMarkMessagesAsRequest = {
    messageMarkAsRequestDto: messageMarkAsRequestDto,
    subscriberId: subscriberId,
  };

  const parsed = safeParse(
    input,
    (value) =>
      operations.SubscribersControllerMarkMessagesAsRequest$outboundSchema
        .parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.MessageMarkAsRequestDto, {
    explode: true,
  });

  const pathParams = {
    subscriberId: encodeSimple("subscriberId", payload.subscriberId, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/v1/subscribers/{subscriberId}/messages/mark-as")(
    pathParams,
  );

  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  });

  const secConfig = await extractSecurity(client._options.apiKey);
  const securityInput = secConfig == null ? {} : { apiKey: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "SubscribersController_markMessagesAs",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.apiKey,
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
      }
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["408", "409", "429", "5XX"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "POST",
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
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const [result] = await M.match<
    Array<components.MessageEntity>,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(201, z.array(components.MessageEntity$inboundSchema)),
    M.fail([409, 429, "4XX", 503, "5XX"]),
  )(response);
  if (!result.ok) {
    return result;
  }

  return result;
}