# IntegrationsControllerListIntegrationsResponse

## Example Usage

```typescript
import { IntegrationsControllerListIntegrationsResponse } from "@novu/api/models/operations";

let value: IntegrationsControllerListIntegrationsResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [],
  },
  result: [],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.IntegrationResponseDto](../../models/components/integrationresponsedto.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |