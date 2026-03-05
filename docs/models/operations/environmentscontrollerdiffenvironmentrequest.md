# EnvironmentsControllerDiffEnvironmentRequest

## Example Usage

```typescript
import { EnvironmentsControllerDiffEnvironmentRequest } from "@novu/api/models/operations";

let value: EnvironmentsControllerDiffEnvironmentRequest = {
  targetEnvironmentId: "6615943e7ace93b0540ae377",
  diffEnvironmentRequestDto: {
    sourceEnvironmentId: "507f1f77bcf86cd799439011",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `targetEnvironmentId`                                                                        | *string*                                                                                     | :heavy_check_mark:                                                                           | Target environment ID (MongoDB ObjectId) to compare against                                  | 6615943e7ace93b0540ae377                                                                     |
| `idempotencyKey`                                                                             | *string*                                                                                     | :heavy_minus_sign:                                                                           | A header for idempotency purposes                                                            |                                                                                              |
| `diffEnvironmentRequestDto`                                                                  | [components.DiffEnvironmentRequestDto](../../models/components/diffenvironmentrequestdto.md) | :heavy_check_mark:                                                                           | Diff request configuration                                                                   |                                                                                              |