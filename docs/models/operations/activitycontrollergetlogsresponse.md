# ActivityControllerGetLogsResponse

## Example Usage

```typescript
import { ActivityControllerGetLogsResponse } from "@novu/api/models/operations";

let value: ActivityControllerGetLogsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    data: [],
    total: 1090.52,
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `headers`                                                                              | Record<string, *string*[]>                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `result`                                                                               | [components.GetRequestsResponseDto](../../models/components/getrequestsresponsedto.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |