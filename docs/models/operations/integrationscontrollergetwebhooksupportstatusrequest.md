# IntegrationsControllerGetWebhookSupportStatusRequest

## Example Usage

```typescript
import { IntegrationsControllerGetWebhookSupportStatusRequest } from "@novu/api/models/operations";

let value: IntegrationsControllerGetWebhookSupportStatusRequest = {
  providerOrIntegrationId: "<id>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `idempotencyKey`                   | *string*                           | :heavy_minus_sign:                 | A header for idempotency purposes  |
| `providerOrIntegrationId`          | *string*                           | :heavy_check_mark:                 | N/A                                |