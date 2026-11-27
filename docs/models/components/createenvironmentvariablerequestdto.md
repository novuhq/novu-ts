# CreateEnvironmentVariableRequestDto

## Example Usage

```typescript
import { CreateEnvironmentVariableRequestDto } from "@novu/api/models/components";

let value: CreateEnvironmentVariableRequestDto = {
  key: "<key>",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `key`                                                                                                                    | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Unique key for the variable. Must start with a letter and contain only letters, digits, and underscores.                 |
| `type`                                                                                                                   | [components.CreateEnvironmentVariableRequestDtoType](../../models/components/createenvironmentvariablerequestdtotype.md) | :heavy_minus_sign:                                                                                                       | The type of the variable                                                                                                 |
| `isSecret`                                                                                                               | *boolean*                                                                                                                | :heavy_minus_sign:                                                                                                       | Whether this variable is a secret (encrypted at rest, masked in responses)                                               |
| `values`                                                                                                                 | [components.EnvironmentVariableValueDto](../../models/components/environmentvariablevaluedto.md)[]                       | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |