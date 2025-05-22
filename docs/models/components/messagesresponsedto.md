# MessagesResponseDto

## Example Usage

```typescript
import { MessagesResponseDto } from "@novu/api/models/components";

let value: MessagesResponseDto = {
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
            providerId: "mattermost",
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
        createdAt: "1705508733696",
        updatedAt: "1735669990741",
      },
      template: {
        name: "<value>",
        description: "probate when likewise",
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
      createdAt: "1704256238598",
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
  pageSize: 8224.89,
  page: 7670.01,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `totalCount`                                                                     | *number*                                                                         | :heavy_minus_sign:                                                               | Total number of messages available                                               |
| `hasMore`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | Indicates if there are more messages available                                   |
| `data`                                                                           | [components.MessageResponseDto](../../models/components/messageresponsedto.md)[] | :heavy_check_mark:                                                               | List of messages                                                                 |
| `pageSize`                                                                       | *number*                                                                         | :heavy_check_mark:                                                               | Number of messages per page                                                      |
| `page`                                                                           | *number*                                                                         | :heavy_check_mark:                                                               | Current page number                                                              |