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
    page: 9786.18,
    hasMore: false,
    pageSize: 7991.59,
    data: [
      {
        subscriberId: "<id>",
        channels: [
          {
            providerId: "getstream",
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
        createdAt: "1728022678444",
        updatedAt: "1734867729913",
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