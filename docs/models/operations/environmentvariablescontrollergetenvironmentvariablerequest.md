# EnvironmentVariablesControllerGetEnvironmentVariableRequest

## Example Usage

```typescript
import { EnvironmentVariablesControllerGetEnvironmentVariableRequest } from "@novu/api/models/operations";

let value: EnvironmentVariablesControllerGetEnvironmentVariableRequest = {
  variableId: "<id>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `variableId`                      | *string*                          | :heavy_check_mark:                | N/A                               |
| `idempotencyKey`                  | *string*                          | :heavy_minus_sign:                | A header for idempotency purposes |