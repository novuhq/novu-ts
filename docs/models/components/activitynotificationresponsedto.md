# ActivityNotificationResponseDto

## Example Usage

```typescript
import { ActivityNotificationResponseDto } from "@novu/api/models/components";

let value: ActivityNotificationResponseDto = {
  environmentId: "<id>",
  organizationId: "<id>",
  subscriberId: "<id>",
  transactionId: "<id>",
  jobs: [
    {
      id: "<id>",
      type: "in_app",
      executionDetails: [
        {
          id: "<id>",
          status: "Success",
          detail: "<value>",
          isRetry: false,
          isTest: true,
          providerId: "emailjs",
          source: "Webhook",
        },
      ],
      step: {
        id: "<id>",
        active: false,
        filters: [],
        templateId: "<id>",
      },
      overrides: {
        "workflowId": "some_wf_id",
        "stepId": "some_wf_id",
      },
      providerId: "mobishastra",
      status: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Unique identifier of the notification                                                                                        |
| `environmentId`                                                                                                              | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | Environment ID of the notification                                                                                           |
| `organizationId`                                                                                                             | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | Organization ID of the notification                                                                                          |
| `subscriberId`                                                                                                               | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | Subscriber ID of the notification                                                                                            |
| `transactionId`                                                                                                              | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | Transaction ID of the notification                                                                                           |
| `templateId`                                                                                                                 | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Template ID of the notification                                                                                              |
| `digestedNotificationId`                                                                                                     | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Digested Notification ID                                                                                                     |
| `createdAt`                                                                                                                  | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Creation time of the notification                                                                                            |
| `updatedAt`                                                                                                                  | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Last updated time of the notification                                                                                        |
| `channels`                                                                                                                   | [components.StepTypeEnum](../../models/components/steptypeenum.md)[]                                                         | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `subscriber`                                                                                                                 | [components.ActivityNotificationSubscriberResponseDto](../../models/components/activitynotificationsubscriberresponsedto.md) | :heavy_minus_sign:                                                                                                           | Subscriber of the notification                                                                                               |
| `template`                                                                                                                   | [components.ActivityNotificationTemplateResponseDto](../../models/components/activitynotificationtemplateresponsedto.md)     | :heavy_minus_sign:                                                                                                           | Template of the notification                                                                                                 |
| `jobs`                                                                                                                       | [components.ActivityNotificationJobResponseDto](../../models/components/activitynotificationjobresponsedto.md)[]             | :heavy_minus_sign:                                                                                                           | Jobs of the notification                                                                                                     |
| `payload`                                                                                                                    | [components.ActivityNotificationResponseDtoPayload](../../models/components/activitynotificationresponsedtopayload.md)       | :heavy_minus_sign:                                                                                                           | Payload of the notification                                                                                                  |
| `tags`                                                                                                                       | *string*[]                                                                                                                   | :heavy_minus_sign:                                                                                                           | Tags associated with the notification                                                                                        |
| `controls`                                                                                                                   | [components.Controls](../../models/components/controls.md)                                                                   | :heavy_minus_sign:                                                                                                           | Controls associated with the notification                                                                                    |
| `to`                                                                                                                         | [components.ActivityNotificationResponseDtoTo](../../models/components/activitynotificationresponsedtoto.md)                 | :heavy_minus_sign:                                                                                                           | To field for subscriber definition                                                                                           |
| `topics`                                                                                                                     | [components.ActivityTopicDto](../../models/components/activitytopicdto.md)[]                                                 | :heavy_minus_sign:                                                                                                           | Topics of the notification                                                                                                   |