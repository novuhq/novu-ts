# SubscribersControllerRemoveSubscriberRequest

## Example Usage

```typescript
import { SubscribersControllerRemoveSubscriberRequest } from "@novu/api/models/operations";

let value: SubscribersControllerRemoveSubscriberRequest = {
  subscriberId: "<id>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `idempotencyKey`                   | *string*                           | :heavy_minus_sign:                 | A header for idempotency purposes  |
| `subscriberId`                     | *string*                           | :heavy_check_mark:                 | N/A                                |