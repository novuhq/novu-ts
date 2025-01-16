# HealthControllerTestIdempotencyResponse

## Example Usage

```typescript
import { HealthControllerTestIdempotencyResponse } from "@novu/api/models/operations";

let value: HealthControllerTestIdempotencyResponse = {
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