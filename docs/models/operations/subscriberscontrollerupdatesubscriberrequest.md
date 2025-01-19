# SubscribersControllerUpdateSubscriberRequest

## Example Usage

```typescript
import { SubscribersControllerUpdateSubscriberRequest } from "@novu/api/models/operations";

let value: SubscribersControllerUpdateSubscriberRequest = {
  subscriberId: "<id>",
  updateSubscriberRequestDto: {
    email: "john.doe@example.com",
    firstName: "John",
    lastName: "Doe",
    phone: "+1234567890",
    avatar: "https://example.com/avatar.jpg",
    locale: "en-US",
    data: {
      "preferences": {
        "notifications": true,
        "theme": "dark",
      },
      "tags": [
        "premium",
        "newsletter",
      ],
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `subscriberId`                                                                                 | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `updateSubscriberRequestDto`                                                                   | [components.UpdateSubscriberRequestDto](../../models/components/updatesubscriberrequestdto.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |