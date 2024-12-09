# NotificationDto

## Example Usage

```typescript
import { NotificationDto } from "@novu/api/models/components";

let value: NotificationDto = {
  id: "<id>",
  templateId: "<id>",
  environmentId: "<id>",
  messageTemplateId: "<id>",
  organizationId: "<id>",
  notificationId: "<id>",
  subscriberId: "<id>",
  feedId: "<id>",
  jobId: "<id>",
  transactionId: "<id>",
  content: "<value>",
  channel: "chat",
  read: false,
  seen: false,
  deleted: false,
  cta: {
    data: {},
  },
  status: "error",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for the notification.                                                       |
| `templateId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier for the template used to generate the notification.                                |
| `environmentId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier for the environment where the notification is sent.                                |
| `messageTemplateId`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier for the message template used.                                                     |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier for the organization sending the notification.                                     |
| `notificationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for the notification instance.                                              |
| `subscriberId`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for the subscriber receiving the notification.                              |
| `feedId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier for the feed associated with the notification.                                     |
| `jobId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier for the job that triggered the notification.                                       |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp indicating when the notification was created.                                       |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp indicating when the notification was last updated.                                  |
| `actor`                                                                                       | [components.Actor](../../models/components/actor.md)                                          | :heavy_minus_sign:                                                                            | Actor details related to the notification, if applicable.                                     |
| `subscriber`                                                                                  | [components.SubscriberResponseDto](../../models/components/subscriberresponsedto.md)          | :heavy_minus_sign:                                                                            | Subscriber details associated with this notification.                                         |
| `transactionId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for the transaction associated with the notification.                       |
| `templateIdentifier`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Identifier for the template used, if applicable.                                              |
| `providerId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | Identifier for the provider that sends the notification.                                      |
| `content`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The main content of the notification.                                                         |
| `subject`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The subject line for email notifications, if applicable.                                      |
| `channel`                                                                                     | [components.NotificationDtoChannel](../../models/components/notificationdtochannel.md)        | :heavy_check_mark:                                                                            | The channel through which the notification is sent.                                           |
| `read`                                                                                        | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Indicates whether the notification has been read by the subscriber.                           |
| `seen`                                                                                        | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Indicates whether the notification has been seen by the subscriber.                           |
| `deleted`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Indicates whether the notification has been deleted.                                          |
| `deviceTokens`                                                                                | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Device tokens for push notifications, if applicable.                                          |
| `cta`                                                                                         | [components.MessageCTA](../../models/components/messagecta.md)                                | :heavy_check_mark:                                                                            | Call-to-action information associated with the notification.                                  |
| `status`                                                                                      | [components.NotificationDtoStatus](../../models/components/notificationdtostatus.md)          | :heavy_check_mark:                                                                            | Current status of the notification.                                                           |
| `payload`                                                                                     | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The payload that was used to send the notification trigger.                                   |
| `overrides`                                                                                   | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Provider-specific overrides used when triggering the notification.                            |