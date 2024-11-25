# GetTopicResponseDto

## Example Usage

```typescript
import { GetTopicResponseDto } from "@novu/api/models/components";

let value: GetTopicResponseDto = {
<<<<<<< Updated upstream
  environmentId: "<value>",
  organizationId: "<value>",
=======
  environmentId: "<id>",
  organizationId: "<id>",
>>>>>>> Stashed changes
  key: "<key>",
  name: "<value>",
  subscribers: [
    "<value>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `environmentId`    | *string*           | :heavy_check_mark: | N/A                |
| `id`               | *string*           | :heavy_minus_sign: | N/A                |
| `organizationId`   | *string*           | :heavy_check_mark: | N/A                |
| `key`              | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `subscribers`      | *string*[]         | :heavy_check_mark: | N/A                |