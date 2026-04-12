# EnvironmentVariablesControllerUpdateEnvironmentVariableRequest

## Example Usage

```typescript
import { EnvironmentVariablesControllerUpdateEnvironmentVariableRequest } from "@novu/api/models/operations";

let value: EnvironmentVariablesControllerUpdateEnvironmentVariableRequest = {
  variableKey: "BASE_URL",
  updateEnvironmentVariableRequestDto: {},
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `variableKey`                                                                                                    | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The unique key of the environment variable (e.g. BASE_URL)                                                       | BASE_URL                                                                                                         |
| `idempotencyKey`                                                                                                 | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | A header for idempotency purposes                                                                                |                                                                                                                  |
| `updateEnvironmentVariableRequestDto`                                                                            | [components.UpdateEnvironmentVariableRequestDto](../../models/components/updateenvironmentvariablerequestdto.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |                                                                                                                  |