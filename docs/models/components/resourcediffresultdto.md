# ResourceDiffResultDto

## Example Usage

```typescript
import { ResourceDiffResultDto } from "@novu/api/models/components";

let value: ResourceDiffResultDto = {
  resourceType: "ECHO",
  sourceResource: {
    updatedAt: new Date("2024-01-15T10:30:00.000Z"),
  },
  targetResource: {
    updatedAt: new Date("2024-01-15T10:30:00.000Z"),
  },
  changes: [],
  summary: {
    added: 9701.24,
    modified: 8375.85,
    deleted: 6351.84,
    unchanged: 7377.2,
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `resourceType`                                                                         | [components.ResourceTypeEnum](../../models/components/resourcetypeenum.md)             | :heavy_check_mark:                                                                     | Type of the layout                                                                     |
| `sourceResource`                                                                       | [components.SourceResource](../../models/components/sourceresource.md)                 | :heavy_minus_sign:                                                                     | Source resource information                                                            |
| `targetResource`                                                                       | [components.TargetResource](../../models/components/targetresource.md)                 | :heavy_minus_sign:                                                                     | Target resource information                                                            |
| `changes`                                                                              | [components.ResourceDiffDto](../../models/components/resourcediffdto.md)[]             | :heavy_check_mark:                                                                     | List of specific changes for this resource                                             |
| `summary`                                                                              | [components.DiffSummaryDto](../../models/components/diffsummarydto.md)                 | :heavy_check_mark:                                                                     | Summary of changes for this resource                                                   |
| `dependencies`                                                                         | [components.ResourceDependencyDto](../../models/components/resourcedependencydto.md)[] | :heavy_minus_sign:                                                                     | Dependencies that affect this resource                                                 |