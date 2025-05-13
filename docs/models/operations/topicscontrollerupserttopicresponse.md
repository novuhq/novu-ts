# TopicsControllerUpsertTopicResponse

## Example Usage

```typescript
import { TopicsControllerUpsertTopicResponse } from "@novu/api/models/operations";

let value: TopicsControllerUpsertTopicResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    id: "64da692e9a94fb2e6449ad06",
    key: "product-updates",
    name: "Product Updates",
    createdAt: "2023-08-15T00:00:00.000Z",
    updatedAt: "2023-08-15T00:00:00.000Z",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [components.TopicResponseDto](../../models/components/topicresponsedto.md) | :heavy_check_mark:                                                         | N/A                                                                        |