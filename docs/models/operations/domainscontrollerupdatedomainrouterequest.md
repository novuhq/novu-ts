# DomainsControllerUpdateDomainRouteRequest

## Example Usage

```typescript
import { DomainsControllerUpdateDomainRouteRequest } from "@novu/api/models/operations";

let value: DomainsControllerUpdateDomainRouteRequest = {
  domain: "avaricious-iridescence.com",
  address: "9039 Wood Street",
  updateDomainRouteDto: {},
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `domain`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `address`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `idempotencyKey`                                                                   | *string*                                                                           | :heavy_minus_sign:                                                                 | A header for idempotency purposes                                                  |
| `updateDomainRouteDto`                                                             | [components.UpdateDomainRouteDto](../../models/components/updatedomainroutedto.md) | :heavy_check_mark:                                                                 | N/A                                                                                |