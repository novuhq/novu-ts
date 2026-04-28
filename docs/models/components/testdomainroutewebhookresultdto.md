# TestDomainRouteWebhookResultDto

## Example Usage

```typescript
import { TestDomainRouteWebhookResultDto } from "@novu/api/models/components";

let value: TestDomainRouteWebhookResultDto = {
  latencyMs: 507.27,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `skipped`                                                                            | *boolean*                                                                            | :heavy_minus_sign:                                                                   | True when outbound webhooks are disabled for this environment (nothing was emitted). |
| `latencyMs`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |