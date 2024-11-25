# ChannelPreference

## Example Usage

```typescript
import { ChannelPreference } from "@novu/api/models/components";

let value: ChannelPreference = {
  enabled: false,
<<<<<<< Updated upstream
  type: "chat",
=======
  type: "email",
>>>>>>> Stashed changes
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `enabled`                                          | *boolean*                                          | :heavy_check_mark:                                 | If channel is enabled or not                       |
| `type`                                             | [components.Type](../../models/components/type.md) | :heavy_check_mark:                                 | The type of channel that is enabled or not         |