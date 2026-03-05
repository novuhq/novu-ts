# PublishEnvironmentResponseDto

## Example Usage

```typescript
import { PublishEnvironmentResponseDto } from "@novu/api/models/components";

let value: PublishEnvironmentResponseDto = {
  results: [
    {
      resourceType: "REGULAR",
      successful: [],
      failed: [
        {
          resourceType: "REGULAR",
          resourceId: "<id>",
          resourceName: "<value>",
          error: "<value>",
        },
      ],
      skipped: [],
      totalProcessed: 2749.86,
    },
  ],
  summary: {
    resources: 3200.4,
    successful: 3983.21,
    failed: 6873.9,
    skipped: 1386.22,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `results`                                                                    | [components.SyncResultDto](../../models/components/syncresultdto.md)[]       | :heavy_check_mark:                                                           | Sync results by resource type                                                |
| `summary`                                                                    | [components.PublishSummaryDto](../../models/components/publishsummarydto.md) | :heavy_check_mark:                                                           | Summary of the sync operation                                                |