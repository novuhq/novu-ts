# Preference

## Example Usage

```typescript
import { Preference } from "@novu/api/models/components";

let value: Preference = {
    channels: {},
    enabled: false,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `channels`                                                                        | [components.PreferenceChannels](../../models/components/preferencechannels.md)    | :heavy_check_mark:                                                                | Subscriber preferences for the different channels regarding this workflow         |
| `enabled`                                                                         | *boolean*                                                                         | :heavy_check_mark:                                                                | Sets if the workflow is fully enabled for all channels or not for the subscriber. |