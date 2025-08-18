# SubscribersControllerCreateSubscriberRequest

## Example Usage

```typescript
import { SubscribersControllerCreateSubscriberRequest } from "@novu/api/models/operations";

let value: SubscribersControllerCreateSubscriberRequest = {
  createSubscriberRequestDto: {
    subscriberId: "<id>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `failIfExists`                                                                                 | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | If true, the request will fail if a subscriber with the same subscriberId already exists       |
| `idempotencyKey`                                                                               | *string*                                                                                       | :heavy_minus_sign:                                                                             | A header for idempotency purposes                                                              |
| `createSubscriberRequestDto`                                                                   | [components.CreateSubscriberRequestDto](../../models/components/createsubscriberrequestdto.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |