# SubscribersControllerGetNotificationsFeedResponseBody

## Example Usage

```typescript
import { SubscribersControllerGetNotificationsFeedResponseBody } from "@novu/api/models/operations";

let value: SubscribersControllerGetNotificationsFeedResponseBody = {
  data: [
    {
      data: [
        "<value>",
      ],
      hasMore: false,
      page: 6139.66,
      pageSize: 5356.33,
    },
  ],
  hasMore: false,
  page: 5899.10,
  pageSize: 7301.22,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `data`                                                                     | [components.FeedResponseDto](../../models/components/feedresponsedto.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `hasMore`                                                                  | *boolean*                                                                  | :heavy_check_mark:                                                         | Does the list have more items to fetch                                     |
| `page`                                                                     | *number*                                                                   | :heavy_check_mark:                                                         | The current page of the paginated response                                 |
| `pageSize`                                                                 | *number*                                                                   | :heavy_check_mark:                                                         | Number of items on each page                                               |