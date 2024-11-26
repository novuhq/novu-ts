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
      "<value>",
    ],
    pageSize: 9636.63,
    page: 3834.42,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.ActivitiesResponseDto](../../models/components/activitiesresponsedto.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |