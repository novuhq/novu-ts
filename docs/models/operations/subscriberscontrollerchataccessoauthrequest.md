# SubscribersControllerChatAccessOauthRequest

## Example Usage

```typescript
import { SubscribersControllerChatAccessOauthRequest } from "@novu/api/models/operations";

let value: SubscribersControllerChatAccessOauthRequest = {
  subscriberId: "<id>",
  providerId: "<value>",
  hmacHash: "<value>",
  environmentId: "<id>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `subscriberId`          | *string*                | :heavy_check_mark:      | N/A                     |
| `providerId`            | *any*                   | :heavy_check_mark:      | N/A                     |
| `hmacHash`              | *string*                | :heavy_check_mark:      | N/A                     |
| `environmentId`         | *string*                | :heavy_check_mark:      | N/A                     |
| `integrationIdentifier` | *string*                | :heavy_minus_sign:      | N/A                     |