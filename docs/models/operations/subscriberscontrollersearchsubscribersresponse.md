# SubscribersControllerSearchSubscribersResponse

## Example Usage

```typescript
import { SubscribersControllerSearchSubscribersResponse } from "@novu/api/models/operations";

let value: SubscribersControllerSearchSubscribersResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    data: [
      {
        channels: [
          {
            providerId: "apns",
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
        deleted: true,
        createdAt: "1707186272785",
        updatedAt: "1735684986103",
      },
    ],
    next: "<value>",
    previous: "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `headers`                                                                                      | Record<string, *string*[]>                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `result`                                                                                       | [components.ListSubscribersResponseDto](../../models/components/listsubscribersresponsedto.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |