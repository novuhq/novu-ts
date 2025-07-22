# NotificationsControllerGetNotificationResponse

## Example Usage

```typescript
import { NotificationsControllerGetNotificationResponse } from "@novu/api/models/operations";

let value: NotificationsControllerGetNotificationResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
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
        providerId: "afro-message",
        status: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                | Record<string, *string*[]>                                                                               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `result`                                                                                                 | [components.ActivityNotificationResponseDto](../../models/components/activitynotificationresponsedto.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |