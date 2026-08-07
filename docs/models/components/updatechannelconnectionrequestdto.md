# UpdateChannelConnectionRequestDto

## Example Usage

```typescript
import { UpdateChannelConnectionRequestDto } from "@novu/api/models/components";

let value: UpdateChannelConnectionRequestDto = {
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
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `workspace`                                                        | [components.WorkspaceDto](../../models/components/workspacedto.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `auth`                                                             | [components.AuthDto](../../models/components/authdto.md)           | :heavy_check_mark:                                                 | N/A                                                                |