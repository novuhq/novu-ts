# SubscribersControllerArchiveAllNotificationsRequest

## Example Usage

```typescript
import { SubscribersControllerArchiveAllNotificationsRequest } from "@novu/api/models/operations";

let value: SubscribersControllerArchiveAllNotificationsRequest = {
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