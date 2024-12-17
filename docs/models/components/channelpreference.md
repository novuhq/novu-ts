# ChannelPreference

## Example Usage

```typescript
import { ChannelPreference } from "@novu/api/models/components";

let value: ChannelPreference = {
  type: "in_app",
  enabled: false,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `type`                                                                               | [components.ChannelPreferenceType](../../models/components/channelpreferencetype.md) | :heavy_check_mark:                                                                   | The type of channel that is enabled or not                                           |
| `enabled`                                                                            | *boolean*                                                                            | :heavy_check_mark:                                                                   | If channel is enabled or not                                                         |