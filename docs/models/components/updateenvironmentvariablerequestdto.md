# UpdateEnvironmentVariableRequestDto

## Example Usage

```typescript
import { UpdateEnvironmentVariableRequestDto } from "@novu/api/models/components";

let value: UpdateEnvironmentVariableRequestDto = {};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `key`                                                                                                                    | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Unique key for the variable. Must start with a letter and contain only letters, digits, and underscores.                 |
| `type`                                                                                                                   | [components.UpdateEnvironmentVariableRequestDtoType](../../models/components/updateenvironmentvariablerequestdtotype.md) | :heavy_minus_sign:                                                                                                       | The type of the variable                                                                                                 |
| `isSecret`                                                                                                               | *boolean*                                                                                                                | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `values`                                                                                                                 | [components.EnvironmentVariableValueDto](../../models/components/environmentvariablevaluedto.md)[]                       | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |