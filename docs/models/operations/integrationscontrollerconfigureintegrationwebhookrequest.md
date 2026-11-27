# IntegrationsControllerConfigureIntegrationWebhookRequest

## Example Usage

```typescript
import { IntegrationsControllerConfigureIntegrationWebhookRequest } from "@novu/api/models/operations";

let value: IntegrationsControllerConfigureIntegrationWebhookRequest = {
  integrationIdentifier: "<value>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `integrationIdentifier`           | *string*                          | :heavy_check_mark:                | N/A                               |
| `idempotencyKey`                  | *string*                          | :heavy_minus_sign:                | A header for idempotency purposes |