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
    page: 3595.08,
    hasMore: false,
    pageSize: 4370.32,
    data: [
      {
        hasMore: false,
        data: [
          "<value>",
        ],
        pageSize: 6976.31,
        page: 602.25,
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