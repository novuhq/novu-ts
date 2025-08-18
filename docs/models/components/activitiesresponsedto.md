# ActivitiesResponseDto

## Example Usage

```typescript
import { ActivitiesResponseDto } from "@novu/api/models/components";

let value: ActivitiesResponseDto = {
  hasMore: true,
  data: [
    {
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
          providerId: "imedia",
          status: "<value>",
        },
      ],
    },
  ],
  pageSize: 5496.08,
  page: 5568.26,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `hasMore`                                                                                                  | *boolean*                                                                                                  | :heavy_check_mark:                                                                                         | Indicates if there are more activities in the result set                                                   |
| `data`                                                                                                     | [components.ActivityNotificationResponseDto](../../models/components/activitynotificationresponsedto.md)[] | :heavy_check_mark:                                                                                         | Array of activity notifications                                                                            |
| `pageSize`                                                                                                 | *number*                                                                                                   | :heavy_check_mark:                                                                                         | Page size of the activities                                                                                |
| `page`                                                                                                     | *number*                                                                                                   | :heavy_check_mark:                                                                                         | Current page of the activities                                                                             |