# ChannelPreference

## Example Usage

```typescript
import { ChannelPreference } from "@novu/api/models/components";

let value: ChannelPreference = {
  type: "push",
  enabled: false,
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `type`                                             | [components.Type](../../models/components/type.md) | :heavy_check_mark:                                 | The type of channel that is enabled or not         |
| `enabled`                                          | *boolean*                                          | :heavy_check_mark:                                 | If channel is enabled or not                       |