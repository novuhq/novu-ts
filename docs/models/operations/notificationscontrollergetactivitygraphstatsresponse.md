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
      count: 8917.73,
      templates: [
        "<value>",
      ],
      channels: [
        "push",
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