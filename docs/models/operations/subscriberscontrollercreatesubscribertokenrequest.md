# SubscribersControllerCreateSubscriberTokenRequest

## Example Usage

```typescript
import { SubscribersControllerCreateSubscriberTokenRequest } from "@novu/api/models/operations";

let value: SubscribersControllerCreateSubscriberTokenRequest = {
  subscriberId: "<id>",
  createSubscriberTokenRequestDto: {
    context: {
      "key": "org-acme",
    },
    subscriber: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "+1234567890",
      avatar: "https://example.com/avatar.jpg",
      locale: "en-US",
      timezone: "America/New_York",
    },
    scope: [
      "channels:shared",
    ],
    expiresIn: 600,
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `subscriberId`                                                                                           | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The identifier of the subscriber                                                                         |
| `idempotencyKey`                                                                                         | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | A header for idempotency purposes                                                                        |
| `createSubscriberTokenRequestDto`                                                                        | [components.CreateSubscriberTokenRequestDto](../../models/components/createsubscribertokenrequestdto.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |