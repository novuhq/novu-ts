# DiffEnvironmentRequestDto

## Example Usage

```typescript
import { DiffEnvironmentRequestDto } from "@novu/api/models/components";

let value: DiffEnvironmentRequestDto = {
  sourceEnvironmentId: "507f1f77bcf86cd799439011",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `sourceEnvironmentId`                                                                           | *string*                                                                                        | :heavy_minus_sign:                                                                              | Source environment ID to compare from. Defaults to the Development environment if not provided. | 507f1f77bcf86cd799439011                                                                        |