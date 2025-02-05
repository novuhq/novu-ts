# GlobalPreferenceDto

## Example Usage

```typescript
import { GlobalPreferenceDto } from "@novu/api/models/components";

let value: GlobalPreferenceDto = {
  enabled: false,
  channels: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `enabled`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | Whether notifications are enabled globally                                     |
| `channels`                                                                     | [components.PreferenceChannels](../../models/components/preferencechannels.md) | :heavy_check_mark:                                                             | Channel-specific preference settings                                           |