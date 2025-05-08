# NotificationsControllerGetNotificationResponse

## Example Usage

```typescript
import { NotificationsControllerGetNotificationResponse } from "@novu/api/models/operations";

let value: NotificationsControllerGetNotificationResponse = {
  headers: {
    "key": [
      "<value>",
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
        type: "delay",
        executionDetails: [
          {
            id: "<id>",
            status: "Warning",
            detail: "<value>",
            isRetry: false,
            isTest: false,
            providerId: "firetext",
            source: "Internal",
          },
        ],
        step: {
          id: "<id>",
          active: false,
          filters: [
            {
              isNegated: false,
              type: "BOOLEAN",
              value: "OR",
              children: [
                {
                  field: "<value>",
                  value: "<value>",
                  operator: "LARGER",
                  on: "payload",
                },
              ],
            },
          ],
          templateId: "<id>",
        },
        overrides: {
          "workflowId": "some_wf_id",
          "stepId": "some_wf_id",
        },
        providerId: "sms-central",
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