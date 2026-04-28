# IntegrationsControllerGenerateLinkUserOAuthUrlRequest

## Example Usage

```typescript
import { IntegrationsControllerGenerateLinkUserOAuthUrlRequest } from "@novu/api/models/operations";

let value: IntegrationsControllerGenerateLinkUserOAuthUrlRequest = {
  generateLinkUserOauthUrlRequestDto: {
    subscriberId: "subscriber-123",
    integrationIdentifier: "<value>",
    connectionIdentifier: "slack-connection-abc123",
    context: {
      "key": "org-acme",
    },
    userScope: [
      "identity.basic",
    ],
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                               | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | A header for idempotency purposes                                                                              |
| `generateLinkUserOauthUrlRequestDto`                                                                           | [components.GenerateLinkUserOauthUrlRequestDto](../../models/components/generatelinkuseroauthurlrequestdto.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |