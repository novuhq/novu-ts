# EnvironmentVariablesControllerGetEnvironmentVariableUsageResponse

## Example Usage

```typescript
import { EnvironmentVariablesControllerGetEnvironmentVariableUsageResponse } from "@novu/api/models/operations";

let value: EnvironmentVariablesControllerGetEnvironmentVariableUsageResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    workflows: [
      {
        name: "Welcome Email",
        workflowId: "welcome-email",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                              | Record<string, *string*[]>                                                                                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `result`                                                                                                               | [components.GetEnvironmentVariableUsageResponseDto](../../models/components/getenvironmentvariableusageresponsedto.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |