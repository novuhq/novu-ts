# ExecutionDetailsControllerGetExecutionDetailsForNotificationResponse

## Example Usage

```typescript
import { ExecutionDetailsControllerGetExecutionDetailsForNotificationResponse } from "@novu/api/models/operations";

let value:
  ExecutionDetailsControllerGetExecutionDetailsForNotificationResponse = {
    headers: {
      "key": [
        "<value>",
      ],
    },
    result: [
      {
        organizationId: "<id>",
        jobId: "<id>",
        environmentId: "<id>",
        notificationId: "<id>",
        notificationTemplateId: "<id>",
        subscriberId: "<id>",
        transactionId: "<id>",
        channel: "push",
        detail: "<value>",
        source: "Internal",
        status: "Pending",
        isTest: false,
        isRetry: false,
      },
    ],
  };
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `headers`                                                                                          | Record<string, *string*[]>                                                                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `result`                                                                                           | [components.ExecutionDetailsResponseDto](../../models/components/executiondetailsresponsedto.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |