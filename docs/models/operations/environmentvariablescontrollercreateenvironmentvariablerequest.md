# EnvironmentVariablesControllerCreateEnvironmentVariableRequest

## Example Usage

```typescript
import { EnvironmentVariablesControllerCreateEnvironmentVariableRequest } from "@novu/api/models/operations";

let value: EnvironmentVariablesControllerCreateEnvironmentVariableRequest = {
  createEnvironmentVariableRequestDto: {
    key: "<key>",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                                 | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | A header for idempotency purposes                                                                                |
| `createEnvironmentVariableRequestDto`                                                                            | [components.CreateEnvironmentVariableRequestDto](../../models/components/createenvironmentvariablerequestdto.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |