# InboundWebhooksControllerHandleWebhookRequest

## Example Usage

```typescript
import { InboundWebhooksControllerHandleWebhookRequest } from "@novu/api/models/operations";

let value: InboundWebhooksControllerHandleWebhookRequest = {
  environmentId: "<id>",
  integrationId: "<id>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `environmentId`                   | *string*                          | :heavy_check_mark:                | N/A                               |
| `integrationId`                   | *string*                          | :heavy_check_mark:                | N/A                               |
| `idempotencyKey`                  | *string*                          | :heavy_minus_sign:                | A header for idempotency purposes |