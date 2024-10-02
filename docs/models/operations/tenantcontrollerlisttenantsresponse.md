# TenantControllerListTenantsResponse

## Example Usage

```typescript
import { TenantControllerListTenantsResponse } from "@novu/api/models/operations";

let value: TenantControllerListTenantsResponse = {
  result: {
    data: [
      {
        environmentId: "<id>",
        id: "<id>",
        createdAt: "<value>",
        identifier: "<value>",
        updatedAt: "<value>",
      },
    ],
    hasMore: false,
    page: 7395.51,
    pageSize: 4904.59,
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                                 | [operations.TenantControllerListTenantsResponseBody](../../models/operations/tenantcontrollerlisttenantsresponsebody.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |