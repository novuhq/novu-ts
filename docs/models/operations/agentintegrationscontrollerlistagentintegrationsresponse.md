# AgentIntegrationsControllerListAgentIntegrationsResponse

## Example Usage

```typescript
import { AgentIntegrationsControllerListAgentIntegrationsResponse } from "@novu/api/models/operations";

let value: AgentIntegrationsControllerListAgentIntegrationsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    data: [],
    next: "<value>",
    previous: "<value>",
    totalCount: 802.96,
    totalCountCapped: true,
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                  | Record<string, *string*[]>                                                                                 | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `result`                                                                                                   | [components.ListAgentIntegrationsResponseDto](../../models/components/listagentintegrationsresponsedto.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |