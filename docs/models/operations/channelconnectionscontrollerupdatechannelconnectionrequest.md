# ChannelConnectionsControllerUpdateChannelConnectionRequest

## Example Usage

```typescript
import { ChannelConnectionsControllerUpdateChannelConnectionRequest } from "@novu/api/models/operations";

let value: ChannelConnectionsControllerUpdateChannelConnectionRequest = {
  identifier: "<value>",
  updateChannelConnectionRequestDto: {
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
| `identifier`                                                                                                 | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The unique identifier of the channel connection                                                              |
| `idempotencyKey`                                                                                             | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | A header for idempotency purposes                                                                            |
| `updateChannelConnectionRequestDto`                                                                          | [components.UpdateChannelConnectionRequestDto](../../models/components/updatechannelconnectionrequestdto.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |