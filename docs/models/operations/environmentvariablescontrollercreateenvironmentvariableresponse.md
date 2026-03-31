# EnvironmentVariablesControllerCreateEnvironmentVariableResponse

## Example Usage

```typescript
import { EnvironmentVariablesControllerCreateEnvironmentVariableResponse } from "@novu/api/models/operations";

let value: EnvironmentVariablesControllerCreateEnvironmentVariableResponse = {
  headers: {},
  result: {
    id: "<id>",
    organizationId: "<id>",
    key: "<key>",
    type: "string",
    isSecret: true,
    values: [
      {
        environmentId: "<id>",
        value: "<value>",
      },
    ],
    createdAt: "1731844513409",
    updatedAt: "1735619878445",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                              | Record<string, *string*[]>                                                                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `result`                                                                                               | [components.EnvironmentVariableResponseDto](../../models/components/environmentvariableresponsedto.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |