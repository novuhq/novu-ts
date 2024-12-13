# SubscribersControllerCreateSubscriberResponse

## Example Usage

```typescript
import { SubscribersControllerCreateSubscriberResponse } from "@novu/api/models/operations";

let value: SubscribersControllerCreateSubscriberResponse = {
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
    errors: {
      "fieldName1": {
        messages: [
          "Field is required",
          "Must be a valid email address",
        ],
        value: "invalidEmail",
      },
      "fieldName2": {
        messages: [
          "Must be at least 18 years old",
        ],
        value: 17,
      },
      "fieldName3": {
        messages: [
          "Must be a boolean value",
        ],
        value: true,
      },
      "fieldName4": {
        messages: [
          "Must be a valid object",
        ],
        value: false,
      },
    },
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | *operations.SubscribersControllerCreateSubscriberResponseResult* | :heavy_check_mark:                                               | N/A                                                              |