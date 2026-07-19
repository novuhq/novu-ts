# AgentReplyPayloadDto

## Example Usage

```typescript
import { AgentReplyPayloadDto } from "@novu/api/models/components";

let value: AgentReplyPayloadDto = {
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
      action: "set",
      key: "crm:ticketId",
      value: {},
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
};
```

## Fields

| Field                                                                                                                                                                   | Type                                                                                                                                                                    | Required                                                                                                                                                                | Description                                                                                                                                                             | Example                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `conversationId`                                                                                                                                                        | *string*                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                      | Conversation id to reply into. Obtained from the inbound agent event / bridge payload.                                                                                  | 64f5a1c2e8b7a3d9f0c1b2a3                                                                                                                                                |
| `integrationIdentifier`                                                                                                                                                 | *string*                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                      | Channel integration identifier linked to the agent for this conversation (e.g. `slack-support`).                                                                        | slack-support                                                                                                                                                           |
| `reply`                                                                                                                                                                 | *components.Reply*                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                      | Outbound message content. Exactly one of `markdown`, `card`, or `toolApprovalCard`. Optional `files` attach to the message. Cannot be combined with `edit`.             |                                                                                                                                                                         |
| `toolApprovalRequest`                                                                                                                                                   | [components.ToolApprovalRequestPayloadDto](../../models/components/toolapprovalrequestpayloaddto.md)                                                                    | :heavy_minus_sign:                                                                                                                                                      | Tool-lifecycle ledger row for a gated tool call. Pair with `reply.toolApprovalCard` (or another reply shape) to deliver the approval UI.                                |                                                                                                                                                                         |
| `edit`                                                                                                                                                                  | [components.EditPayloadDto](../../models/components/editpayloaddto.md)                                                                                                  | :heavy_minus_sign:                                                                                                                                                      | In-place edit of a previously posted agent message. Cannot be combined with reply, resolve, signals, toolResults, toolApprovalRequest, addReactions, or deleteMessages. |                                                                                                                                                                         |
| `resolve`                                                                                                                                                               | [components.ResolveDto](../../models/components/resolvedto.md)                                                                                                          | :heavy_minus_sign:                                                                                                                                                      | Mark the conversation resolved. May be combined with a final `reply`.                                                                                                   |                                                                                                                                                                         |
| `signals`                                                                                                                                                               | *components.Signals*[]                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                      | Side-effect signals executed during this turn: conversation metadata mutations or Novu workflow triggers.                                                               |                                                                                                                                                                         |
| `toolResults`                                                                                                                                                           | [components.ToolResultDto](../../models/components/toolresultdto.md)[]                                                                                                  | :heavy_minus_sign:                                                                                                                                                      | Tool-call outcomes to persist in conversation history (typically before the assistant reply).                                                                           |                                                                                                                                                                         |
| `addReactions`                                                                                                                                                          | [components.AddReactionPayloadDto](../../models/components/addreactionpayloaddto.md)[]                                                                                  | :heavy_minus_sign:                                                                                                                                                      | Emoji reactions to add to existing platform messages.                                                                                                                   |                                                                                                                                                                         |
| `deleteMessages`                                                                                                                                                        | [components.DeleteMessagePayloadDto](../../models/components/deletemessagepayloaddto.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                                      | Delete previously posted platform messages. Removes the rendered message only — history is preserved.                                                                   |                                                                                                                                                                         |
| `typing`                                                                                                                                                                | *components.Typing*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                      | Per-turn typing/status control. Pass `{ status?: string }` to set/update the status (omit `status` for "Thinking…"), or `"stop"` to clear it. Best-effort per platform. | {<br/>"status": "Looking up your order…"<br/>}                                                                                                                          |
| `error`                                                                                                                                                                 | *boolean*                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                      | Bridge reports that the customer runtime failed this turn. Cannot be combined with other actions. Novu delivers generic user-facing error copy.                         | true                                                                                                                                                                    |