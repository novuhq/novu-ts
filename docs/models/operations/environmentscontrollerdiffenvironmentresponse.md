# EnvironmentsControllerDiffEnvironmentResponse

## Example Usage

```typescript
import { EnvironmentsControllerDiffEnvironmentResponse } from "@novu/api/models/operations";

let value: EnvironmentsControllerDiffEnvironmentResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `headers`                                                                                      | Record<string, *string*[]>                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `result`                                                                                       | [components.DiffEnvironmentResponseDto](../../models/components/diffenvironmentresponsedto.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |