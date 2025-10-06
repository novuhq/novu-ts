# DelayStepUpsertDto

## Example Usage

```typescript
import { DelayStepUpsertDto } from "@novu/api/models/components";

let value: DelayStepUpsertDto = {
  name: "<value>",
  type: "email",
  controlValues: {},
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_minus_sign:                                                 | Database identifier of the step. Used for updating the step.       |
| `stepId`                                                           | *string*                                                           | :heavy_minus_sign:                                                 | Unique identifier for the step                                     |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | Name of the step                                                   |
| `type`                                                             | [components.StepTypeEnum](../../models/components/steptypeenum.md) | :heavy_check_mark:                                                 | Type of the step                                                   |
| `controlValues`                                                    | *components.DelayStepUpsertDtoControlValues*                       | :heavy_minus_sign:                                                 | Control values for the Delay step.                                 |