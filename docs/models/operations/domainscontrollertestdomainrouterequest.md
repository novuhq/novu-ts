# DomainsControllerTestDomainRouteRequest

## Example Usage

```typescript
import { DomainsControllerTestDomainRouteRequest } from "@novu/api/models/operations";

let value: DomainsControllerTestDomainRouteRequest = {
  domain: "coordinated-mouser.com",
  address: "79139 7th Street",
  testDomainRouteDto: {
    from: {
      address: "677 Hillside Road",
    },
    subject: "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `domain`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `address`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `idempotencyKey`                                                               | *string*                                                                       | :heavy_minus_sign:                                                             | A header for idempotency purposes                                              |
| `testDomainRouteDto`                                                           | [components.TestDomainRouteDto](../../models/components/testdomainroutedto.md) | :heavy_check_mark:                                                             | N/A                                                                            |