# ToolResultDto

## Example Usage

```typescript
import { ToolResultDto } from "@novu/api/models/components";

let value: ToolResultDto = {
  toolCallId: "call_abc123",
  toolName: "lookup_order",
  preview: "Order ORD-42 is shipped",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `toolCallId`                                                    | *string*                                                        | :heavy_check_mark:                                              | Id of the tool call this result resolves.                       | call_abc123                                                     |
| `toolName`                                                      | *string*                                                        | :heavy_minus_sign:                                              | Name of the tool that produced this result.                     | lookup_order                                                    |
| `output`                                                        | [components.Output](../../models/components/output.md)          | :heavy_minus_sign:                                              | JSON-serializable tool output (or the execution-denied marker). |                                                                 |
| `preview`                                                       | *string*                                                        | :heavy_minus_sign:                                              | Human-readable preview for the display timeline.                | Order ORD-42 is shipped                                         |