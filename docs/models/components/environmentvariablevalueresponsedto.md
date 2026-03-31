# EnvironmentVariableValueResponseDto

## Example Usage

```typescript
import { EnvironmentVariableValueResponseDto } from "@novu/api/models/components";

let value: EnvironmentVariableValueResponseDto = {
  environmentId: "<id>",
  value: "<value>",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `environmentId`                                 | *string*                                        | :heavy_check_mark:                              | N/A                                             |
| `value`                                         | *string*                                        | :heavy_check_mark:                              | Value is masked (••••••••) for secret variables |