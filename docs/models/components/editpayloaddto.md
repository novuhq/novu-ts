# EditPayloadDto

## Example Usage

```typescript
import { EditPayloadDto } from "@novu/api/models/components";

let value: EditPayloadDto = {
  messageId: "1712345678.123456",
  content: {
    toolApprovalCard: {
      "type": "tool-approval-card",
      "title": "Approve refund?",
      "subtitle": "issue_refund · ORD-42 · $25.00",
      "approveLabel": "Approve",
      "denyLabel": "Deny",
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
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `messageId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | Platform message id of the message to edit.                              | 1712345678.123456                                                        |
| `content`                                                                | *components.Content*                                                     | :heavy_check_mark:                                                       | Replacement content. Exactly one of markdown, card, or toolApprovalCard. |                                                                          |