# SubscribersControllerCompleteNotificationActionRequest

## Example Usage

```typescript
import { SubscribersControllerCompleteNotificationActionRequest } from "@novu/api/models/operations";

let value: SubscribersControllerCompleteNotificationActionRequest = {
  subscriberId: "<id>",
  notificationId: "<id>",
  actionType: "primary",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `subscriberId`                                                 | *string*                                                       | :heavy_check_mark:                                             | The identifier of the subscriber                               |
| `notificationId`                                               | *string*                                                       | :heavy_check_mark:                                             | The identifier of the notification                             |
| `actionType`                                                   | [operations.ActionType](../../models/operations/actiontype.md) | :heavy_check_mark:                                             | The type of action (primary or secondary)                      |
| `contextKeys`                                                  | *string*[]                                                     | :heavy_minus_sign:                                             | Context keys for filtering                                     |
| `idempotencyKey`                                               | *string*                                                       | :heavy_minus_sign:                                             | A header for idempotency purposes                              |