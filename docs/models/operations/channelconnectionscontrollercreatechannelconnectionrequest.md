# ChannelConnectionsControllerCreateChannelConnectionRequest

## Example Usage

```typescript
import { ChannelConnectionsControllerCreateChannelConnectionRequest } from "@novu/api/models/operations";

let value: ChannelConnectionsControllerCreateChannelConnectionRequest = {
  createChannelConnectionRequestDto: {
    identifier: "slack-prod-user123-abc4",
    subscriberId: "subscriber-123",
    context: {
      "key": "org-acme",
    },
    connectionMode: "shared",
    integrationIdentifier: "slack-prod",
    workspace: {
      id: "T123456",
      name: "Acme HQ",
    },
    auth: {
      accessToken: "Workspace access token",
      refreshToken: "Workspace refresh token",
      expiresAt: "2026-06-15T12:00:00.000Z",
      refreshTokenExpiresAt: "2026-09-15T12:00:00.000Z",
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `idempotencyKey`                                                                                             | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | A header for idempotency purposes                                                                            |
| `createChannelConnectionRequestDto`                                                                          | [components.CreateChannelConnectionRequestDto](../../models/components/createchannelconnectionrequestdto.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |