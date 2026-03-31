# NotificationWorkflowDto

## Example Usage

```typescript
import { NotificationWorkflowDto } from "@novu/api/models/components";

let value: NotificationWorkflowDto = {
  id: "<id>",
  identifier: "<value>",
  name: "<value>",
  critical: true,
  severity: "medium",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | Unique identifier of the workflow                                            |
| `identifier`                                                                 | *string*                                                                     | :heavy_check_mark:                                                           | Workflow identifier used for triggering                                      |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | Human-readable name of the workflow                                          |
| `critical`                                                                   | *boolean*                                                                    | :heavy_check_mark:                                                           | Whether this workflow is marked as critical                                  |
| `tags`                                                                       | *string*[]                                                                   | :heavy_minus_sign:                                                           | Tags associated with the workflow                                            |
| `data`                                                                       | Record<string, *any*>                                                        | :heavy_minus_sign:                                                           | Custom data associated with the workflow                                     |
| `severity`                                                                   | [components.SeverityLevelEnum](../../models/components/severitylevelenum.md) | :heavy_check_mark:                                                           | Severity of the workflow                                                     |