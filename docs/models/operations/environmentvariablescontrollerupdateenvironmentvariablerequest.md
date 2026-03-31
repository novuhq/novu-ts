# EnvironmentVariablesControllerUpdateEnvironmentVariableRequest

## Example Usage

```typescript
import { EnvironmentVariablesControllerUpdateEnvironmentVariableRequest } from "@novu/api/models/operations";

let value: EnvironmentVariablesControllerUpdateEnvironmentVariableRequest = {
  variableId: "<id>",
  updateEnvironmentVariableRequestDto: {},
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `variableId`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `idempotencyKey`                                                                                                 | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | A header for idempotency purposes                                                                                |
| `updateEnvironmentVariableRequestDto`                                                                            | [components.UpdateEnvironmentVariableRequestDto](../../models/components/updateenvironmentvariablerequestdto.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |