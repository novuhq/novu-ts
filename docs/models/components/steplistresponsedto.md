# StepListResponseDto

## Example Usage

```typescript
import { StepListResponseDto } from "@novu/api/models/components";

let value: StepListResponseDto = {
  slug: "<value>",
  type: "in_app",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `slug`                                                               | *string*                                                             | :heavy_check_mark:                                                   | Slug of the step                                                     |
| `type`                                                               | [components.StepTypeEnum](../../models/components/steptypeenum.md)   | :heavy_check_mark:                                                   | Type of the step                                                     |
| `issues`                                                             | [components.StepIssuesDto](../../models/components/stepissuesdto.md) | :heavy_minus_sign:                                                   | Issues associated with the step                                      |