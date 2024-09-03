# WorkflowControllerListWorkflowsRequest

## Example Usage

```typescript
import { WorkflowControllerListWorkflowsRequest } from "@novu/api/models/operations";

let value: WorkflowControllerListWorkflowsRequest = {};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `page`                                                                                                                          | *number*                                                                                                                        | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `limit`                                                                                                                         | *number*                                                                                                                        | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `query`                                                                                                                         | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | A query string to filter the results. It allows filtering based on either the name or trigger identifier of the workflow items. |