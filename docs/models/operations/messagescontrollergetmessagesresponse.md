# MessagesControllerGetMessagesResponse

## Example Usage

```typescript
import { MessagesControllerGetMessagesResponse } from "@novu/api/models/operations";

let value: MessagesControllerGetMessagesResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    hasMore: false,
    data: [
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
          createdAt: "1746288353859",
          updatedAt: "1746655560490",
        },
        template: {
          name: "<value>",
          description: "instead digital entwine cheese",
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
        createdAt: "1716308911811",
        content: [
          {
            type: "button",
            content: "<value>",
          },
        ],
        transactionId: "<id>",
        channel: "chat",
        read: false,
        seen: false,
        cta: {},
        status: "sent",
      },
    ],
    pageSize: 5045.67,
    page: 1342.74,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [components.MessagesResponseDto](../../models/components/messagesresponsedto.md) | :heavy_check_mark:                                                               | N/A                                                                              |