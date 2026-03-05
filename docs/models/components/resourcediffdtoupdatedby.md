# ResourceDiffDtoUpdatedBy

User who last updated the resource

## Example Usage

```typescript
import { ResourceDiffDtoUpdatedBy } from "@novu/api/models/components";

let value: ResourceDiffDtoUpdatedBy = {
  id: "<id>",
  firstName: "Bell",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | User ID            |
| `firstName`        | *string*           | :heavy_check_mark: | User first name    |
| `lastName`         | *string*           | :heavy_minus_sign: | User last name     |
| `externalId`       | *string*           | :heavy_minus_sign: | User external ID   |