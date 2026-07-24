# ChannelConnectionsControllerGetChannelConnectionByIdentifierResponse

## Example Usage

```typescript
import { ChannelConnectionsControllerGetChannelConnectionByIdentifierResponse } from "@novu/api/models/operations";

let value:
  ChannelConnectionsControllerGetChannelConnectionByIdentifierResponse = {
    headers: {},
    result: {
      identifier: "<value>",
      channel: "in_app",
      providerId: "slack",
      integrationIdentifier: "slack-prod",
      subscriberId: "subscriber-123",
      contextKeys: [
        "tenant:org-123",
        "region:us-east-1",
      ],
      workspace: {
        id: "T123456",
        name: "Acme HQ",
        botUserId: "U0123456789",
      },
      auth: {
        accessToken: "Workspace access token",
        refreshToken: "Workspace refresh token",
        expiresAt: "2026-06-15T12:00:00.000Z",
        refreshTokenExpiresAt: "2026-09-15T12:00:00.000Z",
      },
      createdAt: "1725328375497",
      updatedAt: "1735640461995",
    },
  };
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                | Record<string, *string*[]>                                                                               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `result`                                                                                                 | [components.GetChannelConnectionResponseDto](../../models/components/getchannelconnectionresponsedto.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |