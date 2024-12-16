# ActivityNotificationJobResponseDto

## Example Usage

```typescript
import { ActivityNotificationJobResponseDto } from "@novu/api/models/components";

let value: ActivityNotificationJobResponseDto = {
  id: "<id>",
  type: "<value>",
  executionDetails: [
    {
      id: "<id>",
      jobId: "<id>",
      status: "Success",
      detail: "<value>",
      isRetry: false,
      isTest: false,
      providerId: 8379.45,
      source: "Credentials",
    },
  ],
  step: {
    id: "<id>",
    active: false,
    filters: {},
  },
  providerId: 9764.59,
  status: "<value>",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                     | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | Unique identifier of the job                                                                                                             |
| `type`                                                                                                                                   | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | Type of the job                                                                                                                          |
| `digest`                                                                                                                                 | [components.Digest](../../models/components/digest.md)                                                                                   | :heavy_minus_sign:                                                                                                                       | Optional digest for the job                                                                                                              |
| `executionDetails`                                                                                                                       | [components.ActivityNotificationExecutionDetailResponseDto](../../models/components/activitynotificationexecutiondetailresponsedto.md)[] | :heavy_check_mark:                                                                                                                       | Execution details of the job                                                                                                             |
| `step`                                                                                                                                   | [components.ActivityNotificationStepResponseDto](../../models/components/activitynotificationstepresponsedto.md)                         | :heavy_check_mark:                                                                                                                       | Step details of the job                                                                                                                  |
| `payload`                                                                                                                                | [components.Payload](../../models/components/payload.md)                                                                                 | :heavy_minus_sign:                                                                                                                       | Optional payload for the job                                                                                                             |
| `providerId`                                                                                                                             | *number*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | Provider ID of the job                                                                                                                   |
| `status`                                                                                                                                 | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | Status of the job                                                                                                                        |