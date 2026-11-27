# EnvironmentDiffSummaryDto

## Example Usage

```typescript
import { EnvironmentDiffSummaryDto } from "@novu/api/models/components";

let value: EnvironmentDiffSummaryDto = {
  totalEntities: 8018.52,
  totalChanges: 3380.91,
  hasChanges: false,
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `totalEntities`                   | *number*                          | :heavy_check_mark:                | Total number of entities compared |
| `totalChanges`                    | *number*                          | :heavy_check_mark:                | Total number of changes detected  |
| `hasChanges`                      | *boolean*                         | :heavy_check_mark:                | Whether any changes were detected |