# WorkflowControllerUpdateWorkflowByIdRequest

## Example Usage

```typescript
import { WorkflowControllerUpdateWorkflowByIdRequest } from "@novu/api/models/operations";

let value: WorkflowControllerUpdateWorkflowByIdRequest = {
  workflowId: "<id>",
  updateWorkflowRequestDto: {
    name: "<value>",
    notificationGroupId: "<id>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `workflowId`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `updateWorkflowRequestDto`                                                                 | [components.UpdateWorkflowRequestDto](../../models/components/updateworkflowrequestdto.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |