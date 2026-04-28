# DomainsControllerGetDomainRouteRequest

## Example Usage

```typescript
import { DomainsControllerGetDomainRouteRequest } from "@novu/api/models/operations";

let value: DomainsControllerGetDomainRouteRequest = {
  domain: "tidy-saloon.org",
  address: "70083 Kayden Ville",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `domain`                          | *string*                          | :heavy_check_mark:                | N/A                               |
| `address`                         | *string*                          | :heavy_check_mark:                | N/A                               |
| `idempotencyKey`                  | *string*                          | :heavy_minus_sign:                | A header for idempotency purposes |