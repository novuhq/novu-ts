# DomainsControllerListDomainsResponse

## Example Usage

```typescript
import { DomainsControllerListDomainsResponse } from "@novu/api/models/operations";

let value: DomainsControllerListDomainsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [],
  },
  result: {
    data: [
      {
        id: "<id>",
        name: "<value>",
        status: "pending",
        mxRecordConfigured: false,
        environmentId: "<id>",
        organizationId: "<id>",
        createdAt: "1728012190537",
        updatedAt: "1735613859020",
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
    ],
    next: "<value>",
    previous: "<value>",
    totalCount: 388.82,
    totalCountCapped: true,
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `headers`                                                                              | Record<string, *string*[]>                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `result`                                                                               | [components.ListDomainsResponseDto](../../models/components/listdomainsresponsedto.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |