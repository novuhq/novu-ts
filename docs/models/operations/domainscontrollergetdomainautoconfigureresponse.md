# DomainsControllerGetDomainAutoConfigureResponse

## Example Usage

```typescript
import { DomainsControllerGetDomainAutoConfigureResponse } from "@novu/api/models/operations";

let value: DomainsControllerGetDomainAutoConfigureResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    available: false,
    manualRecords: [
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

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                              | Record<string, *string*[]>                                                                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `result`                                                                                               | [components.DomainConnectStatusResponseDto](../../models/components/domainconnectstatusresponsedto.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |