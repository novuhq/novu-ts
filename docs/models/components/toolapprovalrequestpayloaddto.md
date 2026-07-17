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
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `approvalId`                                                         | *string*                                                             | :heavy_check_mark:                                                   | Unique id for this approval request (matches the AI SDK approvalId). | apr_01HZX                                                            |
| `toolCallId`                                                         | *string*                                                             | :heavy_check_mark:                                                   | Id of the tool call awaiting approval.                               | call_refund_1                                                        |
| `name`                                                               | *string*                                                             | :heavy_check_mark:                                                   | Name of the gated tool.                                              | issue_refund                                                         |
| `input`                                                              | Record<string, *any*>                                                | :heavy_minus_sign:                                                   | Tool input the model proposed.                                       | {<br/>"orderId": "ORD-42",<br/>"amountCents": 2500<br/>}             |