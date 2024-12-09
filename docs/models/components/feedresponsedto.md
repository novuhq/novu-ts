# FeedResponseDto

## Example Usage

```typescript
import { FeedResponseDto } from "@novu/api/models/components";

let value: FeedResponseDto = {
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
      channel: "push",
      read: false,
      seen: false,
      deleted: false,
      cta: {
        data: {},
      },
      status: "error",
      payload: {
        "key": "<value>",
      },
    },
  ],
  pageSize: 4238.55,
  page: 6063.93,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `totalCount`                                                               | *number*                                                                   | :heavy_minus_sign:                                                         | Total number of notifications available.                                   |
| `hasMore`                                                                  | *boolean*                                                                  | :heavy_check_mark:                                                         | Indicates if there are more notifications to load.                         |
| `data`                                                                     | [components.NotificationDto](../../models/components/notificationdto.md)[] | :heavy_check_mark:                                                         | Array of notifications returned in the response.                           |
| `pageSize`                                                                 | *number*                                                                   | :heavy_check_mark:                                                         | The number of notifications returned in this response.                     |
| `page`                                                                     | *number*                                                                   | :heavy_check_mark:                                                         | The current page number of the notifications.                              |