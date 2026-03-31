# EnvironmentVariables

## Overview

### Available Operations

* [list](#list) - List environment variables
* [create](#create) - Create environment variable
* [retrieve](#retrieve) - Get environment variable
* [update](#update) - Update environment variable
* [delete](#delete) - Delete environment variable
* [usage](#usage) - Get environment variable usage

## list

Returns all environment variables for the current organization. Secret values are masked.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="EnvironmentVariablesController_listEnvironmentVariables" method="get" path="/v1/environment-variables" -->
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.environmentVariables.list();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { environmentVariablesList } from "@novu/api/funcs/environmentVariablesList.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await environmentVariablesList(novu);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("environmentVariablesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `search`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Filter variables by key (case-insensitive partial match)                                                                                                                       |
| `idempotencyKey`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A header for idempotency purposes                                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.EnvironmentVariablesControllerListEnvironmentVariablesResponse](../../models/operations/environmentvariablescontrollerlistenvironmentvariablesresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.ErrorDto                        | 414                                    | application/json                       |
| errors.ErrorDto                        | 400, 401, 403, 404, 405, 409, 413, 415 | application/json                       |
| errors.ValidationErrorDto              | 422                                    | application/json                       |
| errors.ErrorDto                        | 500                                    | application/json                       |
| errors.SDKError                        | 4XX, 5XX                               | \*/\*                                  |

## create

Creates a new environment variable. Keys must be uppercase with underscores only (e.g. BASE_URL). Secret variables are encrypted at rest and masked in API responses.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="EnvironmentVariablesController_createEnvironmentVariable" method="post" path="/v1/environment-variables" -->
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.environmentVariables.create({
    key: "<key>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { environmentVariablesCreate } from "@novu/api/funcs/environmentVariablesCreate.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await environmentVariablesCreate(novu, {
    key: "<key>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("environmentVariablesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `createEnvironmentVariableRequestDto`                                                                                                                                          | [components.CreateEnvironmentVariableRequestDto](../../models/components/createenvironmentvariablerequestdto.md)                                                               | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `idempotencyKey`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A header for idempotency purposes                                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.EnvironmentVariablesControllerCreateEnvironmentVariableResponse](../../models/operations/environmentvariablescontrollercreateenvironmentvariableresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorDto                   | 414                               | application/json                  |
| errors.ErrorDto                   | 400, 401, 403, 404, 405, 413, 415 | application/json                  |
| errors.ValidationErrorDto         | 422                               | application/json                  |
| errors.ErrorDto                   | 500                               | application/json                  |
| errors.SDKError                   | 4XX, 5XX                          | \*/\*                             |

## retrieve

Returns a single environment variable by id. Secret values are masked.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="EnvironmentVariablesController_getEnvironmentVariable" method="get" path="/v1/environment-variables/{variableId}" -->
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.environmentVariables.retrieve("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { environmentVariablesRetrieve } from "@novu/api/funcs/environmentVariablesRetrieve.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await environmentVariablesRetrieve(novu, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("environmentVariablesRetrieve failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `variableId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `idempotencyKey`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A header for idempotency purposes                                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.EnvironmentVariablesControllerGetEnvironmentVariableResponse](../../models/operations/environmentvariablescontrollergetenvironmentvariableresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorDto                   | 414                               | application/json                  |
| errors.ErrorDto                   | 400, 401, 403, 405, 409, 413, 415 | application/json                  |
| errors.ValidationErrorDto         | 422                               | application/json                  |
| errors.ErrorDto                   | 500                               | application/json                  |
| errors.SDKError                   | 4XX, 5XX                          | \*/\*                             |

## update

Updates an existing environment variable. Providing values replaces all existing per-environment values.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="EnvironmentVariablesController_updateEnvironmentVariable" method="patch" path="/v1/environment-variables/{variableId}" -->
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.environmentVariables.update({}, "<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { environmentVariablesUpdate } from "@novu/api/funcs/environmentVariablesUpdate.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await environmentVariablesUpdate(novu, {}, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("environmentVariablesUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `variableId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `updateEnvironmentVariableRequestDto`                                                                                                                                          | [components.UpdateEnvironmentVariableRequestDto](../../models/components/updateenvironmentvariablerequestdto.md)                                                               | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `idempotencyKey`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A header for idempotency purposes                                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.EnvironmentVariablesControllerUpdateEnvironmentVariableResponse](../../models/operations/environmentvariablescontrollerupdateenvironmentvariableresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorDto                   | 414                               | application/json                  |
| errors.ErrorDto                   | 400, 401, 403, 405, 409, 413, 415 | application/json                  |
| errors.ValidationErrorDto         | 422                               | application/json                  |
| errors.ErrorDto                   | 500                               | application/json                  |
| errors.SDKError                   | 4XX, 5XX                          | \*/\*                             |

## delete

Deletes an environment variable by id.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="EnvironmentVariablesController_deleteEnvironmentVariable" method="delete" path="/v1/environment-variables/{variableId}" -->
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.environmentVariables.delete("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { environmentVariablesDelete } from "@novu/api/funcs/environmentVariablesDelete.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await environmentVariablesDelete(novu, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("environmentVariablesDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `variableId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `idempotencyKey`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A header for idempotency purposes                                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.EnvironmentVariablesControllerDeleteEnvironmentVariableResponse](../../models/operations/environmentvariablescontrollerdeleteenvironmentvariableresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorDto                   | 414                               | application/json                  |
| errors.ErrorDto                   | 400, 401, 403, 405, 409, 413, 415 | application/json                  |
| errors.ValidationErrorDto         | 422                               | application/json                  |
| errors.ErrorDto                   | 500                               | application/json                  |
| errors.SDKError                   | 4XX, 5XX                          | \*/\*                             |

## usage

Returns the workflows that reference this environment variable via {{env.KEY}} in their step controls.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="EnvironmentVariablesController_getEnvironmentVariableUsage" method="get" path="/v1/environment-variables/{variableId}/usage" -->
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.environmentVariables.usage("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { environmentVariablesUsage } from "@novu/api/funcs/environmentVariablesUsage.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await environmentVariablesUsage(novu, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("environmentVariablesUsage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `variableId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `idempotencyKey`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A header for idempotency purposes                                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.EnvironmentVariablesControllerGetEnvironmentVariableUsageResponse](../../models/operations/environmentvariablescontrollergetenvironmentvariableusageresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorDto                   | 414                               | application/json                  |
| errors.ErrorDto                   | 400, 401, 403, 405, 409, 413, 415 | application/json                  |
| errors.ValidationErrorDto         | 422                               | application/json                  |
| errors.ErrorDto                   | 500                               | application/json                  |
| errors.SDKError                   | 4XX, 5XX                          | \*/\*                             |