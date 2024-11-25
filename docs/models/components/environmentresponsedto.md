# EnvironmentResponseDto

## Example Usage

```typescript
import { EnvironmentResponseDto } from "@novu/api/models/components";

let value: EnvironmentResponseDto = {
  name: "<value>",
  organizationId: "<id>",
  identifier: "<value>",
  parentId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_minus_sign: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `organizationId`   | *string*           | :heavy_check_mark: | N/A                |
| `identifier`       | *string*           | :heavy_check_mark: | N/A                |
| `apiKeys`          | *string*[]         | :heavy_minus_sign: | N/A                |
| `parentId`         | *string*           | :heavy_check_mark: | N/A                |
| `slug`             | *string*           | :heavy_minus_sign: | N/A                |