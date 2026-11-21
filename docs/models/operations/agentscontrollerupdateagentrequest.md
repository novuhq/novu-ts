# AgentsControllerUpdateAgentRequest

## Example Usage

```typescript
import { AgentsControllerUpdateAgentRequest } from "@novu/api/models/operations";

let value: AgentsControllerUpdateAgentRequest = {
  identifier: "<value>",
  updateAgentRequestDto: {
    behavior: {
      accessRule: {
        "in": [
          {
            "var": "context.tenant.data.plan",
          },
          [
            "pro",
            "enterprise",
          ],
        ],
      },
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `identifier`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `idempotencyKey`                                                                     | *string*                                                                             | :heavy_minus_sign:                                                                   | A header for idempotency purposes                                                    |
| `updateAgentRequestDto`                                                              | [components.UpdateAgentRequestDto](../../models/components/updateagentrequestdto.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |