# ActivityControllerGetWorkflowRunResponse

## Example Usage

```typescript
import { ActivityControllerGetWorkflowRunResponse } from "@novu/api/models/operations";

let value: ActivityControllerGetWorkflowRunResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    id: "<id>",
    workflowId: "<id>",
    workflowName: "<value>",
    organizationId: "<id>",
    environmentId: "<id>",
    internalSubscriberId: "<id>",
    status: "completed",
    deliveryLifecycleStatus: "pending",
    triggerIdentifier: "<value>",
    transactionId: "<id>",
    createdAt: "1734616447094",
    updatedAt: "1735641790032",
    severity: "low",
    critical: true,
    topics: [
      {
        id: "64da692e9a94fb2e6449ad06",
        key: "product-updates",
        name: "Product Updates",
        data: {
          "category": "product",
          "priority": 1,
        },
        createdAt: "2023-08-15T00:00:00.000Z",
        updatedAt: "2023-08-15T00:00:00.000Z",
      },
    ],
    steps: [
      {
        stepRunId: "<id>",
        stepId: "<id>",
        stepType: "<value>",
        status: "canceled",
        createdAt: new Date("2026-05-08T16:33:55.451Z"),
        updatedAt: new Date("2024-08-15T06:13:55.502Z"),
        executionDetails: [],
      },
    ],
    payload: {},
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `headers`                                                                                    | Record<string, *string*[]>                                                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `result`                                                                                     | [components.GetWorkflowRunResponseDto](../../models/components/getworkflowrunresponsedto.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |