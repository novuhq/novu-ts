# EventsControllerTriggerBulkResponse

## Example Usage

```typescript
import { EventsControllerTriggerBulkResponse } from "@novu/api/models/operations";

let value: EventsControllerTriggerBulkResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    statusCode: 404,
    timestamp: "2024-12-12T13:00:00Z",
    path: "/api/v1/resource",
    message: "Resource not found.",
    ctx: {
      "workflowId": "some_wf_id",
      "stepId": "some_wf_id",
    },
    errorId: "abc123",
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `headers`                                              | Record<string, *string*[]>                             | :heavy_check_mark:                                     | N/A                                                    |
| `result`                                               | *operations.EventsControllerTriggerBulkResponseResult* | :heavy_check_mark:                                     | N/A                                                    |