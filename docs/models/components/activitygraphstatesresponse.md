# ActivityGraphStatesResponse

## Example Usage

```typescript
import { ActivityGraphStatesResponse } from "@novu/api/models/components";

let value: ActivityGraphStatesResponse = {
  id: "<id>",
  channels: [
<<<<<<< Updated upstream
    "sms",
  ],
  count: 5204.78,
=======
    "email",
  ],
  count: 7742.34,
>>>>>>> Stashed changes
  templates: [
    "<value>",
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `channels`                                                   | [components.Channels](../../models/components/channels.md)[] | :heavy_check_mark:                                           | N/A                                                          |
| `count`                                                      | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `templates`                                                  | *string*[]                                                   | :heavy_check_mark:                                           | N/A                                                          |