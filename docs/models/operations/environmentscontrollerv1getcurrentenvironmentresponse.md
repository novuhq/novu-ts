# EnvironmentsControllerV1GetCurrentEnvironmentResponse

## Example Usage

```typescript
import { EnvironmentsControllerV1GetCurrentEnvironmentResponse } from "@novu/api/models/operations";

let value: EnvironmentsControllerV1GetCurrentEnvironmentResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    name: "<value>",
    organizationId: "<id>",
    identifier: "<value>",
    parentId: "<id>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `headers`                                                                              | Record<string, *string*[]>                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `result`                                                                               | [components.EnvironmentResponseDto](../../models/components/environmentresponsedto.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |