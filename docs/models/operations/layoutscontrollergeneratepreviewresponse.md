# LayoutsControllerGeneratePreviewResponse

## Example Usage

```typescript
import { LayoutsControllerGeneratePreviewResponse } from "@novu/api/models/operations";

let value: LayoutsControllerGeneratePreviewResponse = {
  headers: {
    "key": [],
  },
  result: {
    previewPayloadExample: {
      subscriber: {
        firstName: "Jacinto",
        lastName: null,
        channels: [
          {
            providerId: "chat-webhook",
            integrationIdentifier: "<value>",
            credentials: {
              webhookUrl: "https://example.com/webhook",
              channel: "general",
              deviceTokens: [
                "token1",
                "token2",
                "token3",
              ],
              alertUid: "12345-abcde",
              title: "Critical Alert",
              imageUrl: "https://example.com/image.png",
              state: "resolved",
              externalUrl: "https://example.com/details",
            },
            integrationId: "<id>",
          },
        ],
        isOnline: true,
        lastOnlineAt: "<value>",
      },
    },
    result: {},
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                  | Record<string, *string*[]>                                                                                 | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `result`                                                                                                   | [components.GenerateLayoutPreviewResponseDto](../../models/components/generatelayoutpreviewresponsedto.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |