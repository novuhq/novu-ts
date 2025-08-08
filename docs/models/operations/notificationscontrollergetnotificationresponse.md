# NotificationsControllerGetNotificationResponse

## Example Usage

```typescript
import { NotificationsControllerGetNotificationResponse } from "@novu/api/models/operations";

let value: NotificationsControllerGetNotificationResponse = {
  headers: {},
  result: {
    environmentId: "<id>",
    organizationId: "<id>",
    subscriberId: "<id>",
    transactionId: "<id>",
    jobs: [
      {
        id: "<id>",
        type: "push",
        executionDetails: [
          {
            id: "<id>",
            status: "Warning",
            detail: "<value>",
            isRetry: true,
            isTest: true,
            providerId: "one-signal",
            source: "Payload",
          },
        ],
        step: {
          id: "<id>",
          active: false,
          filters: [
            {
              isNegated: true,
              type: "NUMBER",
              value: "OR",
              children: [],
            },
          ],
          templateId: "<id>",
        },
        overrides: {
          "workflowId": "some_wf_id",
          "stepId": "some_wf_id",
        },
        providerId: "grafana-on-call",
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