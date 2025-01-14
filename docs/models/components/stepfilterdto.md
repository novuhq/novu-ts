# StepFilterDto

## Example Usage

```typescript
import { StepFilterDto } from "@novu/api/models/components";

let value: StepFilterDto = {
  isNegated: false,
  type: "LIST",
  value: "AND",
  children: [
    {
      field: "<value>",
      value: "<value>",
      operator: "NOT_LIKE",
      on: "payload",
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `isNegated`                                                                      | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `type`                                                                           | [components.BuilderFieldType](../../models/components/builderfieldtype.md)       | :heavy_check_mark:                                                               | N/A                                                                              |
| `value`                                                                          | [components.Value](../../models/components/value.md)                             | :heavy_check_mark:                                                               | N/A                                                                              |
| `children`                                                                       | [components.FieldFilterPartDto](../../models/components/fieldfilterpartdto.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |