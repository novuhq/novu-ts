# NovuNotifications
(*subscribers.notifications*)

## Overview

### Available Operations

* [feed](#feed) - Get in-app notification feed for a particular subscriber
* [unseenCount](#unseencount) - Get the unseen in-app notifications count for subscribers feed

## feed

Get in-app notification feed for a particular subscriber

### Example Usage

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await novu.subscribers.notifications.feed({
    subscriberId: "<id>",
    payload: "btoa(JSON.stringify({ foo: 123 })) results in base64 encoded string like eyJmb28iOjEyM30=",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { subscribersNotificationsFeed } from "@novu/api/funcs/subscribersNotificationsFeed.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await subscribersNotificationsFeed(novu, {
    subscriberId: "<id>",
    payload: "btoa(JSON.stringify({ foo: 123 })) results in base64 encoded string like eyJmb28iOjEyM30=",
  });

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
| `request`                                                                                                                                                                      | [operations.SubscribersControllerGetNotificationsFeedRequest](../../models/operations/subscriberscontrollergetnotificationsfeedrequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SubscribersControllerGetNotificationsFeedResponse](../../models/operations/subscriberscontrollergetnotificationsfeedresponse.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.ErrorDto                             | 400, 401, 403, 404, 405, 409, 413, 415, 500 | application/json                            |
| errors.ErrorDto                             | 414                                         | application/json                            |
| errors.ValidationErrorDto                   | 422                                         | application/json                            |
| errors.SDKError                             | 4XX, 5XX                                    | \*/\*                                       |

## unseenCount

Get the unseen in-app notifications count for subscribers feed

### Example Usage

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await novu.subscribers.notifications.unseenCount({
    subscriberId: "<id>",
    seen: false,
    limit: 2979.49,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { subscribersNotificationsUnseenCount } from "@novu/api/funcs/subscribersNotificationsUnseenCount.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await subscribersNotificationsUnseenCount(novu, {
    subscriberId: "<id>",
    seen: false,
    limit: 2979.49,
  });

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
| `request`                                                                                                                                                                      | [operations.SubscribersControllerGetUnseenCountRequest](../../models/operations/subscriberscontrollergetunseencountrequest.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SubscribersControllerGetUnseenCountResponse](../../models/operations/subscriberscontrollergetunseencountresponse.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.ErrorDto                             | 400, 401, 403, 404, 405, 409, 413, 415, 500 | application/json                            |
| errors.ErrorDto                             | 414                                         | application/json                            |
| errors.ValidationErrorDto                   | 422                                         | application/json                            |
| errors.SDKError                             | 4XX, 5XX                                    | \*/\*                                       |