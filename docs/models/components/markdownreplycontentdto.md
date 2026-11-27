# MarkdownReplyContentDto

## Example Usage

```typescript
import { MarkdownReplyContentDto } from "@novu/api/models/components";

let value: MarkdownReplyContentDto = {
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

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `markdown`                                                                    | *string*                                                                      | :heavy_check_mark:                                                            | Plain text or markdown body. Converted to the platform-native format by Novu. | **Report ready.** Your weekly summary is attached.                            |
| `files`                                                                       | [components.FileRefDto](../../models/components/filerefdto.md)[]              | :heavy_minus_sign:                                                            | Optional attachments (max 15). Each file needs exactly one of data or url.    |                                                                               |