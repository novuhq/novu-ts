# DomainsControllerListDomainRoutesResponse

## Example Usage

```typescript
import { DomainsControllerListDomainRoutesResponse } from "@novu/api/models/operations";

let value: DomainsControllerListDomainRoutesResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    data: [],
    next: null,
    previous: "<value>",
    totalCount: 3672.24,
    totalCountCapped: false,
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `headers`                                                                                        | Record<string, *string*[]>                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `result`                                                                                         | [components.ListDomainRoutesResponseDto](../../models/components/listdomainroutesresponsedto.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |