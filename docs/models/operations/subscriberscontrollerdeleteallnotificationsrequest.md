# SubscribersControllerDeleteAllNotificationsRequest

## Example Usage

```typescript
import { SubscribersControllerDeleteAllNotificationsRequest } from "@novu/api/models/operations";

let value: SubscribersControllerDeleteAllNotificationsRequest = {
  subscriberId: "<id>",
  updateAllSubscriberNotificationsDto: {},
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `subscriberId`                                                                                                   | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The identifier of the subscriber                                                                                 |
| `idempotencyKey`                                                                                                 | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | A header for idempotency purposes                                                                                |
| `updateAllSubscriberNotificationsDto`                                                                            | [components.UpdateAllSubscriberNotificationsDto](../../models/components/updateallsubscribernotificationsdto.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |