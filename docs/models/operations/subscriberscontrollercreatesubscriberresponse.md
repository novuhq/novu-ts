# SubscribersControllerCreateSubscriberResponse

## Example Usage

```typescript
import { SubscribersControllerCreateSubscriberResponse } from "@novu/api/models/operations";

let value: SubscribersControllerCreateSubscriberResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    channels: [
      {
        providerId: "discord",
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
    subscriberId: "<id>",
    organizationId: "<id>",
    environmentId: "<id>",
    deleted: false,
    createdAt: "1745340050730",
    updatedAt: "1747124361601",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.SubscriberResponseDto](../../models/components/subscriberresponsedto.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |