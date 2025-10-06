# DigestStepUpsertDto

## Example Usage

```typescript
import { DigestStepUpsertDto } from "@novu/api/models/components";

let value: DigestStepUpsertDto = {
  name: "<value>",
  type: "digest",
  controlValues: {
    "skip": {
      "and": [
        {
          "==": [
            {
              "var": "payload.tier",
            },
            "pro",
          ],
        },
        {
          "==": [
            {
              "var": "subscriber.data.role",
            },
            "admin",
          ],
        },
        {
          ">": [
            {
              "var": "payload.amount",
            },
            "4",
          ],
        },
      ],
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_minus_sign:                                                 | Database identifier of the step. Used for updating the step.       |
| `stepId`                                                           | *string*                                                           | :heavy_minus_sign:                                                 | Unique identifier for the step                                     |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | Name of the step                                                   |
| `type`                                                             | [components.StepTypeEnum](../../models/components/steptypeenum.md) | :heavy_check_mark:                                                 | Type of the step                                                   |
| `controlValues`                                                    | *components.DigestStepUpsertDtoControlValues*                      | :heavy_minus_sign:                                                 | Control values for the Digest step.                                |