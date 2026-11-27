# ToolApprovalCardReplyContentDto

## Example Usage

```typescript
import { ToolApprovalCardReplyContentDto } from "@novu/api/models/components";

let value: ToolApprovalCardReplyContentDto = {
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
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                | Example                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `toolApprovalCard`                                                                                                                                         | Record<string, *any*>                                                                                                                                      | :heavy_check_mark:                                                                                                                                         | Novu tool-approval card descriptor (`type: "tool-approval-card"`). Used with `toolApprovalRequest` to render Approve/Deny UI.                              | {<br/>"type": "tool-approval-card",<br/>"title": "Approve refund?",<br/>"subtitle": "issue_refund · ORD-42 · $25.00",<br/>"approveLabel": "Approve",<br/>"denyLabel": "Deny"<br/>} |
| `files`                                                                                                                                                    | [components.FileRefDto](../../models/components/filerefdto.md)[]                                                                                           | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |                                                                                                                                                            |