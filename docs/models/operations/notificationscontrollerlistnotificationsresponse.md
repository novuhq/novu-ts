# NotificationsControllerListNotificationsResponse

## Example Usage

```typescript
import { NotificationsControllerListNotificationsResponse } from "@novu/api/models/operations";

let value: NotificationsControllerListNotificationsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    hasMore: false,
    data: [
      {
        environmentId: "<id>",
        organizationId: "<id>",
        transactionId: "<id>",
      },
    ],
    pageSize: 4236.55,
    page: 6458.94,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.ActivitiesResponseDto](../../models/components/activitiesresponsedto.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |