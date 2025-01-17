# IdempotencyTestingDto

## Example Usage

```typescript
import { IdempotencyTestingDto } from "@novu/api/models/components";

let value: IdempotencyTestingDto = {
  expectedBehavior: "IMMEDIATE_RESPONSE",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `expectedBehavior`                                                                       | [components.IdempotencyBehaviorEnum](../../models/components/idempotencybehaviorenum.md) | :heavy_check_mark:                                                                       | The expected behavior of the idempotency request                                         |