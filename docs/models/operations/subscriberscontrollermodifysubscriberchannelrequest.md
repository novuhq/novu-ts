# SubscribersControllerModifySubscriberChannelRequest

## Example Usage

```typescript
import { SubscribersControllerModifySubscriberChannelRequest } from "@novu/api/models/operations";

let value: SubscribersControllerModifySubscriberChannelRequest = {
  subscriberId: "<value>",
  updateSubscriberChannelRequestDto: {
    credentials: {
      webhookUrl: "<value>",
    },
    providerId: 5818.5,
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `subscriberId`                                                                                               | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `updateSubscriberChannelRequestDto`                                                                          | [components.UpdateSubscriberChannelRequestDto](../../models/components/updatesubscriberchannelrequestdto.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |