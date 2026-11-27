# AuthDto

## Example Usage

```typescript
import { AuthDto } from "@novu/api/models/components";

let value: AuthDto = {
  accessToken: "Workspace access token",
  refreshToken: "Workspace refresh token",
  expiresAt: "2026-06-15T12:00:00.000Z",
  refreshTokenExpiresAt: "2026-09-15T12:00:00.000Z",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              | Example                  |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `accessToken`            | *string*                 | :heavy_check_mark:       | N/A                      | Workspace access token   |
| `refreshToken`           | *string*                 | :heavy_minus_sign:       | N/A                      | Workspace refresh token  |
| `expiresAt`              | *string*                 | :heavy_minus_sign:       | N/A                      | 2026-06-15T12:00:00.000Z |
| `refreshTokenExpiresAt`  | *string*                 | :heavy_minus_sign:       | N/A                      | 2026-09-15T12:00:00.000Z |