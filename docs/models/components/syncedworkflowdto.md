# SyncedWorkflowDto

## Example Usage

```typescript
import { SyncedWorkflowDto } from "@novu/api/models/components";

let value: SyncedWorkflowDto = {
  resourceType: "ECHO",
  resourceId: "<id>",
  resourceName: "<value>",
  action: "skipped",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `resourceType`                                                             | [components.ResourceTypeEnum](../../models/components/resourcetypeenum.md) | :heavy_check_mark:                                                         | Type of the layout                                                         |
| `resourceId`                                                               | *string*                                                                   | :heavy_check_mark:                                                         | Resource ID                                                                |
| `resourceName`                                                             | *string*                                                                   | :heavy_check_mark:                                                         | Resource name                                                              |
| `action`                                                                   | [components.SyncActionEnum](../../models/components/syncactionenum.md)     | :heavy_check_mark:                                                         | Sync action performed                                                      |