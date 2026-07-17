# PlanUsageDto

## Example Usage

```typescript
import { PlanUsageDto } from "@novu/api/models/components";

let value: PlanUsageDto = {
  used: 2238.12,
  limit: 5751.04,
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `used`                                                    | *number*                                                  | :heavy_check_mark:                                        | Current usage count for the resource in this environment. |
| `limit`                                                   | *number*                                                  | :heavy_check_mark:                                        | Amount included in the organization plan.                 |