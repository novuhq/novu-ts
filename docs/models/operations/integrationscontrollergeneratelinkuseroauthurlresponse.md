# IntegrationsControllerGenerateLinkUserOAuthUrlResponse

## Example Usage

```typescript
import { IntegrationsControllerGenerateLinkUserOAuthUrlResponse } from "@novu/api/models/operations";

let value: IntegrationsControllerGenerateLinkUserOAuthUrlResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
  },
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