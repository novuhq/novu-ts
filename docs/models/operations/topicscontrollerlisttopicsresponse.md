# TopicsControllerListTopicsResponse

## Example Usage

```typescript
import { TopicsControllerListTopicsResponse } from "@novu/api/models/operations";

let value: TopicsControllerListTopicsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    data: [
      {
        organizationId: "<id>",
        environmentId: "<id>",
        key: "<key>",
        name: "<value>",
        subscribers: [
          "<value>",
        ],
      },
    ],
    page: 1020.45,
    pageSize: 2088.77,
    totalCount: 1613.10,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.FilterTopicsResponseDto](../../models/components/filtertopicsresponsedto.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |