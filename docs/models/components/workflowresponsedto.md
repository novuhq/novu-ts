# WorkflowResponseDto

## Example Usage

```typescript
import { WorkflowResponseDto } from "@novu/api/models/components";

let value: WorkflowResponseDto = {
  name: "<value>",
  id: "<id>",
  workflowId: "<id>",
  slug: {},
  updatedAt: "1735609164075",
  createdAt: "1716341927646",
  steps: [],
  origin: "novu-cloud",
  preferences: {
    user: {
      all: {
        enabled: true,
        readOnly: false,
      },
      channels: {
        "email": {},
        "sms": {
          enabled: false,
        },
      },
    },
    default: {
      all: {
        enabled: true,
        readOnly: false,
      },
      channels: {
        "email": {},
        "sms": {
          enabled: false,
        },
      },
    },
  },
  status: "ERROR",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | Name of the workflow                                                                                   |
| `description`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Description of the workflow                                                                            |
| `tags`                                                                                                 | *string*[]                                                                                             | :heavy_minus_sign:                                                                                     | Tags associated with the workflow                                                                      |
| `active`                                                                                               | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | Whether the workflow is active                                                                         |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | Unique identifier of the workflow                                                                      |
| `workflowId`                                                                                           | *string*                                                                                               | :heavy_check_mark:                                                                                     | Workflow identifier                                                                                    |
| `slug`                                                                                                 | [components.Slug](../../models/components/slug.md)                                                     | :heavy_check_mark:                                                                                     | Slug of the workflow                                                                                   |
| `updatedAt`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | Last updated timestamp                                                                                 |
| `createdAt`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | Creation timestamp                                                                                     |
| `steps`                                                                                                | *components.WorkflowResponseDtoSteps*[]                                                                | :heavy_check_mark:                                                                                     | Steps of the workflow                                                                                  |
| `origin`                                                                                               | [components.WorkflowOriginEnum](../../models/components/workfloworiginenum.md)                         | :heavy_check_mark:                                                                                     | Origin of the workflow                                                                                 |
| `preferences`                                                                                          | [components.WorkflowPreferencesResponseDto](../../models/components/workflowpreferencesresponsedto.md) | :heavy_check_mark:                                                                                     | Preferences for the workflow                                                                           |
| `status`                                                                                               | [components.WorkflowStatusEnum](../../models/components/workflowstatusenum.md)                         | :heavy_check_mark:                                                                                     | Status of the workflow                                                                                 |
| `issues`                                                                                               | Record<string, [components.RuntimeIssueDto](../../models/components/runtimeissuedto.md)>               | :heavy_minus_sign:                                                                                     | Runtime issues for workflow creation and update                                                        |
| `lastTriggeredAt`                                                                                      | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Timestamp of the last workflow trigger                                                                 |
| `payloadSchema`                                                                                        | Record<string, *any*>                                                                                  | :heavy_minus_sign:                                                                                     | The payload JSON Schema for the workflow                                                               |
| `payloadExample`                                                                                       | Record<string, *any*>                                                                                  | :heavy_minus_sign:                                                                                     | Generated payload example based on the payload schema                                                  |
| `validatePayload`                                                                                      | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | Whether payload schema validation is enabled                                                           |