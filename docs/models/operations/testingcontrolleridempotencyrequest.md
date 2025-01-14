# TestingControllerIdempotencyRequest

## Example Usage

```typescript
import { TestingControllerIdempotencyRequest } from "@novu/api/models/operations";

let value: TestingControllerIdempotencyRequest = {
  idempotencyBodyDto: {
    data: 1201.96,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `idempotencyKey`                                                               | *string*                                                                       | :heavy_minus_sign:                                                             | A header for idempotency purposes                                              |
| `idempotencyBodyDto`                                                           | [components.IdempotencyBodyDto](../../models/components/idempotencybodydto.md) | :heavy_check_mark:                                                             | N/A                                                                            |