# AgentIntegrationsControllerUpdateAgentIntegrationRequest

## Example Usage

```typescript
import { AgentIntegrationsControllerUpdateAgentIntegrationRequest } from "@novu/api/models/operations";

let value: AgentIntegrationsControllerUpdateAgentIntegrationRequest = {
  identifier: "<value>",
  agentIntegrationId: "<id>",
  updateAgentIntegrationRequestDto: {
    integrationIdentifier: "<value>",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `identifier`                                                                                               | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `agentIntegrationId`                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `idempotencyKey`                                                                                           | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | A header for idempotency purposes                                                                          |
| `updateAgentIntegrationRequestDto`                                                                         | [components.UpdateAgentIntegrationRequestDto](../../models/components/updateagentintegrationrequestdto.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |