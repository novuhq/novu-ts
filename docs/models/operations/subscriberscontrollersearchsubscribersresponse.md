# SubscribersControllerSearchSubscribersResponse

## Example Usage

```typescript
import { SubscribersControllerSearchSubscribersResponse } from "@novu/api/models/operations";

let value: SubscribersControllerSearchSubscribersResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    data: [
      {
        channels: [
          {
            providerId: "slack",
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
        createdAt: "1734343132968",
        updatedAt: "1746599465536",
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