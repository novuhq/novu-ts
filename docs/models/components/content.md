# Content

Replacement content. Exactly one of markdown, card, or toolApprovalCard.


## Supported Types

### `components.MarkdownReplyContentDto`

```typescript
const value: components.MarkdownReplyContentDto = {
  markdown: "**Report ready.** Your weekly summary is attached.",
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

### `components.CardReplyContentDto`

```typescript
const value: components.CardReplyContentDto = {
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
};
```

### `components.ToolApprovalCardReplyContentDto`

```typescript
const value: components.ToolApprovalCardReplyContentDto = {
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

