# IdempotencyBehaviorEnum

The expected behavior of the idempotency request

## Example Usage

```typescript
import { IdempotencyBehaviorEnum } from "@novu/api/models/components";

let value: IdempotencyBehaviorEnum = "IMMEDIATE_RESPONSE";
```

## Values

```typescript
"IMMEDIATE_RESPONSE" | "IMMEDIATE_EXCEPTION" | "DELAYED_RESPONSE"
```