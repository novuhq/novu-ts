# StepFilter

## Example Usage

```typescript
import { StepFilter } from "@novu/api/models/components";

let value: StepFilter = {
  isNegated: false,
  type: "LIST",
  value: "OR",
  children: [
    {
      field: "<value>",
      value: "<value>",
      operator: "SMALLER_EQUAL",
      on: "payload",
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `isNegated`                                                                | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `type`                                                                     | [components.StepFilterType](../../models/components/stepfiltertype.md)     | :heavy_check_mark:                                                         | N/A                                                                        |
| `value`                                                                    | [components.Value](../../models/components/value.md)                       | :heavy_check_mark:                                                         | N/A                                                                        |
| `children`                                                                 | [components.FieldFilterPart](../../models/components/fieldfilterpart.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |