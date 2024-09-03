# UpdateSubscriberPreferenceRequestDto

## Example Usage

```typescript
import { UpdateSubscriberPreferenceRequestDto } from "@novu/api/models/components";

let value: UpdateSubscriberPreferenceRequestDto = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `channel`                                                                         | [components.ChannelPreference](../../models/components/channelpreference.md)      | :heavy_minus_sign:                                                                | The subscriber preferences for every ChannelTypeEnum for the workflow assigned.   |
| `enabled`                                                                         | *boolean*                                                                         | :heavy_minus_sign:                                                                | Sets if the workflow is fully enabled for all channels or not for the subscriber. |