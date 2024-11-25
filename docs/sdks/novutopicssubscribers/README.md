# NovuTopicsSubscribers
(*topics.subscribers*)

## Overview

### Available Operations

* [add](#add) - Subscribers addition
* [check](#check) - Check topic subscriber
* [remove](#remove) - Subscribers removal

## add

Add subscribers to a topic by key

### Example Usage

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  await novu.topics.subscribers.add({
    subscribers: [
      "<value>",
      "<value>",
      "<value>",
    ],
<<<<<<< Updated upstream:docs/sdks/novusubscribers/README.md
  });
=======
  }, "<value>");


>>>>>>> Stashed changes:docs/sdks/novutopicssubscribers/README.md
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
<<<<<<< Updated upstream:docs/sdks/novusubscribers/README.md
import { topicsSubscribersAssign } from "@novu/api/funcs/topicsSubscribersAssign.js";
=======
import { topicsSubscribersAdd } from "@novu/api/funcs/topicsSubscribersAdd.js";
>>>>>>> Stashed changes:docs/sdks/novutopicssubscribers/README.md

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
<<<<<<< Updated upstream:docs/sdks/novusubscribers/README.md
  const res = await topicsSubscribersAssign(novu, "<value>", {
    subscribers: [
      "<value>",
    ],
  });
=======
  const res = await topicsSubscribersAdd(novu, {
    subscribers: [
      "<value>",
      "<value>",
      "<value>",
    ],
  }, "<value>");
>>>>>>> Stashed changes:docs/sdks/novutopicssubscribers/README.md

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
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

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

<<<<<<< Updated upstream:docs/sdks/novusubscribers/README.md

## delete

Remove subscribers from a topic

### Example Usage

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  await novu.topics.subscribers.delete("<value>", {
    subscribers: [
      "<value>",
    ],
  });
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { topicsSubscribersDelete } from "@novu/api/funcs/topicsSubscribersDelete.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await topicsSubscribersDelete(novu, "<value>", {
    subscribers: [
      "<value>",
    ],
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
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

**Promise\<void\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## retrieve
=======
## check
>>>>>>> Stashed changes:docs/sdks/novutopicssubscribers/README.md

Check if a subscriber belongs to a certain topic

### Example Usage

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
<<<<<<< Updated upstream:docs/sdks/novusubscribers/README.md
  const result = await novu.topics.subscribers.retrieve("<value>", "<value>");
  
  // Handle the result
  console.log(result)
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
  const res = await topicsSubscribersRetrieve(novu, "<value>", "<value>");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;
=======
  const result = await novu.topics.subscribers.check("<id>", "<value>");
>>>>>>> Stashed changes:docs/sdks/novutopicssubscribers/README.md

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { topicsSubscribersCheck } from "@novu/api/funcs/topicsSubscribersCheck.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await topicsSubscribersCheck(novu, "<id>", "<value>");

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

**Promise\<[components.TopicSubscriberDto](../../models/components/topicsubscriberdto.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## remove

Remove subscribers from a topic

### Example Usage

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  await novu.topics.subscribers.remove({
    subscribers: [
      "<value>",
      "<value>",
    ],
  }, "<value>");


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

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |