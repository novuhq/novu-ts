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
    data: [],
    pageSize: 4375.87,
    page: 8917.73,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.ActivitiesResponseDto](../../models/components/activitiesresponsedto.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |