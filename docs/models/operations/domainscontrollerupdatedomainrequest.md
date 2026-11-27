# DomainsControllerUpdateDomainRequest

## Example Usage

```typescript
import { DomainsControllerUpdateDomainRequest } from "@novu/api/models/operations";

let value: DomainsControllerUpdateDomainRequest = {
  domain: "equatorial-hippodrome.biz",
  updateDomainDto: {},
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `domain`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `idempotencyKey`                                                         | *string*                                                                 | :heavy_minus_sign:                                                       | A header for idempotency purposes                                        |
| `updateDomainDto`                                                        | [components.UpdateDomainDto](../../models/components/updatedomaindto.md) | :heavy_check_mark:                                                       | N/A                                                                      |