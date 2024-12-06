# ActivityGraphStatesResponse

## Example Usage

```typescript
import { ActivityGraphStatesResponse } from "@novu/api/models/components";

let value: ActivityGraphStatesResponse = {
  id: "<id>",
  count: 641.47,
  templates: [
    "<value>",
  ],
  channels: [
    "chat",
  ],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `count`                                                                                                            | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `templates`                                                                                                        | *string*[]                                                                                                         | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `channels`                                                                                                         | [components.ActivityGraphStatesResponseChannels](../../models/components/activitygraphstatesresponsechannels.md)[] | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |