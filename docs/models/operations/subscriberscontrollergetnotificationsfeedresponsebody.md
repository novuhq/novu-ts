# SubscribersControllerGetNotificationsFeedResponseBody

## Example Usage

```typescript
import { SubscribersControllerGetNotificationsFeedResponseBody } from "@novu/api/models/operations";

let value: SubscribersControllerGetNotificationsFeedResponseBody = {
  page: 6176.35,
  hasMore: false,
  pageSize: 6120.96,
  data: [
    {
      hasMore: false,
      data: [
        "<value>",
      ],
      pageSize: 6169.34,
      page: 9437.48,
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `page`                                                                     | *number*                                                                   | :heavy_check_mark:                                                         | The current page of the paginated response                                 |
| `hasMore`                                                                  | *boolean*                                                                  | :heavy_check_mark:                                                         | Does the list have more items to fetch                                     |
| `pageSize`                                                                 | *number*                                                                   | :heavy_check_mark:                                                         | Number of items on each page                                               |
| `data`                                                                     | [components.FeedResponseDto](../../models/components/feedresponsedto.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |