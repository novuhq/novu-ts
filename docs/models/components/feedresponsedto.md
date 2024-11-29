# FeedResponseDto

## Example Usage

```typescript
import { FeedResponseDto } from "@novu/api/models/components";

let value: FeedResponseDto = {
  hasMore: false,
  data: [
    "<value>",
  ],
  pageSize: 4471.25,
  page: 8464.09,
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