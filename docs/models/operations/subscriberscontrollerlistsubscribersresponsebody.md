# SubscribersControllerListSubscribersResponseBody

## Example Usage

```typescript
import { SubscribersControllerListSubscribersResponseBody } from "@novu/api/models/operations";

let value: SubscribersControllerListSubscribersResponseBody = {
  data: [
    {
<<<<<<< Updated upstream
      environmentId: "<value>",
      organizationId: "<value>",
      createdAt: "<value>",
      deleted: false,
      subscriberId: "<value>",
=======
      environmentId: "<id>",
      organizationId: "<id>",
      createdAt: "<value>",
      deleted: false,
      subscriberId: "<id>",
>>>>>>> Stashed changes
      updatedAt: "<value>",
    },
  ],
  hasMore: false,
<<<<<<< Updated upstream
  page: 6350.59,
  pageSize: 1613.09,
=======
  page: 6439.90,
  pageSize: 4238.55,
>>>>>>> Stashed changes
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `data`                                                                                 | [components.SubscriberResponseDto](../../models/components/subscriberresponsedto.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `hasMore`                                                                              | *boolean*                                                                              | :heavy_check_mark:                                                                     | Does the list have more items to fetch                                                 |
| `page`                                                                                 | *number*                                                                               | :heavy_check_mark:                                                                     | The current page of the paginated response                                             |
| `pageSize`                                                                             | *number*                                                                               | :heavy_check_mark:                                                                     | Number of items on each page                                                           |