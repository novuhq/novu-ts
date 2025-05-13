# SubscribersControllerListSubscriberTopicsRequest

## Example Usage

```typescript
import { SubscribersControllerListSubscriberTopicsRequest } from "@novu/api/models/operations";

let value: SubscribersControllerListSubscriberTopicsRequest = {
  subscriberId: "<id>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `subscriberId`                                                                             | *string*                                                                                   | :heavy_check_mark:                                                                         | The identifier of the subscriber                                                           |
| `after`                                                                                    | *string*                                                                                   | :heavy_minus_sign:                                                                         | Cursor for pagination indicating the starting point after which to fetch results.          |
| `before`                                                                                   | *string*                                                                                   | :heavy_minus_sign:                                                                         | Cursor for pagination indicating the ending point before which to fetch results.           |
| `limit`                                                                                    | *number*                                                                                   | :heavy_minus_sign:                                                                         | Limit the number of items to return (max 100)                                              |
| `orderDirection`                                                                           | [operations.QueryParamOrderDirection](../../models/operations/queryparamorderdirection.md) | :heavy_minus_sign:                                                                         | Direction of sorting                                                                       |
| `orderBy`                                                                                  | *string*                                                                                   | :heavy_minus_sign:                                                                         | Field to order by                                                                          |
| `includeCursor`                                                                            | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | Include cursor item in response                                                            |
| `key`                                                                                      | *string*                                                                                   | :heavy_minus_sign:                                                                         | Filter by topic key                                                                        |
| `idempotencyKey`                                                                           | *string*                                                                                   | :heavy_minus_sign:                                                                         | A header for idempotency purposes                                                          |