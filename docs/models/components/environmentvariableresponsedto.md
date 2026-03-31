# EnvironmentVariableResponseDto

## Example Usage

```typescript
import { EnvironmentVariableResponseDto } from "@novu/api/models/components";

let value: EnvironmentVariableResponseDto = {
  id: "<id>",
  organizationId: "<id>",
  key: "<key>",
  type: "string",
  isSecret: true,
  values: [],
  createdAt: "1725995686408",
  updatedAt: "1735654232186",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `organizationId`                                                                                                   | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `key`                                                                                                              | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `type`                                                                                                             | [components.EnvironmentVariableResponseDtoType](../../models/components/environmentvariableresponsedtotype.md)     | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `isSecret`                                                                                                         | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `values`                                                                                                           | [components.EnvironmentVariableValueResponseDto](../../models/components/environmentvariablevalueresponsedto.md)[] | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `createdAt`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `updatedAt`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |