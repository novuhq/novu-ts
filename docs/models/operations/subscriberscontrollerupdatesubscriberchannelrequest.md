# SubscribersControllerUpdateSubscriberChannelRequest

## Example Usage

```typescript
import { SubscribersControllerUpdateSubscriberChannelRequest } from "@novu/api/models/operations";

let value: SubscribersControllerUpdateSubscriberChannelRequest = {
  subscriberId: "<value>",
  updateSubscriberChannelRequestDto: {
    credentials: {
      webhookUrl: "<value>",
    },
    providerId: 2532.91,
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `subscriberId`                                                                                               | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `updateSubscriberChannelRequestDto`                                                                          | [components.UpdateSubscriberChannelRequestDto](../../models/components/updatesubscriberchannelrequestdto.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |