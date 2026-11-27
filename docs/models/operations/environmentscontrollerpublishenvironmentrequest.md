# EnvironmentsControllerPublishEnvironmentRequest

## Example Usage

```typescript
import { EnvironmentsControllerPublishEnvironmentRequest } from "@novu/api/models/operations";

let value: EnvironmentsControllerPublishEnvironmentRequest = {
  targetEnvironmentId: "6615943e7ace93b0540ae377",
  publishEnvironmentRequestDto: {
    sourceEnvironmentId: "507f1f77bcf86cd799439011",
    resources: [
      {
        resourceType: "REGULAR",
        resourceId: "workflow-id-1",
      },
    ],
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `targetEnvironmentId`                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | Target environment ID (MongoDB ObjectId) to publish resources to                                   | 6615943e7ace93b0540ae377                                                                           |
| `idempotencyKey`                                                                                   | *string*                                                                                           | :heavy_minus_sign:                                                                                 | A header for idempotency purposes                                                                  |                                                                                                    |
| `publishEnvironmentRequestDto`                                                                     | [components.PublishEnvironmentRequestDto](../../models/components/publishenvironmentrequestdto.md) | :heavy_check_mark:                                                                                 | Publish request configuration                                                                      |                                                                                                    |