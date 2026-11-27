# IntegrationsControllerConfigureIntegrationWebhookResponse

## Example Usage

```typescript
import { IntegrationsControllerConfigureIntegrationWebhookResponse } from "@novu/api/models/operations";

let value: IntegrationsControllerConfigureIntegrationWebhookResponse = {
  headers: {
    "key": [],
  },
  result: {
    webhookUrl: "https://distorted-sushi.biz/",
    configuredAt: "<value>",
    botUsername: "<value>",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                        | Record<string, *string*[]>                                                                                       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `result`                                                                                                         | [components.ConfigureTelegramWebhookResponseDto](../../models/components/configuretelegramwebhookresponsedto.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |