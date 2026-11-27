# AgentsControllerUpdateAgentBridgeRequest

## Example Usage

```typescript
import { AgentsControllerUpdateAgentBridgeRequest } from "@novu/api/models/operations";

let value: AgentsControllerUpdateAgentBridgeRequest = {
  identifier: "<value>",
  updateAgentBridgeRequestDto: {},
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `identifier`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `idempotencyKey`                                                                                 | *string*                                                                                         | :heavy_minus_sign:                                                                               | A header for idempotency purposes                                                                |
| `updateAgentBridgeRequestDto`                                                                    | [components.UpdateAgentBridgeRequestDto](../../models/components/updateagentbridgerequestdto.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |