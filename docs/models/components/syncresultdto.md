# SyncResultDto

## Example Usage

```typescript
import { SyncResultDto } from "@novu/api/models/components";

let value: SyncResultDto = {
  resourceType: "BRIDGE",
  successful: [],
  failed: [],
  skipped: [
    {
      resourceType: "BRIDGE",
      resourceId: "<id>",
      resourceName: "<value>",
      reason: "<value>",
    },
  ],
  totalProcessed: 4581.22,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `resourceType`                                                                   | [components.ResourceTypeEnum](../../models/components/resourcetypeenum.md)       | :heavy_check_mark:                                                               | Type of the layout                                                               |
| `successful`                                                                     | [components.SyncedWorkflowDto](../../models/components/syncedworkflowdto.md)[]   | :heavy_check_mark:                                                               | Successfully synced resources                                                    |
| `failed`                                                                         | [components.FailedWorkflowDto](../../models/components/failedworkflowdto.md)[]   | :heavy_check_mark:                                                               | Failed resource syncs                                                            |
| `skipped`                                                                        | [components.SkippedWorkflowDto](../../models/components/skippedworkflowdto.md)[] | :heavy_check_mark:                                                               | Skipped resources                                                                |
| `totalProcessed`                                                                 | *number*                                                                         | :heavy_check_mark:                                                               | Total number of resources processed                                              |