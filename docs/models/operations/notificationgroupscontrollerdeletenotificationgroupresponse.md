# NotificationGroupsControllerDeleteNotificationGroupResponse

## Example Usage

```typescript
import { NotificationGroupsControllerDeleteNotificationGroupResponse } from "@novu/api/models/operations";

let value: NotificationGroupsControllerDeleteNotificationGroupResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    acknowledged: false,
    status: "deleted",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                      | Record<string, *string*[]>                                                                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `result`                                                                                                       | [components.DeleteNotificationGroupResponseDto](../../models/components/deletenotificationgroupresponsedto.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |