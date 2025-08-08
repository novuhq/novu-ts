# SubscribersV1ControllerMarkActionAsSeenResponse

## Example Usage

```typescript
import { SubscribersV1ControllerMarkActionAsSeenResponse } from "@novu/api/models/operations";

let value: SubscribersV1ControllerMarkActionAsSeenResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    environmentId: "<id>",
    organizationId: "<id>",
    notificationId: "<id>",
    subscriberId: "<id>",
    subscriber: {
      channels: [
        {
          providerId: "expo",
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
      deleted: true,
      createdAt: "1716157108336",
      updatedAt: "1735621323892",
    },
    template: {
      name: "<value>",
      description: "sport afore meal classic coast allegation pantyhose",
      active: true,
      draft: true,
      preferenceSettings: {
        email: true,
        sms: false,
        inApp: true,
        chat: false,
        push: true,
      },
      critical: false,
      tags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      steps: [],
      organizationId: "<id>",
      creatorId: "<id>",
      environmentId: "<id>",
      triggers: [],
      notificationGroupId: "<id>",
      deleted: false,
      deletedAt: "<value>",
      deletedBy: "<value>",
    },
    createdAt: "1725201746902",
    transactionId: "<id>",
    channel: "in_app",
    read: true,
    seen: true,
    cta: {},
    status: "error",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `headers`                                                                      | Record<string, *string*[]>                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `result`                                                                       | [components.MessageResponseDto](../../models/components/messageresponsedto.md) | :heavy_check_mark:                                                             | N/A                                                                            |