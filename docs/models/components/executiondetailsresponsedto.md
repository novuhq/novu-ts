# ExecutionDetailsResponseDto

## Example Usage

```typescript
import { ExecutionDetailsResponseDto } from "@novu/api/models/components";

let value: ExecutionDetailsResponseDto = {
  organizationId: "<id>",
  jobId: "<id>",
  environmentId: "<id>",
  notificationId: "<id>",
  notificationTemplateId: "<id>",
  subscriberId: "<id>",
  transactionId: "<id>",
  channel: "in_app",
  detail: "<value>",
  source: "Webhook",
  status: "Success",
  isTest: false,
  isRetry: false,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `organizationId`                                         | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `jobId`                                                  | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `environmentId`                                          | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `notificationId`                                         | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `notificationTemplateId`                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `subscriberId`                                           | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `messageId`                                              | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `providerId`                                             | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `transactionId`                                          | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `channel`                                                | [components.Channel](../../models/components/channel.md) | :heavy_check_mark:                                       | N/A                                                      |
| `detail`                                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `source`                                                 | [components.Source](../../models/components/source.md)   | :heavy_check_mark:                                       | N/A                                                      |
| `status`                                                 | [components.Status](../../models/components/status.md)   | :heavy_check_mark:                                       | N/A                                                      |
| `isTest`                                                 | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `isRetry`                                                | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `createdAt`                                              | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |