# ResourceDiffResultDtoUpdatedBy

User who last updated the resource

## Example Usage

```typescript
import { ResourceDiffResultDtoUpdatedBy } from "@novu/api/models/components";

let value: ResourceDiffResultDtoUpdatedBy = {
  id: "<id>",
  firstName: "Valerie",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `id`                                       | *string*                                   | :heavy_check_mark:                         | User ID                                    |
| `firstName`                                | *string*                                   | :heavy_check_mark:                         | User first name                            |
| `lastName`                                 | *string*                                   | :heavy_minus_sign:                         | User last name                             |
| `externalId`                               | *string*                                   | :heavy_minus_sign:                         | User external ID                           |
| `email`                                    | *string*                                   | :heavy_minus_sign:                         | User email, used when the user has no name |