# TestingControllerIdempotencyResponse

## Example Usage

```typescript
import { TestingControllerIdempotencyResponse } from "@novu/api/models/operations";

let value: TestingControllerIdempotencyResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    number: 2961.4,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [components.IdempotencyResponse](../../models/components/idempotencyresponse.md) | :heavy_check_mark:                                                               | N/A                                                                              |