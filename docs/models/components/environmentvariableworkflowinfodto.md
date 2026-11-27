# EnvironmentVariableWorkflowInfoDto

## Example Usage

```typescript
import { EnvironmentVariableWorkflowInfoDto } from "@novu/api/models/components";

let value: EnvironmentVariableWorkflowInfoDto = {
  name: "Welcome Email",
  workflowId: "welcome-email",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           | Example                               |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `name`                                | *string*                              | :heavy_check_mark:                    | The name of the workflow              | Welcome Email                         |
| `workflowId`                          | *string*                              | :heavy_check_mark:                    | The unique identifier of the workflow | welcome-email                         |