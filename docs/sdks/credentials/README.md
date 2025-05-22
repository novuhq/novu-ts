# Credentials
(*subscribers.credentials*)

## Overview

### Available Operations

* [update](#update) - Update provider credentials
* [append](#append) - Upsert provider credentials
* [delete](#delete) - Delete provider credentials

## update

Update credentials for a provider such as slack and push tokens. 
      **providerId** is required field. This API appends the **deviceTokens** to the existing ones.

### Example Usage

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.subscribers.credentials.update({
    providerId: "slack",
    credentials: {
      webhookUrl: "https://example.com/webhook",
      channel: "general",
      deviceTokens: [
        "token1",
        "token2",
        "token3",
      ],
      alertUid: "12345-abcde",
      title: "Critical Alert",
      imageUrl: "https://example.com/image.png",
      state: "resolved",
      externalUrl: "https://example.com/details",
    },
  }, "<id>");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { subscribersCredentialsUpdate } from "@novu/api/funcs/subscribersCredentialsUpdate.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await subscribersCredentialsUpdate(novu, {
    providerId: "slack",
    credentials: {
      webhookUrl: "https://example.com/webhook",
      channel: "general",
      deviceTokens: [
        "token1",
        "token2",
        "token3",
      ],
      alertUid: "12345-abcde",
      title: "Critical Alert",
      imageUrl: "https://example.com/image.png",
      state: "resolved",
      externalUrl: "https://example.com/details",
    },
  }, "<id>");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `subscriberId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `updateSubscriberChannelRequestDto`                                                                                                                                            | [components.UpdateSubscriberChannelRequestDto](../../models/components/updatesubscriberchannelrequestdto.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `idempotencyKey`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A header for idempotency purposes                                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SubscribersV1ControllerUpdateSubscriberChannelResponse](../../models/operations/subscribersv1controllerupdatesubscriberchannelresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.ErrorDto                        | 414                                    | application/json                       |
| errors.ErrorDto                        | 400, 401, 403, 404, 405, 409, 413, 415 | application/json                       |
| errors.ValidationErrorDto              | 422                                    | application/json                       |
| errors.ErrorDto                        | 500                                    | application/json                       |
| errors.SDKError                        | 4XX, 5XX                               | \*/\*                                  |

## append

Update credentials for a provider such as **slack** and **FCM**. 
      **providerId** is required field. This API replaces the existing deviceTokens with the provided ones.

### Example Usage

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.subscribers.credentials.append({
    providerId: "one-signal",
    credentials: {
      webhookUrl: "https://example.com/webhook",
      channel: "general",
      deviceTokens: [
        "token1",
        "token2",
        "token3",
      ],
      alertUid: "12345-abcde",
      title: "Critical Alert",
      imageUrl: "https://example.com/image.png",
      state: "resolved",
      externalUrl: "https://example.com/details",
    },
  }, "<id>");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { subscribersCredentialsAppend } from "@novu/api/funcs/subscribersCredentialsAppend.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await subscribersCredentialsAppend(novu, {
    providerId: "one-signal",
    credentials: {
      webhookUrl: "https://example.com/webhook",
      channel: "general",
      deviceTokens: [
        "token1",
        "token2",
        "token3",
      ],
      alertUid: "12345-abcde",
      title: "Critical Alert",
      imageUrl: "https://example.com/image.png",
      state: "resolved",
      externalUrl: "https://example.com/details",
    },
  }, "<id>");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `subscriberId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `updateSubscriberChannelRequestDto`                                                                                                                                            | [components.UpdateSubscriberChannelRequestDto](../../models/components/updatesubscriberchannelrequestdto.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `idempotencyKey`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A header for idempotency purposes                                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SubscribersV1ControllerModifySubscriberChannelResponse](../../models/operations/subscribersv1controllermodifysubscriberchannelresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.ErrorDto                        | 414                                    | application/json                       |
| errors.ErrorDto                        | 400, 401, 403, 404, 405, 409, 413, 415 | application/json                       |
| errors.ValidationErrorDto              | 422                                    | application/json                       |
| errors.ErrorDto                        | 500                                    | application/json                       |
| errors.SDKError                        | 4XX, 5XX                               | \*/\*                                  |

## delete

Delete subscriber credentials for a provider such as **slack** and **FCM** by **providerId**. 
    This action is irreversible and will remove the credentials for the provider for particular **subscriberId**.

### Example Usage

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.subscribers.credentials.delete("<id>", "<id>");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { subscribersCredentialsDelete } from "@novu/api/funcs/subscribersCredentialsDelete.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await subscribersCredentialsDelete(novu, "<id>", "<id>");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `subscriberId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `providerId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `idempotencyKey`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A header for idempotency purposes                                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SubscribersV1ControllerDeleteSubscriberCredentialsResponse](../../models/operations/subscribersv1controllerdeletesubscribercredentialsresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.ErrorDto                        | 414                                    | application/json                       |
| errors.ErrorDto                        | 400, 401, 403, 404, 405, 409, 413, 415 | application/json                       |
| errors.ValidationErrorDto              | 422                                    | application/json                       |
| errors.ErrorDto                        | 500                                    | application/json                       |
| errors.SDKError                        | 4XX, 5XX                               | \*/\*                                  |