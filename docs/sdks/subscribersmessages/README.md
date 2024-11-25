# SubscribersMessages
(*subscribersMessages*)

## Overview

## Overview

### Available Operations

* [markAll](#markall) - Marks all the subscriber messages as read, unread, seen or unseen. Optionally you can pass feed id (or array) to mark messages of a particular feed.
* [updateAsSeen](#updateasseen) - Mark message action as seen

## markAll

Marks all the subscriber messages as read, unread, seen or unseen. Optionally you can pass feed id (or array) to mark messages of a particular feed.

### Example Usage

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
<<<<<<< Updated upstream:docs/sdks/novunotifications/README.md
  const result = await novu.subscribers.notifications.retrieve({
    subscriberId: "<value>",
    payload: "btoa(JSON.stringify({ foo: 123 })) results in base64 encoded string like eyJmb28iOjEyM30=",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { subscribersNotificationsRetrieve } from "@novu/api/funcs/subscribersNotificationsRetrieve.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await subscribersNotificationsRetrieve(novu, {
    subscriberId: "<value>",
    payload: "btoa(JSON.stringify({ foo: 123 })) results in base64 encoded string like eyJmb28iOjEyM30=",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;
=======
  const result = await novu.subscribersMessages.markAll({
    markAs: "seen",
  }, "<id>");
>>>>>>> Stashed changes:docs/sdks/subscribersmessages/README.md

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { subscribersMessagesMarkAll } from "@novu/api/funcs/subscribersMessagesMarkAll.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await subscribersMessagesMarkAll(novu, {
    markAs: "seen",
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
| `markAllMessageAsRequestDto`                                                                                                                                                   | [components.MarkAllMessageAsRequestDto](../../models/components/markallmessageasrequestdto.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

<<<<<<< Updated upstream:docs/sdks/novunotifications/README.md
**Promise\<[operations.SubscribersControllerGetNotificationsFeedResponseBody](../../models/operations/subscriberscontrollergetnotificationsfeedresponsebody.md)\>**
=======
**Promise\<[number](../../models/.md)\>**
>>>>>>> Stashed changes:docs/sdks/subscribersmessages/README.md

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

<<<<<<< Updated upstream:docs/sdks/novunotifications/README.md

## unseenCount
=======
## updateAsSeen
>>>>>>> Stashed changes:docs/sdks/subscribersmessages/README.md

Mark message action as seen

### Example Usage

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
<<<<<<< Updated upstream:docs/sdks/novunotifications/README.md
  const result = await novu.subscribers.notifications.unseenCount({
    seen: true,
    subscriberId: "<value>",
    limit: 4322.81,
=======
  const result = await novu.subscribersMessages.updateAsSeen({
    messageId: "<id>",
    type: "<value>",
    subscriberId: "<id>",
    markMessageActionAsSeenDto: {
      status: "done",
    },
>>>>>>> Stashed changes:docs/sdks/subscribersmessages/README.md
  });
  
  // Handle the result
  console.log(result)
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
    seen: true,
    subscriberId: "<value>",
    limit: 4322.81,
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

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { subscribersMessagesUpdateAsSeen } from "@novu/api/funcs/subscribersMessagesUpdateAsSeen.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await subscribersMessagesUpdateAsSeen(novu, {
    messageId: "<id>",
    type: "<value>",
    subscriberId: "<id>",
    markMessageActionAsSeenDto: {
      status: "done",
    },
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
| `request`                                                                                                                                                                      | [operations.SubscribersControllerMarkActionAsSeenRequest](../../models/operations/subscriberscontrollermarkactionasseenrequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

<<<<<<< Updated upstream:docs/sdks/novunotifications/README.md
**Promise\<[components.UnseenCountResponse](../../models/components/unseencountresponse.md)\>**
=======
**Promise\<[components.MessageResponseDto](../../models/components/messageresponsedto.md)\>**
>>>>>>> Stashed changes:docs/sdks/subscribersmessages/README.md

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |