# ErrorDto

## Example Usage

```typescript
import { ErrorDto } from "@novu/api/models/components";

let value: ErrorDto = {
  statusCode: 404,
  timestamp: "2024-12-12T13:00:00Z",
  path: "/api/v1/resource",
  message: "Resource not found.",
  ctx: {
    "workflowId": "some_wf_id",
    "stepId": "some_wf_id",
  },
  errorId: "abc123",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `statusCode`                                                                                                             | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | HTTP status code of the error response.                                                                                  | 404                                                                                                                      |
| `timestamp`                                                                                                              | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Timestamp of when the error occurred.                                                                                    | 2024-12-12T13:00:00Z                                                                                                     |
| `path`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The path where the error occurred.                                                                                       | /api/v1/resource                                                                                                         |
| `message`                                                                                                                | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | A detailed error message.                                                                                                | Resource not found.                                                                                                      |
| `ctx`                                                                                                                    | Record<string, *any*>                                                                                                    | :heavy_minus_sign:                                                                                                       | Optional context object for additional error details.                                                                    | {<br/>"workflowId": "some_wf_id",<br/>"stepId": "some_wf_id"<br/>}                                                       |
| `errorId`                                                                                                                | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Optional unique identifier for the error, useful for tracking using Sentry and <br/>      New Relic, only available for 500. | abc123                                                                                                                   |