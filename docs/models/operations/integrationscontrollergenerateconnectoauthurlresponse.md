# IntegrationsControllerGenerateConnectOAuthUrlResponse

## Example Usage

```typescript
import { IntegrationsControllerGenerateConnectOAuthUrlResponse } from "@novu/api/models/operations";

let value: IntegrationsControllerGenerateConnectOAuthUrlResponse = {
  headers: {},
  result: {
    url: "https://slack.com/oauth/v2/authorize?state=...",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                | Record<string, *string*[]>                                                                               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `result`                                                                                                 | [components.GenerateChatOAuthUrlResponseDto](../../models/components/generatechatoauthurlresponsedto.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |