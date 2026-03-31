# GetEnvironmentVariableUsageResponseDto

## Example Usage

```typescript
import { GetEnvironmentVariableUsageResponseDto } from "@novu/api/models/components";

let value: GetEnvironmentVariableUsageResponseDto = {
  workflows: [
    {
      name: "Welcome Email",
      workflowId: "welcome-email",
    },
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `workflows`                                                                                                      | [components.EnvironmentVariableWorkflowInfoDto](../../models/components/environmentvariableworkflowinfodto.md)[] | :heavy_check_mark:                                                                                               | Array of workflows that reference this environment variable                                                      |