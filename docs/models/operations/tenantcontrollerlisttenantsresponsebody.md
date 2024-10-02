# TenantControllerListTenantsResponseBody

## Example Usage

```typescript
import { TenantControllerListTenantsResponseBody } from "@novu/api/models/operations";

let value: TenantControllerListTenantsResponseBody = {
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
  page: 1861.93,
  pageSize: 9443.72,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `data`                                                                               | [components.GetTenantResponseDto](../../models/components/gettenantresponsedto.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `hasMore`                                                                            | *boolean*                                                                            | :heavy_check_mark:                                                                   | Does the list have more items to fetch                                               |
| `page`                                                                               | *number*                                                                             | :heavy_check_mark:                                                                   | The current page of the paginated response                                           |
| `pageSize`                                                                           | *number*                                                                             | :heavy_check_mark:                                                                   | Number of items on each page                                                         |