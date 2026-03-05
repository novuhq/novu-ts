# ResourceDiffResultDtoSourceResourceUpdatedBy

User who last updated the resource

## Example Usage

```typescript
import { ResourceDiffResultDtoSourceResourceUpdatedBy } from "@novu/api/models/components";

let value: ResourceDiffResultDtoSourceResourceUpdatedBy = {
  id: "<id>",
  firstName: "Napoleon",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | User ID            |
| `firstName`        | *string*           | :heavy_check_mark: | User first name    |
| `lastName`         | *string*           | :heavy_minus_sign: | User last name     |
| `externalId`       | *string*           | :heavy_minus_sign: | User external ID   |