# SubscribersControllerListSubscribersResponseBody

## Example Usage

```typescript
import { SubscribersControllerListSubscribersResponseBody } from "@novu/api/models/operations";

let value: SubscribersControllerListSubscribersResponseBody = {
  page: 1433.53,
  hasMore: false,
  pageSize: 9446.69,
  data: [
    {
      subscriberId: "<id>",
      organizationId: "<id>",
      environmentId: "<id>",
      deleted: false,
      createdAt: "<value>",
      updatedAt: "<value>",
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