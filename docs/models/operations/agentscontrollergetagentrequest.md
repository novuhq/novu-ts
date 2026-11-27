# AgentsControllerGetAgentRequest

## Example Usage

```typescript
import { AgentsControllerGetAgentRequest } from "@novu/api/models/operations";

let value: AgentsControllerGetAgentRequest = {
  identifier: "<value>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `identifier`                      | *string*                          | :heavy_check_mark:                | N/A                               |
| `idempotencyKey`                  | *string*                          | :heavy_minus_sign:                | A header for idempotency purposes |