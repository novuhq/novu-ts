# SubscribersControllerGetSubscriberResponse

## Example Usage

```typescript
import { SubscribersControllerGetSubscriberResponse } from "@novu/api/models/operations";

let value: SubscribersControllerGetSubscriberResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    subscriberId: "<id>",
    channels: [
      {
        providerId: "whatsapp-business",
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
    createdAt: "1741092980528",
    updatedAt: "1743359103312",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.SubscriberResponseDto](../../models/components/subscriberresponsedto.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |