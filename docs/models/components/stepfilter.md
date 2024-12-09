# StepFilter

## Example Usage

```typescript
import { StepFilter } from "@novu/api/models/components";

let value: StepFilter = {
  isNegated: false,
  type: "LIST",
  value: "AND",
  children: [
    {
      field: "<value>",
      value: "<value>",
      operator: "LARGER_EQUAL",
      on: "payload",
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