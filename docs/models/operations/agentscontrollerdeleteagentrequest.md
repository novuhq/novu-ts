# AgentsControllerDeleteAgentRequest

## Example Usage

```typescript
import { AgentsControllerDeleteAgentRequest } from "@novu/api/models/operations";

let value: AgentsControllerDeleteAgentRequest = {
  identifier: "<value>",
  deleteFromProvider: "<value>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `identifier`                      | *string*                          | :heavy_check_mark:                | N/A                               |
| `deleteFromProvider`              | *string*                          | :heavy_check_mark:                | N/A                               |
| `idempotencyKey`                  | *string*                          | :heavy_minus_sign:                | A header for idempotency purposes |