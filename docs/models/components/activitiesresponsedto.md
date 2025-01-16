# ActivitiesResponseDto

## Example Usage

```typescript
import { ActivitiesResponseDto } from "@novu/api/models/components";

let value: ActivitiesResponseDto = {
  hasMore: false,
  data: [],
  pageSize: 7163.27,
  page: 2894.06,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `hasMore`                                                                                                  | *boolean*                                                                                                  | :heavy_check_mark:                                                                                         | Indicates if there are more activities in the result set                                                   |
| `data`                                                                                                     | [components.ActivityNotificationResponseDto](../../models/components/activitynotificationresponsedto.md)[] | :heavy_check_mark:                                                                                         | Array of activity notifications                                                                            |
| `pageSize`                                                                                                 | *number*                                                                                                   | :heavy_check_mark:                                                                                         | Page size of the activities                                                                                |
| `page`                                                                                                     | *number*                                                                                                   | :heavy_check_mark:                                                                                         | Current page of the activities                                                                             |