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
  result: [
    {
      acknowledged: false,
      status: "no_tenant_found",
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `headers`                                              | Record<string, *string*[]>                             | :heavy_check_mark:                                     | N/A                                                    |
| `result`                                               | *operations.EventsControllerTriggerBulkResponseResult* | :heavy_check_mark:                                     | N/A                                                    |