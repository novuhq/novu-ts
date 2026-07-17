# Agents

## Overview

Agents are conversational assistants that receive inbound messages from connected channels and respond through a custom code bridge or a managed runtime provider.
<https://docs.novu.co/agents>

### Available Operations

* [create](#create) - Create an agent
* [list](#list) - List all agents
* [sendReply](#sendreply) - Send an agent reply
* [retrieve](#retrieve) - Retrieve an agent
* [update](#update) - Update an agent
* [delete](#delete) - Delete an agent
* [updateBridge](#updatebridge) - Update an agent bridge

## create

Create an agent scoped to the current environment. The identifier must be unique per environment. Set `runtime` to `managed` and supply `managedRuntime` to provision a provider-hosted agent brain.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AgentsController_createAgent" method="post" path="/v1/agents" -->
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.agents.create({
    name: "<value>",
    identifier: "<value>",
  }, "<value>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { agentsCreate } from "@novu/api/funcs/agentsCreate.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await agentsCreate(novu, {
    name: "<value>",
    identifier: "<value>",
  }, "<value>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `novuAnalyticsSource`                                                                                                                                                          | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `createAgentRequestDto`                                                                                                                                                        | [components.CreateAgentRequestDto](../../models/components/createagentrequestdto.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `idempotencyKey`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A header for idempotency purposes                                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AgentsControllerCreateAgentResponse](../../models/operations/agentscontrollercreateagentresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.ErrorDto                        | 414                                    | application/json                       |
| errors.ErrorDto                        | 400, 401, 403, 404, 405, 409, 413, 415 | application/json                       |
| errors.ValidationErrorDto              | 422                                    | application/json                       |
| errors.ErrorDto                        | 500                                    | application/json                       |
| errors.SDKError                        | 4XX, 5XX                               | \*/\*                                  |

## list

Retrieve a cursor-paginated list of agents for the current environment. Use **after**, **before**, **limit**, **orderBy**, and **orderDirection** query parameters.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AgentsController_listAgents" method="get" path="/v1/agents" -->
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.agents.list({
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
import { agentsList } from "@novu/api/funcs/agentsList.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await agentsList(novu, {
    limit: 10,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AgentsControllerListAgentsRequest](../../models/operations/agentscontrollerlistagentsrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AgentsControllerListAgentsResponse](../../models/operations/agentscontrollerlistagentsresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.ErrorDto                        | 414                                    | application/json                       |
| errors.ErrorDto                        | 400, 401, 403, 404, 405, 409, 413, 415 | application/json                       |
| errors.ValidationErrorDto              | 422                                    | application/json                       |
| errors.ErrorDto                        | 500                                    | application/json                       |
| errors.SDKError                        | 4XX, 5XX                               | \*/\*                                  |

## sendReply

Send a message or side-effect into an existing agent conversation from your backend.

Use this endpoint when you are not using `@novu/framework` (for example Python, Go, PHP, .NET, or Java SDKs),
or when a server process outside the bridge needs to post into a live conversation.

**Message actions**
- `reply` — markdown, interactive card, or tool-approval card (optional `files`)
- `edit` — update a previously delivered message in place
- `deleteMessages` — remove rendered platform messages (history is kept)
- `addReactions` — add emoji reactions to existing messages

**Turn control**
- `typing` — `{ status?: string }` to set status, or `"stop"` to clear
- `resolve` — mark the conversation resolved (optionally with a final reply)
- `error: true` — report a customer-runtime failure (cannot combine with other actions)

**Signals & tools**
- `signals` — metadata set/delete/clear, or trigger a Novu workflow
- `toolResults` — persist tool outputs into conversation history
- `toolApprovalRequest` — ledger a gated tool call (pair with an approval card reply)

Returns `{ data: { messageId, platformThreadId } }` when a reply or edit is delivered;
otherwise `{ data: null }`.

### Example Usage: addReaction

<!-- UsageSnippet language="typescript" operationID="AgentReplyController_handleAgentReplyHandler" method="post" path="/v1/agents/{agentId}/reply" example="addReaction" -->
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.agents.sendReply({
    conversationId: "64f5a1c2e8b7a3d9f0c1b2a3",
    integrationIdentifier: "slack-support",
    addReactions: [
      {
        messageId: "1712345678.123456",
        emojiName: "white_check_mark",
      },
    ],
  }, "support-agent");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { agentsSendReply } from "@novu/api/funcs/agentsSendReply.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await agentsSendReply(novu, {
    conversationId: "64f5a1c2e8b7a3d9f0c1b2a3",
    integrationIdentifier: "slack-support",
    addReactions: [
      {
        messageId: "1712345678.123456",
        emojiName: "white_check_mark",
      },
    ],
  }, "support-agent");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsSendReply failed:", res.error);
  }
}

run();
```
### Example Usage: cardReply

<!-- UsageSnippet language="typescript" operationID="AgentReplyController_handleAgentReplyHandler" method="post" path="/v1/agents/{agentId}/reply" example="cardReply" -->
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.agents.sendReply({
    conversationId: "64f5a1c2e8b7a3d9f0c1b2a3",
    integrationIdentifier: "slack-support",
    reply: {
      card: {
        "type": "card",
        "title": "Order #123",
        "children": [
          {
            "type": "text",
            "content": "Your order is ready for pickup.",
          },
          {
            "type": "button",
            "id": "confirm",
            "label": "Confirm",
            "style": "primary",
          },
        ],
      },
    },
  }, "support-agent");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { agentsSendReply } from "@novu/api/funcs/agentsSendReply.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await agentsSendReply(novu, {
    conversationId: "64f5a1c2e8b7a3d9f0c1b2a3",
    integrationIdentifier: "slack-support",
    reply: {
      card: {
        "type": "card",
        "title": "Order #123",
        "children": [
          {
            "type": "text",
            "content": "Your order is ready for pickup.",
          },
          {
            "type": "button",
            "id": "confirm",
            "label": "Confirm",
            "style": "primary",
          },
        ],
      },
    },
  }, "support-agent");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsSendReply failed:", res.error);
  }
}

run();
```
### Example Usage: deleteMessage

<!-- UsageSnippet language="typescript" operationID="AgentReplyController_handleAgentReplyHandler" method="post" path="/v1/agents/{agentId}/reply" example="deleteMessage" -->
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.agents.sendReply({
    conversationId: "64f5a1c2e8b7a3d9f0c1b2a3",
    integrationIdentifier: "slack-support",
    deleteMessages: [
      {
        messageId: "1712345678.123456",
      },
    ],
  }, "support-agent");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { agentsSendReply } from "@novu/api/funcs/agentsSendReply.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await agentsSendReply(novu, {
    conversationId: "64f5a1c2e8b7a3d9f0c1b2a3",
    integrationIdentifier: "slack-support",
    deleteMessages: [
      {
        messageId: "1712345678.123456",
      },
    ],
  }, "support-agent");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsSendReply failed:", res.error);
  }
}

run();
```
### Example Usage: editMessage

<!-- UsageSnippet language="typescript" operationID="AgentReplyController_handleAgentReplyHandler" method="post" path="/v1/agents/{agentId}/reply" example="editMessage" -->
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.agents.sendReply({
    conversationId: "64f5a1c2e8b7a3d9f0c1b2a3",
    integrationIdentifier: "slack-support",
    edit: {
      messageId: "1712345678.123456",
      content: {
        markdown: "Updated: the report is now final.",
      },
    },
  }, "support-agent");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { agentsSendReply } from "@novu/api/funcs/agentsSendReply.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await agentsSendReply(novu, {
    conversationId: "64f5a1c2e8b7a3d9f0c1b2a3",
    integrationIdentifier: "slack-support",
    edit: {
      messageId: "1712345678.123456",
      content: {
        markdown: "Updated: the report is now final.",
      },
    },
  }, "support-agent");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsSendReply failed:", res.error);
  }
}

run();
```
### Example Usage: markdownReply

<!-- UsageSnippet language="typescript" operationID="AgentReplyController_handleAgentReplyHandler" method="post" path="/v1/agents/{agentId}/reply" example="markdownReply" -->
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.agents.sendReply({
    conversationId: "64f5a1c2e8b7a3d9f0c1b2a3",
    integrationIdentifier: "slack-support",
    reply: {
      markdown: "**Report ready.** Your weekly summary is attached.",
    },
  }, "support-agent");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { agentsSendReply } from "@novu/api/funcs/agentsSendReply.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await agentsSendReply(novu, {
    conversationId: "64f5a1c2e8b7a3d9f0c1b2a3",
    integrationIdentifier: "slack-support",
    reply: {
      markdown: "**Report ready.** Your weekly summary is attached.",
    },
  }, "support-agent");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsSendReply failed:", res.error);
  }
}

run();
```
### Example Usage: metadataSignal

<!-- UsageSnippet language="typescript" operationID="AgentReplyController_handleAgentReplyHandler" method="post" path="/v1/agents/{agentId}/reply" example="metadataSignal" -->
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.agents.sendReply({
    conversationId: "64f5a1c2e8b7a3d9f0c1b2a3",
    integrationIdentifier: "slack-support",
    signals: [
      {
        type: "trigger",
        workflowId: "order-shipped",
        to: "subscriber-123",
        payload: {
          "orderId": "ORD-42",
        },
      },
    ],
  }, "support-agent");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { agentsSendReply } from "@novu/api/funcs/agentsSendReply.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await agentsSendReply(novu, {
    conversationId: "64f5a1c2e8b7a3d9f0c1b2a3",
    integrationIdentifier: "slack-support",
    signals: [
      {
        type: "trigger",
        workflowId: "order-shipped",
        to: "subscriber-123",
        payload: {
          "orderId": "ORD-42",
        },
      },
    ],
  }, "support-agent");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsSendReply failed:", res.error);
  }
}

run();
```
### Example Usage: replyWithFile

<!-- UsageSnippet language="typescript" operationID="AgentReplyController_handleAgentReplyHandler" method="post" path="/v1/agents/{agentId}/reply" example="replyWithFile" -->
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.agents.sendReply({
    conversationId: "64f5a1c2e8b7a3d9f0c1b2a3",
    integrationIdentifier: "slack-support",
    reply: {
      markdown: "Here is your report.",
      files: [
        {
          filename: "report.pdf",
          mimeType: "application/pdf",
          url: "https://example.com/files/report.pdf",
        },
      ],
    },
  }, "support-agent");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { agentsSendReply } from "@novu/api/funcs/agentsSendReply.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await agentsSendReply(novu, {
    conversationId: "64f5a1c2e8b7a3d9f0c1b2a3",
    integrationIdentifier: "slack-support",
    reply: {
      markdown: "Here is your report.",
      files: [
        {
          filename: "report.pdf",
          mimeType: "application/pdf",
          url: "https://example.com/files/report.pdf",
        },
      ],
    },
  }, "support-agent");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsSendReply failed:", res.error);
  }
}

