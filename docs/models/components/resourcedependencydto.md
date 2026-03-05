# ResourceDependencyDto

## Example Usage

```typescript
import { ResourceDependencyDto } from "@novu/api/models/components";

let value: ResourceDependencyDto = {
  resourceType: "BRIDGE",
  resourceId: "<id>",
  resourceName: "<value>",
  isBlocking: false,
  reason: "LAYOUT_REQUIRED_FOR_WORKFLOW",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `resourceType`                                                                     | [components.ResourceTypeEnum](../../models/components/resourcetypeenum.md)         | :heavy_check_mark:                                                                 | Type of the layout                                                                 |
| `resourceId`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | ID of the dependent resource                                                       |
| `resourceName`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | Name of the dependent resource                                                     |
| `isBlocking`                                                                       | *boolean*                                                                          | :heavy_check_mark:                                                                 | Whether this dependency blocks the operation                                       |
| `reason`                                                                           | [components.DependencyReasonEnum](../../models/components/dependencyreasonenum.md) | :heavy_check_mark:                                                                 | Reason for the dependency                                                          |