# EnvironmentsControllerPublishEnvironmentResponse

## Example Usage

```typescript
import { EnvironmentsControllerPublishEnvironmentResponse } from "@novu/api/models/operations";

let value: EnvironmentsControllerPublishEnvironmentResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    results: [
      {
        resourceType: "REGULAR",
        successful: [],
        failed: [
          {
            resourceType: "REGULAR",
            resourceId: "<id>",
            resourceName: "<value>",
            error: "<value>",
          },
        ],
        skipped: [],
        totalProcessed: 2749.86,
      },
    ],
    summary: {
      resources: 3200.4,
      successful: 3983.21,
      failed: 6873.9,
      skipped: 1386.22,
    },
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `headers`                                                                                            | Record<string, *string*[]>                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `result`                                                                                             | [components.PublishEnvironmentResponseDto](../../models/components/publishenvironmentresponsedto.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |