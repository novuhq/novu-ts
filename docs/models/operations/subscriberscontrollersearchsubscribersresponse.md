# SubscribersControllerSearchSubscribersResponse

## Example Usage

```typescript
import { SubscribersControllerSearchSubscribersResponse } from "@novu/api/models/operations";

let value: SubscribersControllerSearchSubscribersResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    data: [
      {
        firstName: "Austyn",
        lastName: "Doyle",
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
        subscriberId: "<id>",
        organizationId: "<id>",
        environmentId: "<id>",
        deleted: true,
        createdAt: "1705383873554",
        updatedAt: "1735620479568",
      },
    ],
    next: "<value>",
    previous: "<value>",
    totalCount: 7720.83,
    totalCountCapped: false,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `headers`                                                                                      | Record<string, *string*[]>                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `result`                                                                                       | [components.ListSubscribersResponseDto](../../models/components/listsubscribersresponsedto.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |