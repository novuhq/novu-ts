# PublishSummaryDto

## Example Usage

```typescript
import { PublishSummaryDto } from "@novu/api/models/components";

let value: PublishSummaryDto = {
  resources: 4135.06,
  successful: 8363.5,
  failed: 6336.42,
  skipped: 5708.27,
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `resources`                   | *number*                      | :heavy_check_mark:            | Number of resources processed |
| `successful`                  | *number*                      | :heavy_check_mark:            | Number of successful syncs    |
| `failed`                      | *number*                      | :heavy_check_mark:            | Number of failed syncs        |
| `skipped`                     | *number*                      | :heavy_check_mark:            | Number of skipped resources   |