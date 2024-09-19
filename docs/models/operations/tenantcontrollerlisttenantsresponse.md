# TenantControllerListTenantsResponse

## Example Usage

```typescript
import { TenantControllerListTenantsResponse } from "@novu/api/models/operations";

let value: TenantControllerListTenantsResponse = {
  result: {
    data: [
      {
        environmentId: "<value>",
        id: "<id>",
        createdAt: "<value>",
        identifier: "<value>",
        updatedAt: "<value>",
      },
    ],
    hasMore: false,
    page: 1965.82,
    pageSize: 9495.72,
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                                 | [operations.TenantControllerListTenantsResponseBody](../../models/operations/tenantcontrollerlisttenantsresponsebody.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |