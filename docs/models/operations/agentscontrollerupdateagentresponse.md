# AgentsControllerUpdateAgentResponse

## Example Usage

```typescript
import { AgentsControllerUpdateAgentResponse } from "@novu/api/models/operations";

let value: AgentsControllerUpdateAgentResponse = {
  headers: {
    "key": [],
    "key1": [],
  },
  result: {
    id: "<id>",
    name: "<value>",
    identifier: "<value>",
    active: true,
    environmentId: "<id>",
    organizationId: "<id>",
    createdAt: "1707758016061",
    updatedAt: "1735643927918",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [components.AgentResponseDto](../../models/components/agentresponsedto.md) | :heavy_check_mark:                                                         | N/A                                                                        |