# WorkflowControllerGeneratePreviewResponse

## Example Usage

```typescript
import { WorkflowControllerGeneratePreviewResponse } from "@novu/api/models/operations";

let value: WorkflowControllerGeneratePreviewResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
    ],
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
      context: {
        "key": "org-acme",
      },
    },
    result: {},
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `headers`                                                                                      | Record<string, *string*[]>                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `result`                                                                                       | [components.GeneratePreviewResponseDto](../../models/components/generatepreviewresponsedto.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |