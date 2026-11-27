# SubscribersControllerRevertNotificationActionRequest

## Example Usage

```typescript
import { SubscribersControllerRevertNotificationActionRequest } from "@novu/api/models/operations";

let value: SubscribersControllerRevertNotificationActionRequest = {
  subscriberId: "<id>",
  notificationId: "<id>",
  actionType: "secondary",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `subscriberId`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | The identifier of the subscriber                                                 |
| `notificationId`                                                                 | *string*                                                                         | :heavy_check_mark:                                                               | The identifier of the notification                                               |
| `actionType`                                                                     | [operations.PathParamActionType](../../models/operations/pathparamactiontype.md) | :heavy_check_mark:                                                               | The type of action (primary or secondary)                                        |
| `contextKeys`                                                                    | *string*[]                                                                       | :heavy_minus_sign:                                                               | Context keys for filtering                                                       |
| `idempotencyKey`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | A header for idempotency purposes                                                |