# PublishEnvironmentRequestDto

## Example Usage

```typescript
import { PublishEnvironmentRequestDto } from "@novu/api/models/components";

let value: PublishEnvironmentRequestDto = {
  sourceEnvironmentId: "507f1f77bcf86cd799439011",
  resources: [
    {
      resourceType: "REGULAR",
      resourceId: "workflow-id-1",
    },
  ],
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `sourceEnvironmentId`                                                                                               | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | Source environment ID. Only the Development environment is currently supported; defaults to Development if omitted. | 507f1f77bcf86cd799439011                                                                                            |
| `dryRun`                                                                                                            | *boolean*                                                                                                           | :heavy_minus_sign:                                                                                                  | Perform a dry run without making actual changes                                                                     |                                                                                                                     |
| `resources`                                                                                                         | [components.ResourceToPublishDto](../../models/components/resourcetopublishdto.md)[]                                | :heavy_minus_sign:                                                                                                  | Array of specific resources to publish. If not provided, all resources will be published.                           |                                                                                                                     |