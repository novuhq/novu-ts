# AgentIntegrationsControllerAddAgentIntegrationResponse

## Example Usage

```typescript
import { AgentIntegrationsControllerAddAgentIntegrationResponse } from "@novu/api/models/operations";

let value: AgentIntegrationsControllerAddAgentIntegrationResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    id: "<id>",
    agentId: "<id>",
    integration: {
      id: "<id>",
      identifier: "<value>",
      name: "<value>",
      providerId: "<id>",
      active: true,
    },
    environmentId: "<id>",
    organizationId: "<id>",
    createdAt: "1735379849026",
    updatedAt: "1735623464037",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `headers`                                                                                        | Record<string, *string*[]>                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `result`                                                                                         | [components.AgentIntegrationResponseDto](../../models/components/agentintegrationresponsedto.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |