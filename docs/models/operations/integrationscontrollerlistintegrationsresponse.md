# IntegrationsControllerListIntegrationsResponse

## Example Usage

```typescript
import { IntegrationsControllerListIntegrationsResponse } from "@novu/api/models/operations";

let value: IntegrationsControllerListIntegrationsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      environmentId: "<id>",
      organizationId: "<id>",
      name: "<value>",
      identifier: "<value>",
      providerId: "<id>",
      channel: "push",
      credentials: {},
      active: false,
      deleted: false,
      deletedAt: "<value>",
      deletedBy: "<value>",
      primary: false,
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.IntegrationResponseDto](../../models/components/integrationresponsedto.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |