# NotificationGroupsControllerCreateNotificationGroupResponse

## Example Usage

```typescript
import { NotificationGroupsControllerCreateNotificationGroupResponse } from "@novu/api/models/operations";

let value: NotificationGroupsControllerCreateNotificationGroupResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    name: "<value>",
    environmentId: "<id>",
    organizationId: "<id>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `headers`                                                                                          | Record<string, *string*[]>                                                                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `result`                                                                                           | [components.NotificationGroupResponseDto](../../models/components/notificationgroupresponsedto.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |