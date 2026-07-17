# AgentReplyControllerHandleAgentReplyHandlerRequest

## Example Usage

```typescript
import { AgentReplyControllerHandleAgentReplyHandlerRequest } from "@novu/api/models/operations";

let value: AgentReplyControllerHandleAgentReplyHandlerRequest = {
  agentId: "support-agent",
  agentReplyPayloadDto: {
    conversationId: "64f5a1c2e8b7a3d9f0c1b2a3",
    integrationIdentifier: "slack-support",
    reply: {
      markdown: "**Report ready.** Your weekly summary is attached.",
      files: [
        {
          filename: "report.pdf",
          mimeType: "application/pdf",
          data: "JVBERi0xLjQK...",
          url: "https://example.com/files/report.pdf",
        },
      ],
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
    edit: {
      messageId: "1712345678.123456",
      content: {
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
        files: [
          {
            filename: "report.pdf",
            mimeType: "application/pdf",
            data: "JVBERi0xLjQK...",
            url: "https://example.com/files/report.pdf",
          },
        ],
      },
    },
    resolve: {
      summary: "Answered billing question about invoice INV-42.",
    },
    signals: [
      {
        type: "metadata",
        action: "clear",
      },
    ],
    toolResults: [
      {
        toolCallId: "call_abc123",
        toolName: "lookup_order",
        preview: "Order ORD-42 is shipped",
      },
    ],
    addReactions: [
      {
        messageId: "1712345678.123456",
        emojiName: "white_check_mark",
      },
    ],
    deleteMessages: [
      {
        messageId: "1712345678.123456",
      },
    ],
    typing: {
      status: "Looking up your order…",
    },
    error: true,
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                     | Example                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `agentId`                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                              | Agent identifier (slug) for the agent that owns the conversation.                                                                                                                                                                               | support-agent                                                                                                                                                                                                                                   |
| `idempotencyKey`                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                              | A header for idempotency purposes                                                                                                                                                                                                               |                                                                                                                                                                                                                                                 |
| `agentReplyPayloadDto`                                                                                                                                                                                                                          | [components.AgentReplyPayloadDto](../../models/components/agentreplypayloaddto.md)                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                              | Reply payload. Provide at least one action: `reply`, `edit`, `resolve`, `signals`, `toolResults`, `toolApprovalRequest`, `addReactions`, `deleteMessages`, `typing`, or `error`. See named examples for common shapes used by server-side SDKs. |                                                                                                                                                                                                                                                 |