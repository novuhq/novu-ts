# SubscribersControllerGetNotificationsFeedResponse

## Example Usage

```typescript
import { SubscribersControllerGetNotificationsFeedResponse } from "@novu/api/models/operations";

let value: SubscribersControllerGetNotificationsFeedResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    hasMore: false,
    data: [
      {
        id: "<id>",
        templateId: "<id>",
        environmentId: "<id>",
        messageTemplateId: "<id>",
        organizationId: "<id>",
        notificationId: "<id>",
        subscriberId: "<id>",
        feedId: "<id>",
        jobId: "<id>",
        transactionId: "<id>",
        content: "<value>",
        channel: "chat",
        read: false,
        seen: false,
        deleted: false,
        cta: {
          data: {},
        },
        status: "error",
      },
    ],
    pageSize: 6169.34,
    page: 9437.48,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [components.FeedResponseDto](../../models/components/feedresponsedto.md) | :heavy_check_mark:                                                       | N/A                                                                      |