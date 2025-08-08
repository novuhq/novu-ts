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
  ],
  pageSize: 6006.75,
  page: 7249,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `hasMore`                                                                                                  | *boolean*                                                                                                  | :heavy_check_mark:                                                                                         | Indicates if there are more activities in the result set                                                   |
| `data`                                                                                                     | [components.ActivityNotificationResponseDto](../../models/components/activitynotificationresponsedto.md)[] | :heavy_check_mark:                                                                                         | Array of activity notifications                                                                            |
| `pageSize`                                                                                                 | *number*                                                                                                   | :heavy_check_mark:                                                                                         | Page size of the activities                                                                                |
| `page`                                                                                                     | *number*                                                                                                   | :heavy_check_mark:                                                                                         | Current page of the activities                                                                             |