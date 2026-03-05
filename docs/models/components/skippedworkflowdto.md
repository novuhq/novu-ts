# SkippedWorkflowDto

## Example Usage

```typescript
import { SkippedWorkflowDto } from "@novu/api/models/components";

let value: SkippedWorkflowDto = {
  resourceType: "ECHO",
  resourceId: "<id>",
  resourceName: "<value>",
  reason: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `resourceType`                                                             | [components.ResourceTypeEnum](../../models/components/resourcetypeenum.md) | :heavy_check_mark:                                                         | Type of the layout                                                         |
| `resourceId`                                                               | *string*                                                                   | :heavy_check_mark:                                                         | Resource ID                                                                |
| `resourceName`                                                             | *string*                                                                   | :heavy_check_mark:                                                         | Resource name                                                              |
| `reason`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | Reason for skipping                                                        |