# IntegrationsControllerCreateIntegrationMobileLinkResponse

## Example Usage

```typescript
import { IntegrationsControllerCreateIntegrationMobileLinkResponse } from "@novu/api/models/operations";

let value: IntegrationsControllerCreateIntegrationMobileLinkResponse = {
  headers: {},
  result: {
    token: "<value>",
    url: "https://vague-thread.org",
    expiresAt: "1749349293985",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                      | Record<string, *string*[]>                                                                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `result`                                                                                                       | [components.IssueTelegramMobileLinkResponseDto](../../models/components/issuetelegrammobilelinkresponsedto.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |