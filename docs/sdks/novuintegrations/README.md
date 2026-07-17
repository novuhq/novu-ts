# Agents.Integrations

## Overview

### Available Operations

* [create](#create) - Create an agent integration
* [list](#list) - List agent integrations
* [update](#update) - Update an agent integration
* [delete](#delete) - Delete an agent integration

## create

Create a link between an agent (by identifier) and an integration (by integration **identifier**, not the internal _id).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AgentIntegrationsController_addAgentIntegration" method="post" path="/v1/agents/{identifier}/integrations" -->
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.agents.integrations.create({}, "<value>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { agentsIntegrationsCreate } from "@novu/api/funcs/agentsIntegrationsCreate.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await agentsIntegrationsCreate(novu, {}, "<value>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsIntegrationsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `identifier`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `addAgentIntegrationRequestDto`                                                                                                                                                | [components.AddAgentIntegrationRequestDto](../../models/components/addagentintegrationrequestdto.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `idempotencyKey`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A header for idempotency purposes                                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AgentIntegrationsControllerAddAgentIntegrationResponse](../../models/operations/agentintegrationscontrolleraddagentintegrationresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorDto                   | 414                               | application/json                  |
| errors.ErrorDto                   | 400, 401, 403, 405, 409, 413, 415 | application/json                  |
| errors.ValidationErrorDto         | 422                               | application/json                  |
| errors.ErrorDto                   | 500                               | application/json                  |
| errors.SDKError                   | 4XX, 5XX                          | \*/\*                             |

## list

Retrieve integration links for an agent identified by its external identifier. Supports cursor pagination via **after**, **before**, **limit**, **orderBy**, and **orderDirection**.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AgentIntegrationsController_listAgentIntegrations" method="get" path="/v1/agents/{identifier}/integrations" -->
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.agents.integrations.list({
    identifier: "<value>",
    limit: 10,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { agentsIntegrationsList } from "@novu/api/funcs/agentsIntegrationsList.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await agentsIntegrationsList(novu, {
    identifier: "<value>",
    limit: 10,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsIntegrationsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AgentIntegrationsControllerListAgentIntegrationsRequest](../../models/operations/agentintegrationscontrollerlistagentintegrationsrequest.md)                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AgentIntegrationsControllerListAgentIntegrationsResponse](../../models/operations/agentintegrationscontrollerlistagentintegrationsresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorDto                   | 414                               | application/json                  |
| errors.ErrorDto                   | 400, 401, 403, 405, 409, 413, 415 | application/json                  |
| errors.ValidationErrorDto         | 422                               | application/json                  |
| errors.ErrorDto                   | 500                               | application/json                  |
| errors.SDKError                   | 4XX, 5XX                          | \*/\*                             |

## update

Update which integration a link points to (by integration **identifier**, not the internal _id).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AgentIntegrationsController_updateAgentIntegration" method="patch" path="/v1/agents/{identifier}/integrations/{agentIntegrationId}" -->
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.agents.integrations.update({
    identifier: "<value>",
    agentIntegrationId: "<id>",
    updateAgentIntegrationRequestDto: {
      integrationIdentifier: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { agentsIntegrationsUpdate } from "@novu/api/funcs/agentsIntegrationsUpdate.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await agentsIntegrationsUpdate(novu, {
    identifier: "<value>",
    agentIntegrationId: "<id>",
    updateAgentIntegrationRequestDto: {
      integrationIdentifier: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsIntegrationsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AgentIntegrationsControllerUpdateAgentIntegrationRequest](../../models/operations/agentintegrationscontrollerupdateagentintegrationrequest.md)                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AgentIntegrationsControllerUpdateAgentIntegrationResponse](../../models/operations/agentintegrationscontrollerupdateagentintegrationresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorDto                   | 414                               | application/json                  |
| errors.ErrorDto                   | 400, 401, 403, 405, 409, 413, 415 | application/json                  |
| errors.ValidationErrorDto         | 422                               | application/json                  |
| errors.ErrorDto                   | 500                               | application/json                  |
| errors.SDKError                   | 4XX, 5XX                          | \*/\*                             |

## delete

Delete a specific agent-integration link by its document id.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AgentIntegrationsController_removeAgentIntegration" method="delete" path="/v1/agents/{identifier}/integrations/{agentIntegrationId}" -->
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.agents.integrations.delete("<value>", "<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { agentsIntegrationsDelete } from "@novu/api/funcs/agentsIntegrationsDelete.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await agentsIntegrationsDelete(novu, "<value>", "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsIntegrationsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `identifier`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `agentIntegrationId`                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `idempotencyKey`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A header for idempotency purposes                                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AgentIntegrationsControllerRemoveAgentIntegrationResponse](../../models/operations/agentintegrationscontrollerremoveagentintegrationresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorDto                   | 414                               | application/json                  |
| errors.ErrorDto                   | 400, 401, 403, 405, 409, 413, 415 | application/json                  |
| errors.ValidationErrorDto         | 422                               | application/json                  |
| errors.ErrorDto                   | 500                               | application/json                  |
| errors.SDKError                   | 4XX, 5XX                          | \*/\*                             |