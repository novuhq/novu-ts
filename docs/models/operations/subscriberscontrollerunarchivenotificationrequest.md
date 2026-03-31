# SubscribersControllerUnarchiveNotificationRequest

## Example Usage

```typescript
import { SubscribersControllerUnarchiveNotificationRequest } from "@novu/api/models/operations";

let value: SubscribersControllerUnarchiveNotificationRequest = {
  subscriberId: "<id>",
  notificationId: "<id>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `subscriberId`                     | *string*                           | :heavy_check_mark:                 | The identifier of the subscriber   |
| `notificationId`                   | *string*                           | :heavy_check_mark:                 | The identifier of the notification |
| `contextKeys`                      | *string*[]                         | :heavy_minus_sign:                 | Context keys for filtering         |
| `idempotencyKey`                   | *string*                           | :heavy_minus_sign:                 | A header for idempotency purposes  |