run();
```
### Example Usage: resolveConversation

<!-- UsageSnippet language="typescript" operationID="AgentReplyController_handleAgentReplyHandler" method="post" path="/v1/agents/{agentId}/reply" example="resolveConversation" -->
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.agents.sendReply({
    conversationId: "64f5a1c2e8b7a3d9f0c1b2a3",
    integrationIdentifier: "slack-support",
    reply: {
      markdown: "Glad that helped — marking this as resolved.",
    },
    resolve: {
      summary: "Answered billing question about invoice INV-42.",
    },
  }, "support-agent");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { agentsSendReply } from "@novu/api/funcs/agentsSendReply.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await agentsSendReply(novu, {
    conversationId: "64f5a1c2e8b7a3d9f0c1b2a3",
    integrationIdentifier: "slack-support",
    reply: {
      markdown: "Glad that helped — marking this as resolved.",
    },
    resolve: {
      summary: "Answered billing question about invoice INV-42.",
    },
  }, "support-agent");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsSendReply failed:", res.error);
  }
}

run();
```
### Example Usage: toolApprovalRequest

<!-- UsageSnippet language="typescript" operationID="AgentReplyController_handleAgentReplyHandler" method="post" path="/v1/agents/{agentId}/reply" example="toolApprovalRequest" -->
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.agents.sendReply({
    conversationId: "64f5a1c2e8b7a3d9f0c1b2a3",
    integrationIdentifier: "slack-support",
    reply: {
      toolApprovalCard: {
        "type": "tool-approval-card",
        "title": "Approve refund?",
        "subtitle": "issue_refund · ORD-42 · $25.00",
        "approveLabel": "Approve",
        "denyLabel": "Deny",
      },
    },
    toolApprovalRequest: {
      approvalId: "apr_01HZX",
      toolCallId: "call_refund_1",
      name: "issue_refund",
      input: {
        "orderId": "ORD-42",
        "amountCents": 2500,
      },
    },
  }, "support-agent");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { agentsSendReply } from "@novu/api/funcs/agentsSendReply.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await agentsSendReply(novu, {
    conversationId: "64f5a1c2e8b7a3d9f0c1b2a3",
    integrationIdentifier: "slack-support",
    reply: {
      toolApprovalCard: {
        "type": "tool-approval-card",
        "title": "Approve refund?",
        "subtitle": "issue_refund · ORD-42 · $25.00",
        "approveLabel": "Approve",
        "denyLabel": "Deny",
      },
    },
    toolApprovalRequest: {
      approvalId: "apr_01HZX",
      toolCallId: "call_refund_1",
      name: "issue_refund",
      input: {
        "orderId": "ORD-42",
        "amountCents": 2500,
      },
    },
  }, "support-agent");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsSendReply failed:", res.error);
  }
}

run();
```
### Example Usage: toolResult

<!-- UsageSnippet language="typescript" operationID="AgentReplyController_handleAgentReplyHandler" method="post" path="/v1/agents/{agentId}/reply" example="toolResult" -->
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.agents.sendReply({
    conversationId: "64f5a1c2e8b7a3d9f0c1b2a3",
    integrationIdentifier: "slack-support",
    reply: {
      markdown: "Your order **ORD-42** has shipped and should arrive by July 16.",
    },
    toolResults: [
      {
        toolCallId: "call_abc123",
        toolName: "lookup_order",
        output: {},
        preview: "Order ORD-42 is shipped",
      },
    ],
  }, "support-agent");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { agentsSendReply } from "@novu/api/funcs/agentsSendReply.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await agentsSendReply(novu, {
    conversationId: "64f5a1c2e8b7a3d9f0c1b2a3",
    integrationIdentifier: "slack-support",
    reply: {
      markdown: "Your order **ORD-42** has shipped and should arrive by July 16.",
    },
    toolResults: [
      {
        toolCallId: "call_abc123",
        toolName: "lookup_order",
        output: {},
        preview: "Order ORD-42 is shipped",
      },
    ],
  }, "support-agent");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsSendReply failed:", res.error);
  }
}

run();
```
### Example Usage: triggerWorkflow

<!-- UsageSnippet language="typescript" operationID="AgentReplyController_handleAgentReplyHandler" method="post" path="/v1/agents/{agentId}/reply" example="triggerWorkflow" -->
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.agents.sendReply({
    conversationId: "64f5a1c2e8b7a3d9f0c1b2a3",
    integrationIdentifier: "slack-support",
    signals: [
      {
        type: "trigger",
        workflowId: "order-shipped",
        to: "subscriber-123",
        payload: {
          "orderId": "ORD-42",
        },
      },
    ],
  }, "support-agent");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { agentsSendReply } from "@novu/api/funcs/agentsSendReply.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await agentsSendReply(novu, {
    conversationId: "64f5a1c2e8b7a3d9f0c1b2a3",
    integrationIdentifier: "slack-support",
    signals: [
      {
        type: "trigger",
        workflowId: "order-shipped",
        to: "subscriber-123",
        payload: {
          "orderId": "ORD-42",
        },
      },
    ],
  }, "support-agent");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsSendReply failed:", res.error);
  }
}

run();
```
### Example Usage: turnError

<!-- UsageSnippet language="typescript" operationID="AgentReplyController_handleAgentReplyHandler" method="post" path="/v1/agents/{agentId}/reply" example="turnError" -->
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.agents.sendReply({
    conversationId: "64f5a1c2e8b7a3d9f0c1b2a3",
    integrationIdentifier: "slack-support",
    error: true,
  }, "support-agent");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { agentsSendReply } from "@novu/api/funcs/agentsSendReply.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await agentsSendReply(novu, {
    conversationId: "64f5a1c2e8b7a3d9f0c1b2a3",
    integrationIdentifier: "slack-support",
    error: true,
  }, "support-agent");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsSendReply failed:", res.error);
  }
}

run();
```
### Example Usage: typingStart

<!-- UsageSnippet language="typescript" operationID="AgentReplyController_handleAgentReplyHandler" method="post" path="/v1/agents/{agentId}/reply" example="typingStart" -->
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.agents.sendReply({
    conversationId: "64f5a1c2e8b7a3d9f0c1b2a3",
    integrationIdentifier: "slack-support",
    typing: {
      status: "Looking up your order…",
    },
  }, "support-agent");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { agentsSendReply } from "@novu/api/funcs/agentsSendReply.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await agentsSendReply(novu, {
    conversationId: "64f5a1c2e8b7a3d9f0c1b2a3",
    integrationIdentifier: "slack-support",
    typing: {
      status: "Looking up your order…",
    },
  }, "support-agent");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsSendReply failed:", res.error);
  }
}

run();
```
### Example Usage: typingStop

<!-- UsageSnippet language="typescript" operationID="AgentReplyController_handleAgentReplyHandler" method="post" path="/v1/agents/{agentId}/reply" example="typingStop" -->
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.agents.sendReply({
    conversationId: "64f5a1c2e8b7a3d9f0c1b2a3",
    integrationIdentifier: "slack-support",
    typing: "stop",
  }, "support-agent");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { agentsSendReply } from "@novu/api/funcs/agentsSendReply.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await agentsSendReply(novu, {
    conversationId: "64f5a1c2e8b7a3d9f0c1b2a3",
    integrationIdentifier: "slack-support",
    typing: "stop",
  }, "support-agent");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsSendReply failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                     | Example                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `agentId`                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                              | Agent identifier (slug) for the agent that owns the conversation.                                                                                                                                                                               | support-agent                                                                                                                                                                                                                                   |
| `agentReplyPayloadDto`                                                                                                                                                                                                                          | [components.AgentReplyPayloadDto](../../models/components/agentreplypayloaddto.md)                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                              | Reply payload. Provide at least one action: `reply`, `edit`, `resolve`, `signals`, `toolResults`, `toolApprovalRequest`, `addReactions`, `deleteMessages`, `typing`, or `error`. See named examples for common shapes used by server-side SDKs. |                                                                                                                                                                                                                                                 |
| `idempotencyKey`                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                              | A header for idempotency purposes                                                                                                                                                                                                               |                                                                                                                                                                                                                                                 |
| `options`                                                                                                                                                                                                                                       | RequestOptions                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                              | Used to set various options for making HTTP requests.                                                                                                                                                                                           |                                                                                                                                                                                                                                                 |
| `options.fetchOptions`                                                                                                                                                                                                                          | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                              | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                  |                                                                                                                                                                                                                                                 |
| `options.retries`                                                                                                                                                                                                                               | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                              | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                |                                                                                                                                                                                                                                                 |

### Response

**Promise\<[operations.AgentReplyControllerHandleAgentReplyHandlerResponse](../../models/operations/agentreplycontrollerhandleagentreplyhandlerresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorDto                   | 414                               | application/json                  |
| errors.ErrorDto                   | 400, 401, 403, 405, 409, 413, 415 | application/json                  |
| errors.ValidationErrorDto         | 422                               | application/json                  |
| errors.ErrorDto                   | 500                               | application/json                  |
| errors.SDKError                   | 4XX, 5XX                          | \*/\*                             |

## retrieve

Retrieve an agent by its external identifier (not the internal MongoDB id).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AgentsController_getAgent" method="get" path="/v1/agents/{identifier}" -->
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.agents.retrieve("<value>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { agentsRetrieve } from "@novu/api/funcs/agentsRetrieve.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await agentsRetrieve(novu, "<value>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsRetrieve failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `identifier`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `idempotencyKey`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A header for idempotency purposes                                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AgentsControllerGetAgentResponse](../../models/operations/agentscontrollergetagentresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorDto                   | 414                               | application/json                  |
| errors.ErrorDto                   | 400, 401, 403, 405, 409, 413, 415 | application/json                  |
| errors.ValidationErrorDto         | 422                               | application/json                  |
| errors.ErrorDto                   | 500                               | application/json                  |
| errors.SDKError                   | 4XX, 5XX                          | \*/\*                             |

## update

Update an agent by its external identifier.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AgentsController_updateAgent" method="patch" path="/v1/agents/{identifier}" -->
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.agents.update({}, "<value>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { agentsUpdate } from "@novu/api/funcs/agentsUpdate.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await agentsUpdate(novu, {}, "<value>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `identifier`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `updateAgentRequestDto`                                                                                                                                                        | [components.UpdateAgentRequestDto](../../models/components/updateagentrequestdto.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `idempotencyKey`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A header for idempotency purposes                                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AgentsControllerUpdateAgentResponse](../../models/operations/agentscontrollerupdateagentresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorDto                   | 414                               | application/json                  |
| errors.ErrorDto                   | 400, 401, 403, 405, 409, 413, 415 | application/json                  |
| errors.ValidationErrorDto         | 422                               | application/json                  |
| errors.ErrorDto                   | 500                               | application/json                  |
| errors.SDKError                   | 4XX, 5XX                          | \*/\*                             |

## delete

Delete an agent by identifier and remove all agent-integration links. For managed-runtime agents, pass `deleteFromProvider=true` to also archive the agent on the provider side (e.g. Anthropic). By default only the Novu record is deleted and the provider agent is left intact.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AgentsController_deleteAgent" method="delete" path="/v1/agents/{identifier}" -->
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.agents.delete("<value>", "<value>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { agentsDelete } from "@novu/api/funcs/agentsDelete.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await agentsDelete(novu, "<value>", "<value>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `identifier`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `deleteFromProvider`                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `idempotencyKey`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A header for idempotency purposes                                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AgentsControllerDeleteAgentResponse](../../models/operations/agentscontrollerdeleteagentresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorDto                   | 414                               | application/json                  |
| errors.ErrorDto                   | 400, 401, 403, 405, 409, 413, 415 | application/json                  |
| errors.ValidationErrorDto         | 422                               | application/json                  |
| errors.ErrorDto                   | 500                               | application/json                  |
| errors.SDKError                   | 4XX, 5XX                          | \*/\*                             |

## updateBridge

Update the bridge URL configuration for an agent. Used by the CLI to register dev tunnel URLs. Refuses to activate dev bridges on production environments.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AgentsController_updateAgentBridge" method="put" path="/v1/agents/{identifier}/bridge" -->
```typescript
import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const result = await novu.agents.updateBridge({}, "<value>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NovuCore } from "@novu/api/core.js";
import { agentsUpdateBridge } from "@novu/api/funcs/agentsUpdateBridge.js";

// Use `NovuCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const novu = new NovuCore({
  secretKey: "YOUR_SECRET_KEY_HERE",
});

async function run() {
  const res = await agentsUpdateBridge(novu, {}, "<value>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsUpdateBridge failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `identifier`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `updateAgentBridgeRequestDto`                                                                                                                                                  | [components.UpdateAgentBridgeRequestDto](../../models/components/updateagentbridgerequestdto.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `idempotencyKey`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A header for idempotency purposes                                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AgentsControllerUpdateAgentBridgeResponse](../../models/operations/agentscontrollerupdateagentbridgeresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorDto                   | 414                               | application/json                  |
| errors.ErrorDto                   | 400, 401, 403, 405, 409, 413, 415 | application/json                  |
| errors.ValidationErrorDto         | 422                               | application/json                  |
| errors.ErrorDto                   | 500                               | application/json                  |
| errors.SDKError                   | 4XX, 5XX                          | \*/\*                             |