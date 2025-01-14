# SubscribersControllerMarkMessagesAsResponse

## Example Usage

```typescript
import { SubscribersControllerMarkMessagesAsResponse } from "@novu/api/models/operations";

let value: SubscribersControllerMarkMessagesAsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      templateId: "<id>",
      environmentId: "<id>",
      messageTemplateId: "<id>",
      organizationId: "<id>",
      notificationId: "<id>",
      subscriberId: "<id>",
      subscriber: {
        subscriberId: "<id>",
        channels: [
          {
            providerId: "expo",
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
        organizationId: "<id>",
        environmentId: "<id>",
        deleted: false,
        createdAt: "1706558212198",
        updatedAt: "1736796420260",
      },
      createdAt: "1709112904656",
      content: {
        type: "button",
        content: "<value>",
      },
      transactionId: "<id>",
      channel: "email",
      read: false,
      seen: false,
      cta: {
        data: {},
      },
      status: "error",
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `headers`                                                      | Record<string, *string*[]>                                     | :heavy_check_mark:                                             | N/A                                                            |
| `result`                                                       | *operations.SubscribersControllerMarkMessagesAsResponseResult* | :heavy_check_mark:                                             | N/A                                                            |