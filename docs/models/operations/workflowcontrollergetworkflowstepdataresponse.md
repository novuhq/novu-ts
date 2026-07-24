# WorkflowControllerGetWorkflowStepDataResponse

## Example Usage

```typescript
import { WorkflowControllerGetWorkflowStepDataResponse } from "@novu/api/models/operations";

let value: WorkflowControllerGetWorkflowStepDataResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
  },
  result: {
    controls: {},
    providerOverrides: {
      pagerduty: {
        "severity": "warning",
        "source": "novu",
        "summary": "{{payload.title}}",
      },
      opsgenie: {
        "priority": "P2",
        "message": "{{payload.title}}",
      },
    },
    variables: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    stepId: "<id>",
    id: "<id>",
    name: "<value>",
    slug: "<value>",
    type: "<value>",
    origin: "novu-cloud",
    workflowId: "<id>",
    workflowDatabaseId: "<id>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [components.StepResponseDto](../../models/components/stepresponsedto.md) | :heavy_check_mark:                                                       | N/A                                                                      |