# StepFilter

## Example Usage

```typescript
import { StepFilter } from "@novu/api/models/components";

let value: StepFilter = {
  children: [
    {
      field: "<value>",
      on: "payload",
      operator: "LIKE",
      value: "<value>",
    },
  ],
  isNegated: false,
  type: "BOOLEAN",
  value: "AND",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `children`                                                                 | [components.FieldFilterPart](../../models/components/fieldfilterpart.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `isNegated`                                                                | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `type`                                                                     | [components.StepFilterType](../../models/components/stepfiltertype.md)     | :heavy_check_mark:                                                         | N/A                                                                        |
| `value`                                                                    | [components.Value](../../models/components/value.md)                       | :heavy_check_mark:                                                         | N/A                                                                        |