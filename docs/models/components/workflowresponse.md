# WorkflowResponse

## Example Usage

```typescript
import { WorkflowResponse } from "@novu/api/models/components";

let value: WorkflowResponse = {
    creatorId: "<value>",
    environmentId: "<value>",
    notificationGroupId: "<value>",
    organizationId: "<value>",
    active: false,
    critical: false,
    deleted: false,
    deletedAt: "<value>",
    deletedBy: "<value>",
    description: "Advanced eco-centric middleware",
    draft: false,
    name: "<value>",
    preferenceSettings: {},
    steps: [],
    tags: ["<value>"],
    triggers: [],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `creatorId`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `environmentId`                                                                              | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `id`                                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `notificationGroupId`                                                                        | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `organizationId`                                                                             | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `parentId`                                                                                   | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `active`                                                                                     | *boolean*                                                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `critical`                                                                                   | *boolean*                                                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `data`                                                                                       | [components.WorkflowResponseData](../../models/components/workflowresponsedata.md)           | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `deleted`                                                                                    | *boolean*                                                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `deletedAt`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `deletedBy`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `description`                                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `draft`                                                                                      | *boolean*                                                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `notificationGroup`                                                                          | [components.NotificationGroup](../../models/components/notificationgroup.md)                 | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `preferenceSettings`                                                                         | [components.PreferenceChannels](../../models/components/preferencechannels.md)               | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `steps`                                                                                      | [components.NotificationStep](../../models/components/notificationstep.md)[]                 | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `tags`                                                                                       | *string*[]                                                                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `triggers`                                                                                   | [components.NotificationTrigger](../../models/components/notificationtrigger.md)[]           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `workflowIntegrationStatus`                                                                  | [components.WorkflowIntegrationStatus](../../models/components/workflowintegrationstatus.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |