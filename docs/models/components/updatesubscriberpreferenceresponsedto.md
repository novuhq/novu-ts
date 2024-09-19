# UpdateSubscriberPreferenceResponseDto

## Example Usage

```typescript
import { UpdateSubscriberPreferenceResponseDto } from "@novu/api/models/components";

let value: UpdateSubscriberPreferenceResponseDto = {
  preference: {
    channels: {},
    enabled: false,
  },
  template: {
    id: "<id>",
    critical: false,
    name: "<value>",
    triggers: [
      "<value>",
    ],
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `preference`                                                               | [components.Preference](../../models/components/preference.md)             | :heavy_check_mark:                                                         | The preferences of the subscriber regarding the related workflow           |
| `template`                                                                 | [components.TemplateResponse](../../models/components/templateresponse.md) | :heavy_check_mark:                                                         | The workflow information and if it is critical or not                      |