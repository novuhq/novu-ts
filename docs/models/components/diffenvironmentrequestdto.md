# DiffEnvironmentRequestDto

## Example Usage

```typescript
import { DiffEnvironmentRequestDto } from "@novu/api/models/components";

let value: DiffEnvironmentRequestDto = {
  sourceEnvironmentId: "507f1f77bcf86cd799439011",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `sourceEnvironmentId`                                                                                               | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | Source environment ID. Only the Development environment is currently supported; defaults to Development if omitted. | 507f1f77bcf86cd799439011                                                                                            |