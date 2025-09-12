# CreateLayoutDto

## Example Usage

```typescript
import { CreateLayoutDto } from "@novu/api/models/components";

let value: CreateLayoutDto = {
  layoutId: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `layoutId`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | Unique identifier for the layout                                                           |
| `name`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | Name of the layout                                                                         |
| `source`                                                                                   | [components.LayoutCreationSourceEnum](../../models/components/layoutcreationsourceenum.md) | :heavy_minus_sign:                                                                         | Source of layout creation                                                                  |