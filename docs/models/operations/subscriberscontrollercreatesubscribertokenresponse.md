# SubscribersControllerCreateSubscriberTokenResponse

## Example Usage

```typescript
import { SubscribersControllerCreateSubscriberTokenResponse } from "@novu/api/models/operations";

let value: SubscribersControllerCreateSubscriberTokenResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    token: "<value>",
    expiresAt: new Date("2025-01-01T00:10:00.000Z"),
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                  | Record<string, *string*[]>                                                                                 | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `result`                                                                                                   | [components.CreateSubscriberTokenResponseDto](../../models/components/createsubscribertokenresponsedto.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |