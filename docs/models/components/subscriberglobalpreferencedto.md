# SubscriberGlobalPreferenceDto

## Example Usage

```typescript
import { SubscriberGlobalPreferenceDto } from "@novu/api/models/components";

let value: SubscriberGlobalPreferenceDto = {
  enabled: false,
  channels: {
    email: true,
    sms: false,
    inApp: true,
    chat: false,
    push: true,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                          | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | Whether notifications are enabled globally                                                         |
| `channels`                                                                                         | [components.SubscriberPreferenceChannels](../../models/components/subscriberpreferencechannels.md) | :heavy_check_mark:                                                                                 | Channel-specific preference settings                                                               |