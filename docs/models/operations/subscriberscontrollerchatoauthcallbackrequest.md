# SubscribersControllerChatOauthCallbackRequest

## Example Usage

```typescript
import { SubscribersControllerChatOauthCallbackRequest } from "@novu/api/models/operations";

let value: SubscribersControllerChatOauthCallbackRequest = {
  subscriberId: "<value>",
  providerId: "<value>",
  code: "<value>",
  hmacHash: "<value>",
  environmentId: "<value>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `subscriberId`          | *string*                | :heavy_check_mark:      | N/A                     |
| `providerId`            | *any*                   | :heavy_check_mark:      | N/A                     |
| `code`                  | *string*                | :heavy_check_mark:      | N/A                     |
| `hmacHash`              | *string*                | :heavy_check_mark:      | N/A                     |
| `environmentId`         | *string*                | :heavy_check_mark:      | N/A                     |
| `integrationIdentifier` | *string*                | :heavy_minus_sign:      | N/A                     |