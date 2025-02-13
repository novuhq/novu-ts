/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { NovuCore } from "../core.js";
import { dlv } from "../lib/dlv.js";
import { encodeFormQuery, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
import {
  createPageIterator,
  haltIterator,
  PageIterator,
  Paginator,
} from "../types/operations.js";

/**
 * Get subscribers
 *
 * @remarks
 * Returns a list of subscribers, could paginated using the `page` and `limit` query parameter
 */
export async function subscribersList(
  client: NovuCore,
  page?: number | undefined,
  limit?: number | undefined,
  idempotencyKey?: string | undefined,
  options?: RequestOptions,
): Promise<
  PageIterator<
    Result<
      operations.SubscribersV1ControllerListSubscribersResponse,
      | errors.ErrorDto
      | errors.ErrorDto
      | errors.ValidationErrorDto
      | errors.ErrorDto
      | SDKError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >,
    { page: number }
  >
> {
  const input: operations.SubscribersV1ControllerListSubscribersRequest = {
    page: page,
    limit: limit,
    idempotencyKey: idempotencyKey,
  };

  const parsed = safeParse(
    input,
    (value) =>
      operations.SubscribersV1ControllerListSubscribersRequest$outboundSchema
        .parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return haltIterator(parsed);
  }
  const payload = parsed.value;
  const body = null;

  const path = pathToFunc("/v1/subscribers")();

  const query = encodeFormQuery({
    "limit": payload.limit,
    "page": payload.page,
  });

  const headers = new Headers(compactMap({
    Accept: "application/json",
    "idempotency-key": encodeSimple(
      "idempotency-key",
      payload["idempotency-key"],
      { explode: false, charEncoding: "none" },
    ),
  }));

  const secConfig = await extractSecurity(client._options.secretKey);
  const securityInput = secConfig == null ? {} : { secretKey: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    baseURL: options?.serverURL ?? "",
    operationID: "SubscribersV1Controller_listSubscribers",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.secretKey,
    retryConfig: options?.retries
      || client._options.retryConfig
      || {
        strategy: "backoff",
        backoff: {
          initialInterval: 1000,
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
    method: "GET",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    query: query,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return haltIterator(requestRes);
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: [
      "400",
      "401",
      "403",
      "404",
      "405",
      "409",
      "413",
      "414",
      "415",
      "422",
      "429",
      "4XX",
      "500",
      "503",
      "5XX",
    ],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return haltIterator(doResult);
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result, raw] = await M.match<
    operations.SubscribersV1ControllerListSubscribersResponse,
    | errors.ErrorDto
    | errors.ErrorDto
    | errors.ValidationErrorDto
    | errors.ErrorDto
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(
      200,
      operations.SubscribersV1ControllerListSubscribersResponse$inboundSchema,
      { hdrs: true, key: "Result" },
    ),
    M.jsonErr(414, errors.ErrorDto$inboundSchema),
    M.jsonErr(
      [400, 401, 403, 404, 405, 409, 413, 415],
      errors.ErrorDto$inboundSchema,
      { hdrs: true },
    ),
    M.jsonErr(422, errors.ValidationErrorDto$inboundSchema, { hdrs: true }),
    M.fail(429),
    M.jsonErr(500, errors.ErrorDto$inboundSchema, { hdrs: true }),
    M.fail(503),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return haltIterator(result);
  }

  const nextFunc = (
    responseData: unknown,
  ): {
    next: Paginator<
      Result<
        operations.SubscribersV1ControllerListSubscribersResponse,
        | errors.ErrorDto
        | errors.ErrorDto
        | errors.ValidationErrorDto
        | errors.ErrorDto
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
      >
    >;
    "~next"?: { page: number };
  } => {
    const page = input?.page ?? 1;
    const nextPage = page + 1;

    if (!responseData) {
      return { next: () => null };
    }
    const results = dlv(responseData, "data.resultArray");
    if (!Array.isArray(results) || !results.length) {
      return { next: () => null };
    }
    const limit = input?.limit ?? 10;
    if (results.length < limit) {
      return { next: () => null };
    }

    const nextVal = () =>
      subscribersList(
        client,
        nextPage,
        limit,
        idempotencyKey,
        options,
      );

    return { next: nextVal, "~next": { page: nextPage } };
  };

  const page$ = { ...result, ...nextFunc(raw) };
  return { ...page$, ...createPageIterator(page$, (v) => !v.ok) };
}
