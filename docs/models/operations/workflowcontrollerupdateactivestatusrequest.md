# WorkflowControllerUpdateActiveStatusRequest

## Example Usage

```typescript
import { WorkflowControllerUpdateActiveStatusRequest } from "@novu/api/models/operations";

let value: WorkflowControllerUpdateActiveStatusRequest = {
  workflowId: "<id>",
  changeWorkflowStatusRequestDto: {
    active: false,
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `workflowId`                                                                                           | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `changeWorkflowStatusRequestDto`                                                                       | [components.ChangeWorkflowStatusRequestDto](../../models/components/changeworkflowstatusrequestdto.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |