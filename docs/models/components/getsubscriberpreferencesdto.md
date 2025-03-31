# GetSubscriberPreferencesDto

## Example Usage

```typescript
import { GetSubscriberPreferencesDto } from "@novu/api/models/components";

let value: GetSubscriberPreferencesDto = {
  global: {
    enabled: false,
    channels: {},
  },
  workflows: [
    {
      enabled: false,
      channels: {},
      overrides: [
        {
          channel: "push",
          source: "template",
        },
      ],
      workflow: {
        slug: "<value>",
        identifier: "<value>",
        name: "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `global`                                                                               | [components.GlobalPreferenceDto](../../models/components/globalpreferencedto.md)       | :heavy_check_mark:                                                                     | Global preference settings                                                             |
| `workflows`                                                                            | [components.WorkflowPreferenceDto](../../models/components/workflowpreferencedto.md)[] | :heavy_check_mark:                                                                     | Workflow-specific preference settings                                                  |