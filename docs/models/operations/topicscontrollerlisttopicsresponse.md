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
    page: 6531.08,
    pageSize: 2532.92,
    totalCount: 4663.11,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.FilterTopicsResponseDto](../../models/components/filtertopicsresponsedto.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |