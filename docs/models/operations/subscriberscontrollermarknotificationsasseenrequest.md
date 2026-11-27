# SubscribersControllerMarkNotificationsAsSeenRequest

## Example Usage

```typescript
import { SubscribersControllerMarkNotificationsAsSeenRequest } from "@novu/api/models/operations";

let value: SubscribersControllerMarkNotificationsAsSeenRequest = {
  subscriberId: "<id>",
  markSubscriberNotificationsAsSeenDto: {},
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `subscriberId`                                                                                                     | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The identifier of the subscriber                                                                                   |
| `idempotencyKey`                                                                                                   | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | A header for idempotency purposes                                                                                  |
| `markSubscriberNotificationsAsSeenDto`                                                                             | [components.MarkSubscriberNotificationsAsSeenDto](../../models/components/marksubscribernotificationsasseendto.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |