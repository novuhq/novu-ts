# DomainsControllerCreateDomainRequest

## Example Usage

```typescript
import { DomainsControllerCreateDomainRequest } from "@novu/api/models/operations";

let value: DomainsControllerCreateDomainRequest = {
  createDomainDto: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `idempotencyKey`                                                         | *string*                                                                 | :heavy_minus_sign:                                                       | A header for idempotency purposes                                        |
| `createDomainDto`                                                        | [components.CreateDomainDto](../../models/components/createdomaindto.md) | :heavy_check_mark:                                                       | N/A                                                                      |