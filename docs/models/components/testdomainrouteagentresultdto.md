# TestDomainRouteAgentResultDto

## Example Usage

```typescript
import { TestDomainRouteAgentResultDto } from "@novu/api/models/components";

let value: TestDomainRouteAgentResultDto = {
  agentId: "<id>",
  httpStatus: 1933.75,
  latencyMs: 299.22,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `agentId`                                                      | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `httpStatus`                                                   | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `agentReply`                                                   | [components.AgentReply](../../models/components/agentreply.md) | :heavy_minus_sign:                                             | Parsed JSON body from the agent webhook response when JSON.    |
| `latencyMs`                                                    | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |