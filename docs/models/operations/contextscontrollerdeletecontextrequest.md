# ContextsControllerDeleteContextRequest

## Example Usage

```typescript
import { ContextsControllerDeleteContextRequest } from "@novu/api/models/operations";

let value: ContextsControllerDeleteContextRequest = {
  id: "<id>",
  type: "<value>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `id`                              | *string*                          | :heavy_check_mark:                | Context ID                        |
| `type`                            | *string*                          | :heavy_check_mark:                | Context type                      |
| `idempotencyKey`                  | *string*                          | :heavy_minus_sign:                | A header for idempotency purposes |