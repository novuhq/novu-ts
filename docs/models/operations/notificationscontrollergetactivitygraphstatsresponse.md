# NotificationsControllerGetActivityGraphStatsResponse

## Example Usage

```typescript
import { NotificationsControllerGetActivityGraphStatsResponse } from "@novu/api/models/operations";

let value: NotificationsControllerGetActivityGraphStatsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      id: "<id>",
      count: 9636.63,
      templates: [
        "<value>",
      ],
      channels: [
        "email",
      ],
    },
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `headers`                                                                                          | Record<string, *string*[]>                                                                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `result`                                                                                           | [components.ActivityGraphStatesResponse](../../models/components/activitygraphstatesresponse.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |