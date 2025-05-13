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
        id: "64da692e9a94fb2e6449ad06",
        key: "product-updates",
        name: "Product Updates",
        createdAt: "2023-08-15T00:00:00.000Z",
        updatedAt: "2023-08-15T00:00:00.000Z",
      },
    ],
    next: "<value>",
    previous: "<value>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.ListTopicsResponseDto](../../models/components/listtopicsresponsedto.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |