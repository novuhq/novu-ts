# DomainsControllerVerifyDomainRequest

## Example Usage

```typescript
import { DomainsControllerVerifyDomainRequest } from "@novu/api/models/operations";

let value: DomainsControllerVerifyDomainRequest = {
  domain: "everlasting-elevator.com",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `domain`                          | *string*                          | :heavy_check_mark:                | N/A                               |
| `idempotencyKey`                  | *string*                          | :heavy_minus_sign:                | A header for idempotency purposes |