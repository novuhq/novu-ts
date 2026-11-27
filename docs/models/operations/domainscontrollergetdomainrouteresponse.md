# DomainsControllerGetDomainRouteResponse

## Example Usage

```typescript
import { DomainsControllerGetDomainRouteResponse } from "@novu/api/models/operations";

let value: DomainsControllerGetDomainRouteResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    id: "<id>",
    domainId: "<id>",
    address: "786 E Washington Avenue",
    type: "webhook",
    environmentId: "<id>",
    organizationId: "<id>",
    createdAt: "1716129897005",
    updatedAt: "1735608347096",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `headers`                                                                              | Record<string, *string*[]>                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `result`                                                                               | [components.DomainRouteResponseDto](../../models/components/domainrouteresponsedto.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |