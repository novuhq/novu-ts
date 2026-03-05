# FailedWorkflowDto

## Example Usage

```typescript
import { FailedWorkflowDto } from "@novu/api/models/components";

let value: FailedWorkflowDto = {
  resourceType: "ECHO",
  resourceId: "<id>",
  resourceName: "<value>",
  error: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `resourceType`                                                             | [components.ResourceTypeEnum](../../models/components/resourcetypeenum.md) | :heavy_check_mark:                                                         | Type of the layout                                                         |
| `resourceId`                                                               | *string*                                                                   | :heavy_check_mark:                                                         | Resource ID                                                                |
| `resourceName`                                                             | *string*                                                                   | :heavy_check_mark:                                                         | Resource name                                                              |
| `error`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | Error message                                                              |
| `stack`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | Error stack trace                                                          |