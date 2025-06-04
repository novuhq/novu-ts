# GetSubscriberPreferencesDto

## Example Usage

```typescript
import { GetSubscriberPreferencesDto } from "@novu/api/models/components";

let value: GetSubscriberPreferencesDto = {
  global: {
    enabled: false,
    channels: {
      email: true,
      sms: false,
      inApp: true,
      chat: false,
      push: true,
    },
  },
  workflows: [],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `global`                                                                                                   | [components.SubscriberGlobalPreferenceDto](../../models/components/subscriberglobalpreferencedto.md)       | :heavy_check_mark:                                                                                         | Global preference settings                                                                                 |
| `workflows`                                                                                                | [components.SubscriberWorkflowPreferenceDto](../../models/components/subscriberworkflowpreferencedto.md)[] | :heavy_check_mark:                                                                                         | Workflow-specific preference settings                                                                      |