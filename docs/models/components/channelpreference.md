# ChannelPreference

## Example Usage

```typescript
import { ChannelPreference } from "@novu/api/models/components";

let value: ChannelPreference = {
  enabled: false,
  type: "push",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `enabled`                                                                            | *boolean*                                                                            | :heavy_check_mark:                                                                   | If channel is enabled or not                                                         |
| `type`                                                                               | [components.ChannelPreferenceType](../../models/components/channelpreferencetype.md) | :heavy_check_mark:                                                                   | The type of channel that is enabled or not                                           |