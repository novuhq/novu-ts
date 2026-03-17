# SubscribersV1ControllerMarkActionAsSeenResponse

## Example Usage

```typescript
import { SubscribersV1ControllerMarkActionAsSeenResponse } from "@novu/api/models/operations";

let value: SubscribersV1ControllerMarkActionAsSeenResponse = {
  headers: {},
  result: {
    environmentId: "<id>",
    organizationId: "<id>",
    notificationId: "<id>",
    subscriberId: "<id>",
    subscriber: {
      firstName: "Alessia",
      lastName: "Mitchell",
      channels: [
        {
          providerId: "chat-webhook",
          integrationIdentifier: "<value>",
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
      isOnline: true,
      lastOnlineAt: null,
      subscriberId: "<id>",
      organizationId: "<id>",
      environmentId: "<id>",
      deleted: false,
      createdAt: "1734035424000",
      updatedAt: "1735620226725",
    },
    template: {
      name: "<value>",
      description:
        "frank mortally daily by bicycle bitterly until reschedule delightfully finally",
      active: false,
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
      ],
      steps: [],
      organizationId: "<id>",
      creatorId: "<id>",
      environmentId: "<id>",
      triggers: [
        {
          type: "event",
          identifier: "<value>",
          variables: [
            {
              name: "<value>",
            },
          ],
        },
      ],
      notificationGroupId: "<id>",
      deleted: true,
      deletedAt: "<value>",
      deletedBy: "<value>",
    },
    createdAt: "1734324059060",
    transactionId: "<id>",
    channel: "email",
    read: true,
    seen: true,
    cta: {},
    status: "sent",
    contextKeys: [
      "tenant:org-123",
      "region:us-east-1",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `headers`                                                                      | Record<string, *string*[]>                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `result`                                                                       | [components.MessageResponseDto](../../models/components/messageresponsedto.md) | :heavy_check_mark:                                                             | N/A                                                                            |