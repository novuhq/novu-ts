# SubscribersV1ControllerMarkMessagesAsResponse

## Example Usage

```typescript
import { SubscribersV1ControllerMarkMessagesAsResponse } from "@novu/api/models/operations";

let value: SubscribersV1ControllerMarkMessagesAsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      templateId: "<id>",
      environmentId: "<id>",
      messageTemplateId: "<id>",
      organizationId: "<id>",
      notificationId: "<id>",
      subscriberId: "<id>",
      subscriber: {
        channels: [
          {
            providerId: "pushpad",
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
        createdAt: "1733586522481",
        updatedAt: "1735621534249",
      },
      template: {
        name: "<value>",
        description: "weary goodwill until skean yahoo preclude",
        active: false,
        draft: false,
        preferenceSettings: {
          email: true,
          sms: false,
          inApp: true,
          chat: false,
          push: true,
        },
        critical: false,
        tags: [
          "<value>",
        ],
        steps: [
          {},
        ],
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
        deleted: false,
        deletedAt: "<value>",
        deletedBy: "<value>",
      },
      createdAt: "1725507428969",
      content: "<value>",
      transactionId: "<id>",
      channel: "in_app",
      read: false,
      seen: false,
      cta: {},
      status: "error",
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [components.MessageResponseDto](../../models/components/messageresponsedto.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |