# MessageResponseDto

## Example Usage

```typescript
import { MessageResponseDto } from "@novu/api/models/components";

let value: MessageResponseDto = {
  environmentId: "<value>",
  messageTemplateId: "<value>",
  notificationId: "<value>",
  organizationId: "<value>",
  subscriberId: "<value>",
  templateId: "<value>",
  channel: "sms",
  content: {
    content: "<value>",
    type: "text",
  },
  createdAt: "<value>",
  cta: {
    data: {},
  },
  errorId: "<value>",
  errorText: "<value>",
  overrides: {},
  payload: {},
  read: false,
  seen: false,
  status: "sent",
  transactionId: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `environmentId`                                                                              | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `feedId`                                                                                     | [components.FeedId](../../models/components/feedid.md)                                       | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `id`                                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `messageTemplateId`                                                                          | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `notificationId`                                                                             | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `organizationId`                                                                             | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `subscriberId`                                                                               | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `templateId`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `channel`                                                                                    | [components.MessageResponseDtoChannel](../../models/components/messageresponsedtochannel.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `content`                                                                                    | *components.Content*                                                                         | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `createdAt`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `cta`                                                                                        | [components.MessageCTA](../../models/components/messagecta.md)                               | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `deviceTokens`                                                                               | *string*[]                                                                                   | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `directWebhookUrl`                                                                           | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `email`                                                                                      | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `errorId`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `errorText`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `lastReadDate`                                                                               | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `lastSeenDate`                                                                               | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `overrides`                                                                                  | [components.Overrides](../../models/components/overrides.md)                                 | :heavy_check_mark:                                                                           | Provider specific overrides used when triggering the notification                            |
| `payload`                                                                                    | [components.MessageResponseDtoPayload](../../models/components/messageresponsedtopayload.md) | :heavy_check_mark:                                                                           | The payload that was used to send the notification trigger                                   |
| `phone`                                                                                      | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `providerId`                                                                                 | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `read`                                                                                       | *boolean*                                                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `seen`                                                                                       | *boolean*                                                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `status`                                                                                     | [components.MessageResponseDtoStatus](../../models/components/messageresponsedtostatus.md)   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `subject`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `subscriber`                                                                                 | [components.SubscriberResponseDto](../../models/components/subscriberresponsedto.md)         | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `template`                                                                                   | [components.WorkflowResponse](../../models/components/workflowresponse.md)                   | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `templateIdentifier`                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `title`                                                                                      | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `transactionId`                                                                              | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |