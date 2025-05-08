# NotificationsControllerListNotificationsResponse

## Example Usage

```typescript
import { NotificationsControllerListNotificationsResponse } from "@novu/api/models/operations";

let value: NotificationsControllerListNotificationsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    hasMore: false,
    data: [
      {
        environmentId: "<id>",
        organizationId: "<id>",
        subscriberId: "<id>",
        transactionId: "<id>",
        jobs: [
          {
            id: "<id>",
            type: "digest",
            executionDetails: [
              {
                id: "<id>",
                status: "ReadConfirmation",
                detail: "<value>",
                isRetry: false,
                isTest: false,
                providerId: "discord",
                source: "Internal",
              },
            ],
            step: {
              id: "<id>",
              active: false,
              filters: [
                {
                  isNegated: false,
                  type: "NUMBER",
                  value: "OR",
                  children: [
                    {
                      field: "<value>",
                      value: "<value>",
                      operator: "LARGER_EQUAL",
                      on: "subscriber",
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
            providerId: "mailtrap",
            status: "<value>",
          },
        ],
      },
    ],
    pageSize: 1045.5,
    page: 6064.82,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.ActivitiesResponseDto](../../models/components/activitiesresponsedto.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |