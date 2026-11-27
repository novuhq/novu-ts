# DomainsControllerCreateDomainRouteRequest

## Example Usage

```typescript
import { DomainsControllerCreateDomainRouteRequest } from "@novu/api/models/operations";

let value: DomainsControllerCreateDomainRouteRequest = {
  domain: "obvious-gray.biz",
  domainRouteDto: {
    address: "439 Friesen Rapid",
    type: "webhook",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `domain`                                                               | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `idempotencyKey`                                                       | *string*                                                               | :heavy_minus_sign:                                                     | A header for idempotency purposes                                      |
| `domainRouteDto`                                                       | [components.DomainRouteDto](../../models/components/domainroutedto.md) | :heavy_check_mark:                                                     | N/A                                                                    |