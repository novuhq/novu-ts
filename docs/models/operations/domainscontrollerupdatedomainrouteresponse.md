# DomainsControllerUpdateDomainRouteResponse

## Example Usage

```typescript
import { DomainsControllerUpdateDomainRouteResponse } from "@novu/api/models/operations";

let value: DomainsControllerUpdateDomainRouteResponse = {
  headers: {
    "key": [],
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