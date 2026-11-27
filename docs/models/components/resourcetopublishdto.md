# ResourceToPublishDto

## Example Usage

```typescript
import { ResourceToPublishDto } from "@novu/api/models/components";

let value: ResourceToPublishDto = {
  resourceType: "BRIDGE",
  resourceId: "workflow-id-1",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `resourceType`                                                             | [components.ResourceTypeEnum](../../models/components/resourcetypeenum.md) | :heavy_check_mark:                                                         | Type of the layout                                                         |                                                                            |
| `resourceId`                                                               | *string*                                                                   | :heavy_check_mark:                                                         | Unique identifier of the resource to publish                               | workflow-id-1                                                              |