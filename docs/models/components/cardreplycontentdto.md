# CardReplyContentDto

## Example Usage

```typescript
import { CardReplyContentDto } from "@novu/api/models/components";

let value: CardReplyContentDto = {
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

## Fields

| Field                                                                                                                                                                                                      | Type                                                                                                                                                                                                       | Required                                                                                                                                                                                                   | Description                                                                                                                                                                                                | Example                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `card`                                                                                                                                                                                                     | Record<string, *any*>                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                         | Interactive card as a Chat SDK element tree (`type: "card"`). Prefer building with `@novu/framework` Card helpers when using TypeScript.                                                                   | {<br/>"type": "card",<br/>"title": "Order #123",<br/>"children": [<br/>{<br/>"type": "text",<br/>"content": "Your order is ready for pickup."<br/>},<br/>{<br/>"type": "button",<br/>"id": "confirm",<br/>"label": "Confirm",<br/>"style": "primary"<br/>}<br/>]<br/>} |
| `files`                                                                                                                                                                                                    | [components.FileRefDto](../../models/components/filerefdto.md)[]                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                         | Optional attachments (max 15). Supported alongside cards on platforms that allow it (e.g. WhatsApp).                                                                                                       |                                                                                                                                                                                                            |