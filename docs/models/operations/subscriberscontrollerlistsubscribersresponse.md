# SubscribersControllerListSubscribersResponse

## Example Usage

```typescript
import { SubscribersControllerListSubscribersResponse } from "@novu/api/models/operations";

let value: SubscribersControllerListSubscribersResponse = {
  result: {
    data: [
      {
        environmentId: "<value>",
        organizationId: "<value>",
        createdAt: "<value>",
        deleted: false,
        subscriberId: "<value>",
        updatedAt: "<value>",
      },
    ],
    hasMore: false,
    page: 9953,
    pageSize: 6531.08,
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                                                   | [operations.SubscribersControllerListSubscribersResponseBody](../../models/operations/subscriberscontrollerlistsubscribersresponsebody.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |