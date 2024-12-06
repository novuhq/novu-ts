# FeedResponseDto

## Example Usage

```typescript
import { FeedResponseDto } from "@novu/api/models/components";

let value: FeedResponseDto = {
  hasMore: false,
  data: [
    "<value>",
  ],
  pageSize: 5812.73,
  page: 8817.35,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `totalCount`       | *number*           | :heavy_minus_sign: | N/A                |
| `hasMore`          | *boolean*          | :heavy_check_mark: | N/A                |
| `data`             | *string*[]         | :heavy_check_mark: | N/A                |
| `pageSize`         | *number*           | :heavy_check_mark: | N/A                |
| `page`             | *number*           | :heavy_check_mark: | N/A                |