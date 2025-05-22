# SubscribersControllerPatchSubscriberResponse

## Example Usage

```typescript
import { SubscribersControllerPatchSubscriberResponse } from "@novu/api/models/operations";

let value: SubscribersControllerPatchSubscriberResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    channels: [
      {
        providerId: "ryver",
        credentials: {
          webhookUrl: "https://example.com/webhook",
          channel: "general",
          deviceTokens: [
            "token1",
            "token2",
            "token3",
          ],
          alertUid: "12345-abcde",
          title: "Critical Alert",
          imageUrl: "https://example.com/image.png",
          state: "resolved",
          externalUrl: "https://example.com/details",
        },
        integrationId: "<id>",
      },
    ],
    subscriberId: "<id>",
    organizationId: "<id>",
    environmentId: "<id>",
    deleted: false,
    createdAt: "1715936709980",
    updatedAt: "1735668405042",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.SubscriberResponseDto](../../models/components/subscriberresponsedto.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |