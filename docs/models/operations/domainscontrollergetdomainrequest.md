# DomainsControllerGetDomainRequest

## Example Usage

```typescript
import { DomainsControllerGetDomainRequest } from "@novu/api/models/operations";

let value: DomainsControllerGetDomainRequest = {
  domain: "sugary-haversack.com",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `domain`                          | *string*                          | :heavy_check_mark:                | N/A                               |
| `idempotencyKey`                  | *string*                          | :heavy_minus_sign:                | A header for idempotency purposes |