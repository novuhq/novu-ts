# SubscribersV1ControllerUpdateSubscriberChannelRequest

## Example Usage

```typescript
import { SubscribersV1ControllerUpdateSubscriberChannelRequest } from "@novu/api/models/operations";

let value: SubscribersV1ControllerUpdateSubscriberChannelRequest = {
  subscriberId: "<id>",
  updateSubscriberChannelRequestDto: {
    providerId: "getstream",
    credentials: {
      webhookUrl: "https://example.com/webhook",
      channel: "general",
      deviceTokens: [
        "token1",
        "token2",
        "token3",
      ],
      alertUid: "12345-abcde",
      title: "Critical Alert",
      imageUrl: "https://example.com/image.png",
      state: "resolved",
      externalUrl: "https://example.com/details",
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `subscriberId`                                                                                               | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `idempotencyKey`                                                                                             | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | A header for idempotency purposes                                                                            |
| `updateSubscriberChannelRequestDto`                                                                          | [components.UpdateSubscriberChannelRequestDto](../../models/components/updatesubscriberchannelrequestdto.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |