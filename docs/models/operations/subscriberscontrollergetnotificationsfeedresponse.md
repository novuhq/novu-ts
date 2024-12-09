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
    page: 4370.32,
    hasMore: false,
    pageSize: 6976.31,
    data: [
      {
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
            channel: "in_app",
            read: false,
            seen: false,
            deleted: false,
            cta: {
              data: {},
            },
            status: "warning",
            payload: {
              "key": "<value>",
            },
          },
        ],
        pageSize: 6706.38,
        page: 2103.83,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                            | Record<string, *string*[]>                                                                                                                           | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `result`                                                                                                                                             | [operations.SubscribersControllerGetNotificationsFeedResponseBody](../../models/operations/subscriberscontrollergetnotificationsfeedresponsebody.md) | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |