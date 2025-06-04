# SubscribersV1ControllerUpdateSubscriberChannelRequest

## Example Usage

```typescript
import { SubscribersV1ControllerUpdateSubscriberChannelRequest } from "@novu/api/models/operations";

let value: SubscribersV1ControllerUpdateSubscriberChannelRequest = {
  subscriberId: "<id>",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `subscriberId`                                                                                               | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `idempotencyKey`                                                                                             | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | A header for idempotency purposes                                                                            |
| `updateSubscriberChannelRequestDto`                                                                          | [components.UpdateSubscriberChannelRequestDto](../../models/components/updatesubscriberchannelrequestdto.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |