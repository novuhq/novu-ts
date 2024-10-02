# FieldFilterPart

## Example Usage

```typescript
import { FieldFilterPart } from "@novu/api/models/components";

let value: FieldFilterPart = {
  field: "<value>",
  on: "payload",
  operator: "NOT_EQUAL",
  value: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `field`                                                    | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `on`                                                       | [components.On](../../models/components/on.md)             | :heavy_check_mark:                                         | N/A                                                        |
| `operator`                                                 | [components.Operator](../../models/components/operator.md) | :heavy_check_mark:                                         | N/A                                                        |
| `value`                                                    | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |