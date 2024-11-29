# SubscribersControllerGetNotificationsFeedResponse

## Example Usage

```typescript
import { SubscribersControllerGetNotificationsFeedResponse } from "@novu/api/models/operations";

let value: SubscribersControllerGetNotificationsFeedResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    page: 6818.20,
    hasMore: false,
    pageSize: 3595.08,
    data: [
      {
        hasMore: false,
        data: [
          "<value>",
        ],
        pageSize: 4370.32,
        page: 6976.31,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                            | Record<string, *string*[]>                                                                                                                           | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `result`                                                                                                                                             | [operations.SubscribersControllerGetNotificationsFeedResponseBody](../../models/operations/subscriberscontrollergetnotificationsfeedresponsebody.md) | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |