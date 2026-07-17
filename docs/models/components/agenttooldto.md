# AgentToolDto

## Example Usage

```typescript
import { AgentToolDto } from "@novu/api/models/components";

let value: AgentToolDto = {
  externalId: "<id>",
  name: "<value>",
  type: "builtin",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `externalId`                                                               | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `type`                                                                     | [components.AgentToolDtoType](../../models/components/agenttooldtotype.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `description`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |