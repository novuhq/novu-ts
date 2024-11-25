# SubscribersControllerModifySubscriberChannelRequest

## Example Usage

```typescript
import { SubscribersControllerModifySubscriberChannelRequest } from "@novu/api/models/operations";

let value: SubscribersControllerModifySubscriberChannelRequest = {
<<<<<<< Updated upstream
  subscriberId: "<value>",
  updateSubscriberChannelRequestDto: {
    credentials: {
      webhookUrl: "<value>",
    },
    providerId: 5818.5,
=======
  subscriberId: "<id>",
  updateSubscriberChannelRequestDto: {
    credentials: {
      webhookUrl: "https://quiet-elevator.name/",
    },
    providerId: "getstream",
>>>>>>> Stashed changes
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `subscriberId`                                                                                               | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `updateSubscriberChannelRequestDto`                                                                          | [components.UpdateSubscriberChannelRequestDto](../../models/components/updatesubscriberchannelrequestdto.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |