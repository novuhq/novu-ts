# Translations.Groups

## Overview

### Available Operations

* [delete](#delete) - Delete a translation group
* [retrieve](#retrieve) - Retrieve a translation group

## delete

Delete an entire translation group and all its translations

### Example Usage

<!-- UsageSnippet language="typescript" operationID="TranslationController_deleteTranslationGroupEndpoint" method="delete" path="/v2/translations/{resourceType}/{resourceId}" -->
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  await novu.translations.groups.delete("workflow", "welcome-email");


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { translationsGroupsDelete } from "@novu/api/funcs/translationsGroupsDelete.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await translationsGroupsDelete(novu, "workflow", "welcome-email");
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("translationsGroupsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                  | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                | Example                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `resourceType`                                                                                                                                                                             | [operations.TranslationControllerDeleteTranslationGroupEndpointPathParamResourceType](../../models/operations/translationcontrollerdeletetranslationgroupendpointpathparamresourcetype.md) | :heavy_check_mark:                                                                                                                                                                         | Resource type                                                                                                                                                                              | [object Object]                                                                                                                                                                            |
| `resourceId`                                                                                                                                                                               | *string*                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                         | Resource ID                                                                                                                                                                                | [object Object]                                                                                                                                                                            |
| `idempotencyKey`                                                                                                                                                                           | *string*                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                         | A header for idempotency purposes                                                                                                                                                          |                                                                                                                                                                                            |
| `options`                                                                                                                                                                                  | RequestOptions                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                      |                                                                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                    | :heavy_minus_sign:                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.             |                                                                                                                                                                                            |
| `options.retries`                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                           |                                                                                                                                                                                            |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## retrieve

Retrieves a single translation group by resource type (workflow, layout) and resource ID (workflowId, layoutId)

### Example Usage

<!-- UsageSnippet language="typescript" operationID="TranslationController_getTranslationGroupEndpoint" method="get" path="/v2/translations/group/{resourceType}/{resourceId}" -->
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.translations.groups.retrieve("workflow", "welcome-email");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { translationsGroupsRetrieve } from "@novu/api/funcs/translationsGroupsRetrieve.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await translationsGroupsRetrieve(novu, "workflow", "welcome-email");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("translationsGroupsRetrieve failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                            | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          | Example                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `resourceType`                                                                                                                                                                       | [operations.TranslationControllerGetTranslationGroupEndpointPathParamResourceType](../../models/operations/translationcontrollergettranslationgroupendpointpathparamresourcetype.md) | :heavy_check_mark:                                                                                                                                                                   | Resource type                                                                                                                                                                        | [object Object]                                                                                                                                                                      |
| `resourceId`                                                                                                                                                                         | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | Resource ID                                                                                                                                                                          | [object Object]                                                                                                                                                                      |
| `idempotencyKey`                                                                                                                                                                     | *string*                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                   | A header for idempotency purposes                                                                                                                                                    |                                                                                                                                                                                      |
| `options`                                                                                                                                                                            | RequestOptions                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                |                                                                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                              | :heavy_minus_sign:                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.       |                                                                                                                                                                                      |
| `options.retries`                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                     |                                                                                                                                                                                      |

### Response

**Promise\<[components.TranslationGroupDto](../../models/components/translationgroupdto.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |