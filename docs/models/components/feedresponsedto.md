# FeedResponseDto

## Example Usage

```typescript
import { FeedResponseDto } from "@novu/api/models/components";

let value: FeedResponseDto = {
  data: [
    "<value>",
  ],
  hasMore: false,
<<<<<<< Updated upstream
  page: 7917.25,
  pageSize: 8121.69,
=======
  page: 4386.02,
  pageSize: 9883.74,
>>>>>>> Stashed changes
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `data`             | *string*[]         | :heavy_check_mark: | N/A                |
| `hasMore`          | *boolean*          | :heavy_check_mark: | N/A                |
| `page`             | *number*           | :heavy_check_mark: | N/A                |
| `pageSize`         | *number*           | :heavy_check_mark: | N/A                |
| `totalCount`       | *number*           | :heavy_minus_sign: | N/A                |