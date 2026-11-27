# EnvironmentVariablesControllerDeleteEnvironmentVariableRequest

## Example Usage

```typescript
import { EnvironmentVariablesControllerDeleteEnvironmentVariableRequest } from "@novu/api/models/operations";

let value: EnvironmentVariablesControllerDeleteEnvironmentVariableRequest = {
  variableKey: "BASE_URL",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `variableKey`                                              | *string*                                                   | :heavy_check_mark:                                         | The unique key of the environment variable (e.g. BASE_URL) | BASE_URL                                                   |
| `idempotencyKey`                                           | *string*                                                   | :heavy_minus_sign:                                         | A header for idempotency purposes                          |                                                            |