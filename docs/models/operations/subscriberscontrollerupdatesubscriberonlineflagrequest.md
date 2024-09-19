# SubscribersControllerUpdateSubscriberOnlineFlagRequest

## Example Usage

```typescript
import { SubscribersControllerUpdateSubscriberOnlineFlagRequest } from "@novu/api/models/operations";

let value: SubscribersControllerUpdateSubscriberOnlineFlagRequest = {
  subscriberId: "<value>",
  updateSubscriberOnlineFlagRequestDto: {
    isOnline: false,
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `subscriberId`                                                                                                     | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `updateSubscriberOnlineFlagRequestDto`                                                                             | [components.UpdateSubscriberOnlineFlagRequestDto](../../models/components/updatesubscriberonlineflagrequestdto.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |