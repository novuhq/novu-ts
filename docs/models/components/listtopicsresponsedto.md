# ListTopicsResponseDto

## Example Usage

```typescript
import { ListTopicsResponseDto } from "@novu/api/models/components";

let value: ListTopicsResponseDto = {
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
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `data`                                                                          | [components.TopicResponseDto](../../models/components/topicresponsedto.md)[]    | :heavy_check_mark:                                                              | List of returned Topics                                                         |
| `next`                                                                          | *string*                                                                        | :heavy_check_mark:                                                              | The cursor for the next page of results, or null if there are no more pages.    |
| `previous`                                                                      | *string*                                                                        | :heavy_check_mark:                                                              | The cursor for the previous page of results, or null if this is the first page. |