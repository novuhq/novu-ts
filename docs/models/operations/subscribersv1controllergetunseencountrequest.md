# SubscribersV1ControllerGetUnseenCountRequest

## Example Usage

```typescript
import { SubscribersV1ControllerGetUnseenCountRequest } from "@novu/api/models/operations";

let value: SubscribersV1ControllerGetUnseenCountRequest = {
  subscriberId: "<id>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `subscriberId`                                                          | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `feedId`                                                                | *string*[]                                                              | :heavy_minus_sign:                                                      | Identifier for the feed. Can be a single string or an array of strings. |
| `seen`                                                                  | *boolean*                                                               | :heavy_minus_sign:                                                      | Indicates whether to count seen notifications.                          |
| `limit`                                                                 | *number*                                                                | :heavy_minus_sign:                                                      | The maximum number of notifications to return.                          |
| `idempotencyKey`                                                        | *string*                                                                | :heavy_minus_sign:                                                      | A header for idempotency purposes                                       |