# DiffEnvironmentResponseDto

## Example Usage

```typescript
import { DiffEnvironmentResponseDto } from "@novu/api/models/components";

let value: DiffEnvironmentResponseDto = {
  sourceEnvironmentId: "<id>",
  targetEnvironmentId: "<id>",
  resources: [
    {
      resourceType: "BRIDGE",
      sourceResource: {
        updatedAt: new Date("2024-01-15T10:30:00.000Z"),
      },
      targetResource: null,
      changes: [
        {
          sourceResource: {
            updatedAt: new Date("2024-01-15T10:30:00.000Z"),
          },
          targetResource: {
            updatedAt: new Date("2024-01-15T10:30:00.000Z"),
          },
          resourceType: "ECHO",
          action: "unchanged",
        },
      ],
      summary: {
        added: 9701.24,
        modified: 8375.85,
        deleted: 6351.84,
        unchanged: 7377.2,
      },
    },
  ],
  summary: {
    totalEntities: 5214.62,
    totalChanges: 8311.45,
    hasChanges: false,
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `sourceEnvironmentId`                                                                        | *string*                                                                                     | :heavy_check_mark:                                                                           | Source environment ID                                                                        |
| `targetEnvironmentId`                                                                        | *string*                                                                                     | :heavy_check_mark:                                                                           | Target environment ID                                                                        |
| `resources`                                                                                  | [components.ResourceDiffResultDto](../../models/components/resourcediffresultdto.md)[]       | :heavy_check_mark:                                                                           | Diff resources by resource type                                                              |
| `summary`                                                                                    | [components.EnvironmentDiffSummaryDto](../../models/components/environmentdiffsummarydto.md) | :heavy_check_mark:                                                                           | Overall summary                                                                              |