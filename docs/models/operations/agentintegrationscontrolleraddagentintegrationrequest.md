# AgentIntegrationsControllerAddAgentIntegrationRequest

## Example Usage

```typescript
import { AgentIntegrationsControllerAddAgentIntegrationRequest } from "@novu/api/models/operations";

let value: AgentIntegrationsControllerAddAgentIntegrationRequest = {
  identifier: "<value>",
  addAgentIntegrationRequestDto: {},
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `identifier`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `idempotencyKey`                                                                                     | *string*                                                                                             | :heavy_minus_sign:                                                                                   | A header for idempotency purposes                                                                    |
| `addAgentIntegrationRequestDto`                                                                      | [components.AddAgentIntegrationRequestDto](../../models/components/addagentintegrationrequestdto.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |