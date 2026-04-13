# SubscribersControllerGetSubscriberNotificationsCountRequest

## Example Usage

```typescript
import { SubscribersControllerGetSubscriberNotificationsCountRequest } from "@novu/api/models/operations";

let value: SubscribersControllerGetSubscriberNotificationsCountRequest = {
  subscriberId: "<id>",
  filters:
    "[{\"read\":false,\"archived\":false},{\"tags\":[\"important\"]},{\"tags\":{\"and\":[{\"or\":[\"a\",\"b\"]},{\"or\":[\"c\"]}]}}]",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `subscriberId`                                                                                            | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The identifier of the subscriber                                                                          |                                                                                                           |
| `filters`                                                                                                 | *string*                                                                                                  | :heavy_check_mark:                                                                                        | Array of filter objects (max 30) to count notifications by different criteria                             | [{"read":false,"archived":false},{"tags":["important"]},{"tags":{"and":[{"or":["a","b"]},{"or":["c"]}]}}] |
| `idempotencyKey`                                                                                          | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | A header for idempotency purposes                                                                         |                                                                                                           |