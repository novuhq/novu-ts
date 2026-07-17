# UpdateAgentRequestDto

## Example Usage

```typescript
import { UpdateAgentRequestDto } from "@novu/api/models/components";

let value: UpdateAgentRequestDto = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `name`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `description`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `active`                                                                   | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `behavior`                                                                 | [components.AgentBehaviorDto](../../models/components/agentbehaviordto.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `bridgeUrl`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Production bridge URL for this agent                                       |
| `devBridgeUrl`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | Development bridge URL (set by npx novu dev)                               |
| `devBridgeActive`                                                          | *boolean*                                                                  | :heavy_minus_sign:                                                         | Whether the dev bridge override is active                                  |