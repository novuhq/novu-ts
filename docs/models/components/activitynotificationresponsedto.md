# ActivityNotificationResponseDto

## Example Usage

```typescript
import { ActivityNotificationResponseDto } from "@novu/api/models/components";

let value: ActivityNotificationResponseDto = {
<<<<<<< Updated upstream
  environmentId: "<value>",
  organizationId: "<value>",
  transactionId: "<value>",
=======
  environmentId: "<id>",
  organizationId: "<id>",
  transactionId: "<id>",
>>>>>>> Stashed changes
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `environmentId`                                                                                                              | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `organizationId`                                                                                                             | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `channels`                                                                                                                   | [components.ActivityNotificationResponseDtoChannels](../../models/components/activitynotificationresponsedtochannels.md)     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `createdAt`                                                                                                                  | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `jobs`                                                                                                                       | *string*[]                                                                                                                   | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `subscriber`                                                                                                                 | [components.ActivityNotificationSubscriberResponseDto](../../models/components/activitynotificationsubscriberresponsedto.md) | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `template`                                                                                                                   | [components.ActivityNotificationTemplateResponseDto](../../models/components/activitynotificationtemplateresponsedto.md)     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `transactionId`                                                                                                              | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |