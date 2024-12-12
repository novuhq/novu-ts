# NovuSubscribers
(*topics.subscribers*)

## Overview

### Available Operations

* [assign](#assign) - Subscribers addition
* [retrieve](#retrieve) - Check topic subscriber
* [remove](#remove) - Subscribers removal

## assign

Add subscribers to a topic by key

### Example Usage

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await novu.topics.subscribers.assign({
    subscribers: [
      "<value>",
      "<value>",
      "<value>",
    ],
  }, "<value>");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { topicsSubscribersAssign } from "@novu/api/funcs/topicsSubscribersAssign.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await topicsSubscribersAssign(novu, {
    subscribers: [
      "<value>",
      "<value>",
      "<value>",
    ],
  }, "<value>");

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
| `topicKey`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The topic key                                                                                                                                                                  |
| `addSubscribersRequestDto`                                                                                                                                                     | [components.AddSubscribersRequestDto](../../models/components/addsubscribersrequestdto.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.TopicsControllerAssignResponse](../../models/operations/topicscontrollerassignresponse.md)\>**

### Errors

| Error Type                                                 | Status Code                                                | Content Type                                               |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| errors.TopicsControllerAssignResponseBody                  | 400                                                        | application/json                                           |
| errors.TopicsControllerAssignTopicsSubscribersResponseBody | 404                                                        | application/json                                           |
| errors.SDKError                                            | 4XX, 5XX                                                   | \*/\*                                                      |

## retrieve

Check if a subscriber belongs to a certain topic

### Example Usage

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await novu.topics.subscribers.retrieve("<id>", "<value>");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { topicsSubscribersRetrieve } from "@novu/api/funcs/topicsSubscribersRetrieve.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await topicsSubscribersRetrieve(novu, "<id>", "<value>");

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
| `externalSubscriberId`                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The external subscriber id                                                                                                                                                     |
| `topicKey`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The topic key                                                                                                                                                                  |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.TopicsControllerGetTopicSubscriberResponse](../../models/operations/topicscontrollergettopicsubscriberresponse.md)\>**

### Errors

| Error Type                                                             | Status Code                                                            | Content Type                                                           |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| errors.TopicsControllerGetTopicSubscriberResponseBody                  | 400                                                                    | application/json                                                       |
| errors.TopicsControllerGetTopicSubscriberTopicsSubscribersResponseBody | 404                                                                    | application/json                                                       |
| errors.SDKError                                                        | 4XX, 5XX                                                               | \*/\*                                                                  |

## remove

Remove subscribers from a topic

### Example Usage

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await novu.topics.subscribers.remove({
    subscribers: [
      "<value>",
      "<value>",
    ],
  }, "<value>");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { topicsSubscribersRemove } from "@novu/api/funcs/topicsSubscribersRemove.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await topicsSubscribersRemove(novu, {
    subscribers: [
      "<value>",
      "<value>",
    ],
  }, "<value>");

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
| `topicKey`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The topic key                                                                                                                                                                  |
| `removeSubscribersRequestDto`                                                                                                                                                  | [components.RemoveSubscribersRequestDto](../../models/components/removesubscribersrequestdto.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.TopicsControllerRemoveSubscribersResponse](../../models/operations/topicscontrollerremovesubscribersresponse.md)\>**

### Errors

| Error Type                                                            | Status Code                                                           | Content Type                                                          |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| errors.TopicsControllerRemoveSubscribersResponseBody                  | 400                                                                   | application/json                                                      |
| errors.TopicsControllerRemoveSubscribersTopicsSubscribersResponseBody | 404                                                                   | application/json                                                      |
| errors.SDKError                                                       | 4XX, 5XX                                                              | \*/\*                                                                 |