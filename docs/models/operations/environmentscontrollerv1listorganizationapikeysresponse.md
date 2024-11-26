# EnvironmentsControllerV1ListOrganizationApiKeysResponse

## Example Usage

```typescript
import { EnvironmentsControllerV1ListOrganizationApiKeysResponse } from "@novu/api/models/operations";

let value: EnvironmentsControllerV1ListOrganizationApiKeysResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      key: "<key>",
      userId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `headers`                                                | Record<string, *string*[]>                               | :heavy_check_mark:                                       | N/A                                                      |
| `result`                                                 | [components.ApiKey](../../models/components/apikey.md)[] | :heavy_check_mark:                                       | N/A                                                      |