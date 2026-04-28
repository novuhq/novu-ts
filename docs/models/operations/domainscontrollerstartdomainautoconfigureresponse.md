# DomainsControllerStartDomainAutoConfigureResponse

## Example Usage

```typescript
import { DomainsControllerStartDomainAutoConfigureResponse } from "@novu/api/models/operations";

let value: DomainsControllerStartDomainAutoConfigureResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    applyUrl: "https://square-whack.com/",
    providerName: "<value>",
    redirectUri: "https://separate-stump.org",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                  | Record<string, *string*[]>                                                                                 | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `result`                                                                                                   | [components.DomainConnectApplyUrlResponseDto](../../models/components/domainconnectapplyurlresponsedto.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |