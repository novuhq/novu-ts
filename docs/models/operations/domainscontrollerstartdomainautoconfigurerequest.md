# DomainsControllerStartDomainAutoConfigureRequest

## Example Usage

```typescript
import { DomainsControllerStartDomainAutoConfigureRequest } from "@novu/api/models/operations";

let value: DomainsControllerStartDomainAutoConfigureRequest = {
  domain: "mammoth-outrun.net",
  createDomainConnectApplyUrlDto: {},
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `domain`                                                                                               | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `idempotencyKey`                                                                                       | *string*                                                                                               | :heavy_minus_sign:                                                                                     | A header for idempotency purposes                                                                      |
| `createDomainConnectApplyUrlDto`                                                                       | [components.CreateDomainConnectApplyUrlDto](../../models/components/createdomainconnectapplyurldto.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |