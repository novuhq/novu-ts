# ActivitiesResponseDto

## Example Usage

```typescript
import { ActivitiesResponseDto } from "@novu/api/models/components";

let value: ActivitiesResponseDto = {
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
          type: "chat",
          executionDetails: [
            {
              id: "<id>",
              status: "ReadConfirmation",
              detail: "<value>",
              isRetry: false,
              isTest: false,
              providerId: "africas-talking",
              source: "Payload",
            },
          ],
          step: {
            id: "<id>",
            active: false,
            filters: [
              {
                isNegated: false,
                type: "TEXT",
                value: "AND",
                children: [
                  {
                    field: "<value>",
                    value: "<value>",
                    operator: "SMALLER_EQUAL",
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
          providerId: "africas-talking",
          status: "<value>",
        },
      ],
    },
  ],
  pageSize: 8294.52,
  page: 7052.05,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `hasMore`                                                                                                  | *boolean*                                                                                                  | :heavy_check_mark:                                                                                         | Indicates if there are more activities in the result set                                                   |
| `data`                                                                                                     | [components.ActivityNotificationResponseDto](../../models/components/activitynotificationresponsedto.md)[] | :heavy_check_mark:                                                                                         | Array of activity notifications                                                                            |
| `pageSize`                                                                                                 | *number*                                                                                                   | :heavy_check_mark:                                                                                         | Page size of the activities                                                                                |
| `page`                                                                                                     | *number*                                                                                                   | :heavy_check_mark:                                                                                         | Current page of the activities                                                                             |