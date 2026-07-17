# WorkflowPreferenceRequestDto

## Example Usage

```typescript
import { WorkflowPreferenceRequestDto } from "@novu/api/models/components";

let value: WorkflowPreferenceRequestDto = {
  enabled: true,
  condition: {
    "and": [
      {
        "===": [
          {
            "var": "payload.tier",
          },
          "premium",
        ],
      },
    ],
  },
  workflowId: "workflow-123",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `enabled`                                                                                                                      | *boolean*                                                                                                                      | :heavy_minus_sign:                                                                                                             | Whether the preference is enabled. Used when condition is not provided.                                                        | true                                                                                                                           |
| `condition`                                                                                                                    | Record<string, *any*>                                                                                                          | :heavy_minus_sign:                                                                                                             | Optional JSON Logic condition evaluated against the trigger payload at fan-out time (for example, `{ "var": "payload.tier" }`) | {<br/>"and": [<br/>{<br/>"===": [<br/>{<br/>"var": "payload.tier"<br/>},<br/>"premium"<br/>]<br/>}<br/>]<br/>}                 |
| `workflowId`                                                                                                                   | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The workflow identifier                                                                                                        | workflow-123                                                                                                                   |