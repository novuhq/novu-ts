# ActivityNotificationJobResponseDto

## Example Usage

```typescript
import { ActivityNotificationJobResponseDto } from "@novu/api/models/components";

let value: ActivityNotificationJobResponseDto = {
  id: "<id>",
  type: "in_app",
  executionDetails: [
    {
      id: "<id>",
      status: "Success",
      detail: "<value>",
      isRetry: false,
      isTest: false,
      providerId: "azure-sms",
      source: "Internal",
    },
  ],
  step: {
    id: "<id>",
    active: false,
    filters: [
      {
        isNegated: false,
        type: "STATEMENT",
        value: "OR",
        children: [
          {
            field: "<value>",
            value: "<value>",
            operator: "IN",
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
  providerId: "simpletexting",
  status: "<value>",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              | Example                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                     | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | Unique identifier of the job                                                                                                             |                                                                                                                                          |
| `type`                                                                                                                                   | [components.ActivityNotificationJobResponseDtoType](../../models/components/activitynotificationjobresponsedtotype.md)                   | :heavy_check_mark:                                                                                                                       | Type of the job                                                                                                                          |                                                                                                                                          |
| `digest`                                                                                                                                 | [components.DigestMetadataDto](../../models/components/digestmetadatadto.md)                                                             | :heavy_minus_sign:                                                                                                                       | Optional digest for the job, including metadata and events                                                                               |                                                                                                                                          |
| `executionDetails`                                                                                                                       | [components.ActivityNotificationExecutionDetailResponseDto](../../models/components/activitynotificationexecutiondetailresponsedto.md)[] | :heavy_check_mark:                                                                                                                       | Execution details of the job                                                                                                             |                                                                                                                                          |
| `step`                                                                                                                                   | [components.ActivityNotificationStepResponseDto](../../models/components/activitynotificationstepresponsedto.md)                         | :heavy_check_mark:                                                                                                                       | Step details of the job                                                                                                                  |                                                                                                                                          |
| `overrides`                                                                                                                              | Record<string, *any*>                                                                                                                    | :heavy_minus_sign:                                                                                                                       | Optional context object for additional error details.                                                                                    | {<br/>"workflowId": "some_wf_id",<br/>"stepId": "some_wf_id"<br/>}                                                                       |
| `payload`                                                                                                                                | [components.Payload](../../models/components/payload.md)                                                                                 | :heavy_minus_sign:                                                                                                                       | Optional payload for the job                                                                                                             |                                                                                                                                          |
| `providerId`                                                                                                                             | [components.ProvidersIdEnum](../../models/components/providersidenum.md)                                                                 | :heavy_check_mark:                                                                                                                       | Provider ID of the job                                                                                                                   |                                                                                                                                          |
| `status`                                                                                                                                 | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | Status of the job                                                                                                                        |                                                                                                                                          |
| `updatedAt`                                                                                                                              | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | Updated time of the notification                                                                                                         |                                                                                                                                          |