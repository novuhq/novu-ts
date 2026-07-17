# AgentsControllerCreateAgentRequest

## Example Usage

```typescript
import { AgentsControllerCreateAgentRequest } from "@novu/api/models/operations";

let value: AgentsControllerCreateAgentRequest = {
  novuAnalyticsSource: "<value>",
  createAgentRequestDto: {
    name: "<value>",
    identifier: "<value>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `novuAnalyticsSource`                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `idempotencyKey`                                                                     | *string*                                                                             | :heavy_minus_sign:                                                                   | A header for idempotency purposes                                                    |
| `createAgentRequestDto`                                                              | [components.CreateAgentRequestDto](../../models/components/createagentrequestdto.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |