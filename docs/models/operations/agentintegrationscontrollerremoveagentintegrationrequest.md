# AgentIntegrationsControllerRemoveAgentIntegrationRequest

## Example Usage

```typescript
import { AgentIntegrationsControllerRemoveAgentIntegrationRequest } from "@novu/api/models/operations";

let value: AgentIntegrationsControllerRemoveAgentIntegrationRequest = {
  identifier: "<value>",
  agentIntegrationId: "<id>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `identifier`                      | *string*                          | :heavy_check_mark:                | N/A                               |
| `agentIntegrationId`              | *string*                          | :heavy_check_mark:                | N/A                               |
| `idempotencyKey`                  | *string*                          | :heavy_minus_sign:                | A header for idempotency purposes |