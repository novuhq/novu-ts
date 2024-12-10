# StepFilter

## Example Usage

```typescript
import { StepFilter } from "@novu/api/models/components";

let value: StepFilter = {
  isNegated: false,
  type: "BOOLEAN",
  value: "OR",
  children: [
    {
      field: "<value>",
      value: "<value>",
      operator: "ANY_IN",
      on: "subscriber",
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `isNegated`                                                                | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `type`                                                                     | [components.Type](../../models/components/type.md)                         | :heavy_check_mark:                                                         | N/A                                                                        |
| `value`                                                                    | [components.Value](../../models/components/value.md)                       | :heavy_check_mark:                                                         | N/A                                                                        |
| `children`                                                                 | [components.FieldFilterPart](../../models/components/fieldfilterpart.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |