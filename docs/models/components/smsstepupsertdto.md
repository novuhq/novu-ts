# SmsStepUpsertDto

## Example Usage

```typescript
import { SmsStepUpsertDto } from "@novu/api/models/components";

let value: SmsStepUpsertDto = {
  name: "<value>",
  type: "push",
  controlValues: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_minus_sign:                                                 | Database identifier of the step. Used for updating the step.       |
| `stepId`                                                           | *string*                                                           | :heavy_minus_sign:                                                 | Unique identifier for the step                                     |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | Name of the step                                                   |
| `type`                                                             | [components.StepTypeEnum](../../models/components/steptypeenum.md) | :heavy_check_mark:                                                 | Type of the step                                                   |
| `controlValues`                                                    | *components.SmsStepUpsertDtoControlValues*                         | :heavy_minus_sign:                                                 | Control values for the SMS step.                                   |