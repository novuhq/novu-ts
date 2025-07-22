# WorkflowListResponseDto

## Example Usage

```typescript
import { WorkflowListResponseDto } from "@novu/api/models/components";

let value: WorkflowListResponseDto = {
  name: "<value>",
  updatedAt: "1735658196399",
  createdAt: "1713491734412",
  id: "<id>",
  workflowId: "<id>",
  slug: "<value>",
  status: "ERROR",
  origin: "novu-cloud-v1",
  stepTypeOverviews: [
    "in_app",
  ],
  isTranslationEnabled: false,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Name of the workflow                                                                                       |
| `tags`                                                                                                     | *string*[]                                                                                                 | :heavy_minus_sign:                                                                                         | Tags associated with the workflow                                                                          |
| `updatedAt`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Last updated timestamp                                                                                     |
| `createdAt`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Creation timestamp                                                                                         |
| `updatedBy`                                                                                                | [components.WorkflowListResponseDtoUpdatedBy](../../models/components/workflowlistresponsedtoupdatedby.md) | :heavy_minus_sign:                                                                                         | User who last updated the workflow                                                                         |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Unique database identifier                                                                                 |
| `workflowId`                                                                                               | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Workflow identifier                                                                                        |
| `slug`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Workflow slug                                                                                              |
| `status`                                                                                                   | [components.WorkflowStatusEnum](../../models/components/workflowstatusenum.md)                             | :heavy_check_mark:                                                                                         | Status of the workflow                                                                                     |
| `origin`                                                                                                   | [components.ResourceOriginEnum](../../models/components/resourceoriginenum.md)                             | :heavy_check_mark:                                                                                         | Origin of the workflow                                                                                     |
| `lastTriggeredAt`                                                                                          | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Timestamp of the last workflow trigger                                                                     |
| `stepTypeOverviews`                                                                                        | [components.StepTypeEnum](../../models/components/steptypeenum.md)[]                                       | :heavy_check_mark:                                                                                         | Overview of step types in the workflow                                                                     |
| `isTranslationEnabled`                                                                                     | *boolean*                                                                                                  | :heavy_check_mark:                                                                                         | Is translation enabled for the workflow                                                                    |