# EnvironmentVariablesControllerGetEnvironmentVariableUsageRequest

## Example Usage

```typescript
import { EnvironmentVariablesControllerGetEnvironmentVariableUsageRequest } from "@novu/api/models/operations";

let value: EnvironmentVariablesControllerGetEnvironmentVariableUsageRequest = {
  variableId: "<id>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `variableId`                      | *string*                          | :heavy_check_mark:                | N/A                               |
| `idempotencyKey`                  | *string*                          | :heavy_minus_sign:                | A header for idempotency purposes |