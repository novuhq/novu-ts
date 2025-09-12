# InAppStepUpsertDto

## Example Usage

```typescript
import { InAppStepUpsertDto } from "@novu/api/models/components";

let value: InAppStepUpsertDto = {
  name: "<value>",
  type: "push",
  controlValues: {},
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_minus_sign:                                                 | Unique identifier of the step                                      |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | Name of the step                                                   |
| `type`                                                             | [components.StepTypeEnum](../../models/components/steptypeenum.md) | :heavy_check_mark:                                                 | Type of the step                                                   |
| `controlValues`                                                    | *components.InAppStepUpsertDtoControlValues*                       | :heavy_minus_sign:                                                 | Control values for the In-App step.                                |