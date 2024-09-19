# DeleteNotificationGroupResponseDto

## Example Usage

```typescript
import { DeleteNotificationGroupResponseDto } from "@novu/api/models/components";

let value: DeleteNotificationGroupResponseDto = {
  acknowledged: false,
  status: "deleted",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `acknowledged`                                                                                                             | *boolean*                                                                                                                  | :heavy_check_mark:                                                                                                         | A boolean stating the success of the action                                                                                |
| `status`                                                                                                                   | [components.DeleteNotificationGroupResponseDtoStatus](../../models/components/deletenotificationgroupresponsedtostatus.md) | :heavy_check_mark:                                                                                                         | The status enum for the performed action                                                                                   |