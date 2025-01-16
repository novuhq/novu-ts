# HealthControllerGenerateRandomNumberResponse

## Example Usage

```typescript
import { HealthControllerGenerateRandomNumberResponse } from "@novu/api/models/operations";

let value: HealthControllerGenerateRandomNumberResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    number: 1,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `headers`                                                                                      | Record<string, *string*[]>                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `result`                                                                                       | [components.IdempotenceTestingResponse](../../models/components/idempotencetestingresponse.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |