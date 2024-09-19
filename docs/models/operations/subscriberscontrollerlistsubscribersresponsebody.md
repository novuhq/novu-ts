# SubscribersControllerListSubscribersResponseBody

## Example Usage

```typescript
import { SubscribersControllerListSubscribersResponseBody } from "@novu/api/models/operations";

let value: SubscribersControllerListSubscribersResponseBody = {
  data: [
    {
      environmentId: "<value>",
      organizationId: "<value>",
      createdAt: "<value>",
      deleted: false,
      subscriberId: "<value>",
      updatedAt: "<value>",
    },
  ],
  hasMore: false,
  page: 6350.59,
  pageSize: 1613.09,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `data`                                                                                 | [components.SubscriberResponseDto](../../models/components/subscriberresponsedto.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `hasMore`                                                                              | *boolean*                                                                              | :heavy_check_mark:                                                                     | Does the list have more items to fetch                                                 |
| `page`                                                                                 | *number*                                                                               | :heavy_check_mark:                                                                     | The current page of the paginated response                                             |
| `pageSize`                                                                             | *number*                                                                               | :heavy_check_mark:                                                                     | Number of items on each page                                                           |