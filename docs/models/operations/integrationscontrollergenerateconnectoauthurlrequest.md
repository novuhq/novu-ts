# IntegrationsControllerGenerateConnectOAuthUrlRequest

## Example Usage

```typescript
import { IntegrationsControllerGenerateConnectOAuthUrlRequest } from "@novu/api/models/operations";

let value: IntegrationsControllerGenerateConnectOAuthUrlRequest = {
  generateConnectOauthUrlRequestDto: {
    subscriberId: "subscriber-123",
    integrationIdentifier: "<value>",
    connectionIdentifier: "slack-connection-abc123",
    context: {
      "key": "org-acme",
    },
    scope: [
      "chat:write",
      "chat:write.public",
      "channels:read",
    ],
    connectionMode: "shared",
    autoLinkUser: true,
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `idempotencyKey`                                                                                             | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | A header for idempotency purposes                                                                            |
| `generateConnectOauthUrlRequestDto`                                                                          | [components.GenerateConnectOauthUrlRequestDto](../../models/components/generateconnectoauthurlrequestdto.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |