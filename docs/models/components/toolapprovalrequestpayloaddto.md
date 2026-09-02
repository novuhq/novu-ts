# ToolApprovalRequestPayloadDto

## Example Usage

```typescript
import { ToolApprovalRequestPayloadDto } from "@novu/api/models/components";

let value: ToolApprovalRequestPayloadDto = {
  approvalId: "apr_01HZX",
  toolCallId: "call_refund_1",
  name: "issue_refund",
  input: {
    "orderId": "ORD-42",
    "amountCents": 2500,
  },
  approveActionId: "tool-approval:approve:apr_01HZX",
  denyActionId: "tool-approval:deny:apr_01HZX",
  mcpServerName: "GitHub",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `approvalId`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | Unique id for this approval request (matches the AI SDK approvalId).                             | apr_01HZX                                                                                        |
| `toolCallId`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | Id of the tool call awaiting approval.                                                           | call_refund_1                                                                                    |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | Name of the gated tool.                                                                          | issue_refund                                                                                     |
| `input`                                                                                          | Record<string, *any*>                                                                            | :heavy_minus_sign:                                                                               | Tool input the model proposed.                                                                   | {<br/>"orderId": "ORD-42",<br/>"amountCents": 2500<br/>}                                         |
| `approveActionId`                                                                                | *string*                                                                                         | :heavy_minus_sign:                                                                               | Server-minted approve action id. When omitted, self-hosted tool-approval:* is minted at persist. | tool-approval:approve:apr_01HZX                                                                  |
| `denyActionId`                                                                                   | *string*                                                                                         | :heavy_minus_sign:                                                                               | Server-minted deny action id. When omitted, self-hosted tool-approval:* is minted at persist.    | tool-approval:deny:apr_01HZX                                                                     |
| `mcpServerName`                                                                                  | *string*                                                                                         | :heavy_minus_sign:                                                                               | MCP server name when the gated tool is from an MCP server (for UI labels).                       | GitHub                                                                                           |