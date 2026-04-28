# DomainsControllerGetDomainAutoConfigureRequest

## Example Usage

```typescript
import { DomainsControllerGetDomainAutoConfigureRequest } from "@novu/api/models/operations";

let value: DomainsControllerGetDomainAutoConfigureRequest = {
  domain: "variable-descendant.net",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `domain`                          | *string*                          | :heavy_check_mark:                | N/A                               |
| `idempotencyKey`                  | *string*                          | :heavy_minus_sign:                | A header for idempotency purposes |