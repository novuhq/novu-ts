# SubscribersControllerGetNotificationsFeedResponseBody

## Example Usage

```typescript
import { SubscribersControllerGetNotificationsFeedResponseBody } from "@novu/api/models/operations";

let value: SubscribersControllerGetNotificationsFeedResponseBody = {
    data: [
        {
            data: ["<value>"],
            hasMore: false,
            page: 6235.1,
            pageSize: 1589.69,
        },
    ],
    hasMore: false,
    page: 3380.07,
    pageSize: 1103.75,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `data`                                                                     | [components.FeedResponseDto](../../models/components/feedresponsedto.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `hasMore`                                                                  | *boolean*                                                                  | :heavy_check_mark:                                                         | Does the list have more items to fetch                                     |
| `page`                                                                     | *number*                                                                   | :heavy_check_mark:                                                         | The current page of the paginated response                                 |
| `pageSize`                                                                 | *number*                                                                   | :heavy_check_mark:                                                         | Number of items on each page                                               |