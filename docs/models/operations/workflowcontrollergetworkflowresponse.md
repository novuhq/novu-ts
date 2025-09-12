# WorkflowControllerGetWorkflowResponse

## Example Usage

```typescript
import { WorkflowControllerGetWorkflowResponse } from "@novu/api/models/operations";

let value: WorkflowControllerGetWorkflowResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    name: "<value>",
    id: "<id>",
    workflowId: "<id>",
    slug: {},
    updatedAt: "1735616917056",
    createdAt: "1725449855142",
    steps: [
      {
        controls: {
          values: {
            skip: {
              "and": [
                {
                  "==": [
                    {
                      "var": "payload.tier",
                    },
                    "pro",
                  ],
                },
                {
                  "==": [
                    {
                      "var": "subscriber.data.role",
                    },
                    "admin",
                  ],
                },
                {
                  ">": [
                    {
                      "var": "payload.amount",
                    },
                    "4",
                  ],
                },
              ],
            },
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
        slug: {},
        type: "digest",
        origin: "novu-cloud-v1",
        workflowId: "<id>",
        workflowDatabaseId: "<id>",
      },
    ],
    origin: "novu-cloud",
    preferences: {
      user: {
        all: {
          enabled: true,
          readOnly: false,
        },
        channels: {
          "email": {},
          "sms": {
            enabled: false,
          },
        },
      },
      default: {
        all: {
          enabled: true,
          readOnly: false,
        },
        channels: {
          "email": {},
          "sms": {
            enabled: false,
          },
        },
      },
    },
    status: "ACTIVE",
    severity: "low",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [components.WorkflowResponseDto](../../models/components/workflowresponsedto.md) | :heavy_check_mark:                                                               | N/A                                                                              |