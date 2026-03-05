# DiffSummaryDto

## Example Usage

```typescript
import { DiffSummaryDto } from "@novu/api/models/components";

let value: DiffSummaryDto = {
  added: 5209.41,
  modified: 3810.49,
  deleted: 6091.68,
  unchanged: 1970.68,
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `added`                                             | *number*                                            | :heavy_check_mark:                                  | Number of added resources (workflows and steps)     |
| `modified`                                          | *number*                                            | :heavy_check_mark:                                  | Number of modified resources (workflows and steps)  |
| `deleted`                                           | *number*                                            | :heavy_check_mark:                                  | Number of deleted resources (workflows and steps)   |
| `unchanged`                                         | *number*                                            | :heavy_check_mark:                                  | Number of unchanged resources (workflows and steps) |