# WorkflowControllerUpdateWorkflowByIdRequest

## Example Usage

```typescript
import { WorkflowControllerUpdateWorkflowByIdRequest } from "@novu/api/models/operations";

let value: WorkflowControllerUpdateWorkflowByIdRequest = {
    workflowId: "<value>",
    updateWorkflowRequestDto: {
        name: "<value>",
        notificationGroupId: "<value>",
    },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `workflowId`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `updateWorkflowRequestDto`                                                                 | [components.UpdateWorkflowRequestDto](../../models/components/updateworkflowrequestdto.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |