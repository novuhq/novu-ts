# WorkflowPreferenceDto

## Example Usage

```typescript
import { WorkflowPreferenceDto } from "@novu/api/models/components";

let value: WorkflowPreferenceDto = {
  enabled: false,
  channels: {},
  overrides: [
    {
      channel: "in_app",
      source: "workflowOverride",
    },
  ],
  workflow: {
    slug: "<value>",
    identifier: "<value>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `enabled`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | Whether notifications are enabled for this workflow                            |
| `channels`                                                                     | [components.PreferenceChannels](../../models/components/preferencechannels.md) | :heavy_check_mark:                                                             | Channel-specific preference settings for this workflow                         |
| `overrides`                                                                    | [components.Overrides](../../models/components/overrides.md)[]                 | :heavy_check_mark:                                                             | List of preference overrides                                                   |
| `workflow`                                                                     | [components.WorkflowInfoDto](../../models/components/workflowinfodto.md)       | :heavy_check_mark:                                                             | Workflow information                                                           |