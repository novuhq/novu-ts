# ActivityNotificationStepResponseDto

## Example Usage

```typescript
import { ActivityNotificationStepResponseDto } from "@novu/api/models/components";

let value: ActivityNotificationStepResponseDto = {
  id: "<id>",
  active: false,
  filters: [
    {},
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | Unique identifier of the step                                                  |
| `active`                                                                       | *boolean*                                                                      | :heavy_check_mark:                                                             | Whether the step is active or not                                              |
| `filters`                                                                      | [components.StepFilter](../../models/components/stepfilter.md)[]               | :heavy_check_mark:                                                             | Filter criteria for the step                                                   |
| `template`                                                                     | [components.MessageTemplateDto](../../models/components/messagetemplatedto.md) | :heavy_minus_sign:                                                             | Optional template for the step                                                 |