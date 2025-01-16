# HealthControllerTestIdempotencyRequest

## Example Usage

```typescript
import { HealthControllerTestIdempotencyRequest } from "@novu/api/models/operations";

let value: HealthControllerTestIdempotencyRequest = {
  idempotencyTestingDto: {
    expectedBehavior: "IMMEDIATE_EXCEPTION",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `idempotencyKey`                                                                     | *string*                                                                             | :heavy_minus_sign:                                                                   | A header for idempotency purposes                                                    |
| `idempotencyTestingDto`                                                              | [components.IdempotencyTestingDto](../../models/components/idempotencytestingdto.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |