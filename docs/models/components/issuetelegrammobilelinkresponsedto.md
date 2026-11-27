# IssueTelegramMobileLinkResponseDto

## Example Usage

```typescript
import { IssueTelegramMobileLinkResponseDto } from "@novu/api/models/components";

let value: IssueTelegramMobileLinkResponseDto = {
  token: "<value>",
  url: "https://right-cinema.name",
  expiresAt: "1763426956527",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `token`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | Opaque, single-use token identifying this Telegram mobile-setup session      |
| `url`                                                                        | *string*                                                                     | :heavy_check_mark:                                                           | Absolute URL the user can open on a mobile device to complete Telegram setup |
| `expiresAt`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | ISO-8601 timestamp at which the token expires                                |