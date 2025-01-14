# NotificationsControllerGetActivityStatsResponse

## Example Usage

```typescript
import { NotificationsControllerGetActivityStatsResponse } from "@novu/api/models/operations";

let value: NotificationsControllerGetActivityStatsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    weeklySent: 7917.25,
    monthlySent: 5288.95,
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `headers`                                                                                  | Record<string, *string*[]>                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `result`                                                                                   | [components.ActivityStatsResponseDto](../../models/components/activitystatsresponsedto.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |