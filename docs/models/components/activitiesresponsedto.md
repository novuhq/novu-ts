# ActivitiesResponseDto

## Example Usage

```typescript
import { ActivitiesResponseDto } from "@novu/api/models/components";

let value: ActivitiesResponseDto = {
  hasMore: false,
  data: [
    {
      environmentId: "<id>",
      organizationId: "<id>",
      transactionId: "<id>",
    },
  ],
  pageSize: 1103.75,
  page: 6563.30,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `hasMore`                                                                                                  | *boolean*                                                                                                  | :heavy_check_mark:                                                                                         | Whether there are more activities                                                                          |
| `data`                                                                                                     | [components.ActivityNotificationResponseDto](../../models/components/activitynotificationresponsedto.md)[] | :heavy_check_mark:                                                                                         | Array of activity notifications                                                                            |
| `pageSize`                                                                                                 | *number*                                                                                                   | :heavy_check_mark:                                                                                         | Page size of the activities                                                                                |
| `page`                                                                                                     | *number*                                                                                                   | :heavy_check_mark:                                                                                         | Current page of the activities                                                                             |