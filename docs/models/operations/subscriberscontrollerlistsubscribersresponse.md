# SubscribersControllerListSubscribersResponse

## Example Usage

```typescript
import { SubscribersControllerListSubscribersResponse } from "@novu/api/models/operations";

let value: SubscribersControllerListSubscribersResponse = {
  result: {
    data: [
      {
<<<<<<< Updated upstream
        environmentId: "<value>",
        organizationId: "<value>",
        createdAt: "<value>",
        deleted: false,
        subscriberId: "<value>",
=======
        environmentId: "<id>",
        organizationId: "<id>",
        createdAt: "<value>",
        deleted: false,
        subscriberId: "<id>",
>>>>>>> Stashed changes
        updatedAt: "<value>",
      },
    ],
    hasMore: false,
<<<<<<< Updated upstream
    page: 9953,
    pageSize: 6531.08,
=======
    page: 6063.93,
    pageSize: 191.93,
>>>>>>> Stashed changes
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                                                   | [operations.SubscribersControllerListSubscribersResponseBody](../../models/operations/subscriberscontrollerlistsubscribersresponsebody.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |