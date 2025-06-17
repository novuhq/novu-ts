# WorkflowControllerCreateRequest

## Example Usage

```typescript
import { WorkflowControllerCreateRequest } from "@novu/api/models/operations";

let value: WorkflowControllerCreateRequest = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `idempotencyKey`                                                             | *string*                                                                     | :heavy_minus_sign:                                                           | A header for idempotency purposes                                            |
| `createWorkflowDto`                                                          | [components.CreateWorkflowDto](../../models/components/createworkflowdto.md) | :heavy_check_mark:                                                           | Workflow creation details                                                    |