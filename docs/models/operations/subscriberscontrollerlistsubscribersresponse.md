# SubscribersControllerListSubscribersResponse

## Example Usage

```typescript
import { SubscribersControllerListSubscribersResponse } from "@novu/api/models/operations";

let value: SubscribersControllerListSubscribersResponse = {
  result: {
    data: [
      {
        environmentId: "<id>",
        organizationId: "<id>",
        createdAt: "<value>",
        deleted: false,
        subscriberId: "<id>",
        updatedAt: "<value>",
      },
    ],
    hasMore: false,
    page: 1716.30,
    pageSize: 5210.37,
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                                                   | [operations.SubscribersControllerListSubscribersResponseBody](../../models/operations/subscriberscontrollerlistsubscribersresponsebody.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |