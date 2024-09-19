# EnvironmentResponseDto

## Example Usage

```typescript
import { EnvironmentResponseDto } from "@novu/api/models/components";

let value: EnvironmentResponseDto = {
  organizationId: "<value>",
  parentId: "<value>",
  identifier: "<value>",
  name: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_minus_sign: | N/A                |
| `organizationId`   | *string*           | :heavy_check_mark: | N/A                |
| `parentId`         | *string*           | :heavy_check_mark: | N/A                |
| `apiKeys`          | *string*[]         | :heavy_minus_sign: | N/A                |
| `identifier`       | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |