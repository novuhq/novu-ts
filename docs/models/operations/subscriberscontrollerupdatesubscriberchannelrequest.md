# SubscribersControllerUpdateSubscriberChannelRequest

## Example Usage

```typescript
import { SubscribersControllerUpdateSubscriberChannelRequest } from "@novu/api/models/operations";

let value: SubscribersControllerUpdateSubscriberChannelRequest = {
<<<<<<< Updated upstream
  subscriberId: "<value>",
  updateSubscriberChannelRequestDto: {
    credentials: {
      webhookUrl: "<value>",
    },
    providerId: 2532.91,
=======
  subscriberId: "<id>",
  updateSubscriberChannelRequestDto: {
    credentials: {
      webhookUrl: "https://frightened-metal.name/",
    },
    providerId: "whatsapp-business",
>>>>>>> Stashed changes
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `subscriberId`                                                                                               | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `updateSubscriberChannelRequestDto`                                                                          | [components.UpdateSubscriberChannelRequestDto](../../models/components/updatesubscriberchannelrequestdto.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |