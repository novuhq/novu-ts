# SubscribersV1ControllerListSubscribersResponseBody

## Example Usage

```typescript
import { SubscribersV1ControllerListSubscribersResponseBody } from "@novu/api/models/operations";

let value: SubscribersV1ControllerListSubscribersResponseBody = {
  page: 9399.74,
  hasMore: false,
  pageSize: 3588.74,
  data: [
    {
      channels: [
        {
          providerId: "fcm",
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
      createdAt: "1733242281372",
      updatedAt: "1747098760601",
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `page`                                                                                 | *number*                                                                               | :heavy_check_mark:                                                                     | The current page of the paginated response                                             |
| `hasMore`                                                                              | *boolean*                                                                              | :heavy_check_mark:                                                                     | Does the list have more items to fetch                                                 |
| `pageSize`                                                                             | *number*                                                                               | :heavy_check_mark:                                                                     | Number of items on each page                                                           |
| `data`                                                                                 | [components.SubscriberResponseDto](../../models/components/subscriberresponsedto.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |