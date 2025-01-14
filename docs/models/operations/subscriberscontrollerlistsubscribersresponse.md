# SubscribersControllerListSubscribersResponse

## Example Usage

```typescript
import { SubscribersControllerListSubscribersResponse } from "@novu/api/models/operations";

let value: SubscribersControllerListSubscribersResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    page: 5218.48,
    hasMore: false,
    pageSize: 4146.62,
    data: [
      {
        subscriberId: "<id>",
        channels: [
          {
            providerId: "ryver",
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
        createdAt: "1729737822348",
        updatedAt: "1736810600425",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                                  | Record<string, *string*[]>                                                                                                                 | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `result`                                                                                                                                   | [operations.SubscribersControllerListSubscribersResponseBody](../../models/operations/subscriberscontrollerlistsubscribersresponsebody.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |