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
  pageSize: 6048.46,
  page: 7392.64,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `hasMore`                                                                                                  | *boolean*                                                                                                  | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `data`                                                                                                     | [components.ActivityNotificationResponseDto](../../models/components/activitynotificationresponsedto.md)[] | :heavy_check_mark:                                                                                         | Array of Activity notifications                                                                            |
| `pageSize`                                                                                                 | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `page`                                                                                                     | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |