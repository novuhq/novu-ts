# LayoutsControllerListRequest

## Example Usage

```typescript
import { LayoutsControllerListRequest } from "@novu/api/models/operations";

let value: LayoutsControllerListRequest = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `limit`                                                                                        | *number*                                                                                       | :heavy_minus_sign:                                                                             | Number of items to return per page                                                             |
| `offset`                                                                                       | *number*                                                                                       | :heavy_minus_sign:                                                                             | Number of items to skip before starting to return results                                      |
| `orderDirection`                                                                               | [components.DirectionEnum](../../models/components/directionenum.md)                           | :heavy_minus_sign:                                                                             | Direction of sorting                                                                           |
| `orderBy`                                                                                      | [components.LayoutResponseDtoSortField](../../models/components/layoutresponsedtosortfield.md) | :heavy_minus_sign:                                                                             | Field to sort the results by                                                                   |
| `query`                                                                                        | *string*                                                                                       | :heavy_minus_sign:                                                                             | Search query to filter layouts                                                                 |
| `idempotencyKey`                                                                               | *string*                                                                                       | :heavy_minus_sign:                                                                             | A header for idempotency purposes                                                              |