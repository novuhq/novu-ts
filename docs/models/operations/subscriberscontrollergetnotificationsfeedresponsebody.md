# SubscribersControllerGetNotificationsFeedResponseBody


## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `data`                                                                     | [components.FeedResponseDto](../../models/components/feedresponsedto.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `hasMore`                                                                  | *boolean*                                                                  | :heavy_check_mark:                                                         | Does the list have more items to fetch                                     |
| `page`                                                                     | *number*                                                                   | :heavy_check_mark:                                                         | The current page of the paginated response                                 |
| `pageSize`                                                                 | *number*                                                                   | :heavy_check_mark:                                                         | Number of items on each page                                               |