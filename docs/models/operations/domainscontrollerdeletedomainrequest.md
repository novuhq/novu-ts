# DomainsControllerDeleteDomainRequest

## Example Usage

```typescript
import { DomainsControllerDeleteDomainRequest } from "@novu/api/models/operations";

let value: DomainsControllerDeleteDomainRequest = {
  domain: "swift-hydrocarbon.net",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `domain`                          | *string*                          | :heavy_check_mark:                | N/A                               |
| `idempotencyKey`                  | *string*                          | :heavy_minus_sign:                | A header for idempotency purposes |