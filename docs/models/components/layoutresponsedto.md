# LayoutResponseDto

## Example Usage

```typescript
import { LayoutResponseDto } from "@novu/api/models/components";

let value: LayoutResponseDto = {
  id: "<id>",
  layoutId: "<id>",
  slug: {},
  name: "<value>",
  isDefault: true,
  updatedAt: "1735669594678",
  createdAt: "1708991400189",
  origin: "novu-cloud",
  type: "REGULAR",
  controls: {
    values: {},
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | Unique internal identifier of the layout                                       |
| `layoutId`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | Unique identifier for the layout                                               |
| `slug`                                                                         | [components.Slug](../../models/components/slug.md)                             | :heavy_check_mark:                                                             | Slug of the layout                                                             |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | Name of the layout                                                             |
| `isDefault`                                                                    | *boolean*                                                                      | :heavy_check_mark:                                                             | Whether the layout is the default layout                                       |
| `updatedAt`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | Last updated timestamp                                                         |
| `updatedBy`                                                                    | [components.UpdatedBy](../../models/components/updatedby.md)                   | :heavy_minus_sign:                                                             | User who last updated the layout                                               |
| `createdAt`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | Creation timestamp                                                             |
| `origin`                                                                       | [components.ResourceOriginEnum](../../models/components/resourceoriginenum.md) | :heavy_check_mark:                                                             | Origin of the layout                                                           |
| `type`                                                                         | [components.ResourceTypeEnum](../../models/components/resourcetypeenum.md)     | :heavy_check_mark:                                                             | Type of the layout                                                             |
| `variables`                                                                    | Record<string, *any*>                                                          | :heavy_minus_sign:                                                             | The variables JSON Schema for the layout                                       |
| `controls`                                                                     | [components.LayoutControlsDto](../../models/components/layoutcontrolsdto.md)   | :heavy_check_mark:                                                             | Controls metadata for the layout                                               |