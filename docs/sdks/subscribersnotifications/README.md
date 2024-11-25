# SubscribersNotifications
(*subscribersNotifications*)

## Overview

## Overview

### Available Operations

* [getUnseenCount](#getunseencount) - Get the unseen in-app notifications count for subscribers feed

## getUnseenCount

Get the unseen in-app notifications count for subscribers feed

### Example Usage

```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
<<<<<<< Updated upstream:docs/sdks/variables/README.md
  const result = await novu.workflows.variables.retrieve();
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { workflowsVariablesRetrieve } from "@novu/api/funcs/workflowsVariablesRetrieve.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await workflowsVariablesRetrieve(novu);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;
=======
  const result = await novu.subscribersNotifications.getUnseenCount({
    seen: true,
    subscriberId: "<id>",
    limit: 4327.98,
  });
>>>>>>> Stashed changes:docs/sdks/subscribersnotifications/README.md

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { subscribersNotificationsGetUnseenCount } from "@novu/api/funcs/subscribersNotificationsGetUnseenCount.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await subscribersNotificationsGetUnseenCount(novu, {
    seen: true,
    subscriberId: "<id>",
    limit: 4327.98,
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

<<<<<<< Updated upstream:docs/sdks/variables/README.md
**Promise\<[components.VariablesResponseDto](../../models/components/variablesresponsedto.md)\>**
=======
**Promise\<[components.UnseenCountResponse](../../models/components/unseencountresponse.md)\>**
>>>>>>> Stashed changes:docs/sdks/subscribersnotifications/README.md

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |