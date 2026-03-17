# SubscribersControllerCreateSubscriberResponse

## Example Usage

```typescript
import { SubscribersControllerCreateSubscriberResponse } from "@novu/api/models/operations";

let value: SubscribersControllerCreateSubscriberResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    firstName: "Mason",
    lastName: "Kuvalis",
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
    isOnline: null,
    lastOnlineAt: null,
    subscriberId: "<id>",
    organizationId: "<id>",
    environmentId: "<id>",
    deleted: false,
    createdAt: "1725616712251",
    updatedAt: "1735627647106",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.SubscriberResponseDto](../../models/components/subscriberresponsedto.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |