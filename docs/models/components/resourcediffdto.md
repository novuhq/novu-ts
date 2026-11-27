# ResourceDiffDto

## Example Usage

```typescript
import { ResourceDiffDto } from "@novu/api/models/components";

let value: ResourceDiffDto = {
  sourceResource: {
    updatedAt: new Date("2024-01-15T10:30:00.000Z"),
  },
  targetResource: null,
  resourceType: "BRIDGE",
  action: "moved",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `sourceResource`                                                                                     | [components.ResourceDiffDtoSourceResource](../../models/components/resourcediffdtosourceresource.md) | :heavy_minus_sign:                                                                                   | Source resource information                                                                          |
| `targetResource`                                                                                     | [components.ResourceDiffDtoTargetResource](../../models/components/resourcediffdtotargetresource.md) | :heavy_minus_sign:                                                                                   | Target resource information                                                                          |
| `resourceType`                                                                                       | [components.ResourceTypeEnum](../../models/components/resourcetypeenum.md)                           | :heavy_check_mark:                                                                                   | Type of the layout                                                                                   |
| `action`                                                                                             | [components.DiffActionEnum](../../models/components/diffactionenum.md)                               | :heavy_check_mark:                                                                                   | Type of change                                                                                       |
| `diffs`                                                                                              | [components.Diffs](../../models/components/diffs.md)                                                 | :heavy_minus_sign:                                                                                   | Detailed changes (only for modified resources)                                                       |
| `stepType`                                                                                           | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Step type (only for step resources)                                                                  |
| `previousIndex`                                                                                      | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Previous index in steps array (for moved/deleted steps)                                              |
| `newIndex`                                                                                           | *number*                                                                                             | :heavy_minus_sign:                                                                                   | New index in steps array (for moved/added steps)                                                     |