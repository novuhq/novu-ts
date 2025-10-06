# EmailStepUpsertDto

## Example Usage

```typescript
import { EmailStepUpsertDto } from "@novu/api/models/components";

let value: EmailStepUpsertDto = {
  name: "<value>",
  type: "delay",
  controlValues: {
    "key": "<value>",
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
| `controlValues`                                                    | *components.EmailStepUpsertDtoControlValues*                       | :heavy_minus_sign:                                                 | Control values for the Email step.                                 |