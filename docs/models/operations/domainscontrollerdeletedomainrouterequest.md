# DomainsControllerDeleteDomainRouteRequest

## Example Usage

```typescript
import { DomainsControllerDeleteDomainRouteRequest } from "@novu/api/models/operations";

let value: DomainsControllerDeleteDomainRouteRequest = {
  domain: "pleasing-cow.net",
  address: "57745 Manor Way",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `domain`                          | *string*                          | :heavy_check_mark:                | N/A                               |
| `address`                         | *string*                          | :heavy_check_mark:                | N/A                               |
| `idempotencyKey`                  | *string*                          | :heavy_minus_sign:                | A header for idempotency purposes |