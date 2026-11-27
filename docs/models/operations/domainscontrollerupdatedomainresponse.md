# DomainsControllerUpdateDomainResponse

## Example Usage

```typescript
import { DomainsControllerUpdateDomainResponse } from "@novu/api/models/operations";

let value: DomainsControllerUpdateDomainResponse = {
  headers: {},
  result: {
    id: "<id>",
    name: "<value>",
    status: "verified",
    mxRecordConfigured: true,
    environmentId: "<id>",
    organizationId: "<id>",
    createdAt: "1724095515582",
    updatedAt: "1735634619681",
    expectedDnsRecords: [
      {
        type: "MX",
        name: "inbound",
        content: "inbound-smtp.us-east-1.amazonaws.com",
        ttl: "Auto",
        priority: 10,
      },
    ],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [components.DomainResponseDto](../../models/components/domainresponsedto.md) | :heavy_check_mark:                                                           | N/A                                                                          |