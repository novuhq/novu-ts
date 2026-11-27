# SubscribersControllerSnoozeNotificationRequest

## Example Usage

```typescript
import { SubscribersControllerSnoozeNotificationRequest } from "@novu/api/models/operations";

let value: SubscribersControllerSnoozeNotificationRequest = {
  subscriberId: "<id>",
  notificationId: "<id>",
  snoozeSubscriberNotificationDto: {
    snoozeUntil: new Date("2026-03-01T10:00:00Z"),
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `subscriberId`                                                                                           | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The identifier of the subscriber                                                                         |
| `notificationId`                                                                                         | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The identifier of the notification                                                                       |
| `contextKeys`                                                                                            | *string*[]                                                                                               | :heavy_minus_sign:                                                                                       | Context keys for filtering                                                                               |
| `idempotencyKey`                                                                                         | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | A header for idempotency purposes                                                                        |
| `snoozeSubscriberNotificationDto`                                                                        | [components.SnoozeSubscriberNotificationDto](../../models/components/snoozesubscribernotificationdto.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |