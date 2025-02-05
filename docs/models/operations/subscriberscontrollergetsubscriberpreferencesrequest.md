# SubscribersControllerGetSubscriberPreferencesRequest

## Example Usage

```typescript
import { SubscribersControllerGetSubscriberPreferencesRequest } from "@novu/api/models/operations";

let value: SubscribersControllerGetSubscriberPreferencesRequest = {
  subscriberId: "<id>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `subscriberId`                    | *string*                          | :heavy_check_mark:                | N/A                               |
| `idempotencyKey`                  | *string*                          | :heavy_minus_sign:                | A header for idempotency purposes |