# ThrottleStepUpsertDto

## Example Usage

```typescript
import { ThrottleStepUpsertDto } from "@novu/api/models/components";

let value: ThrottleStepUpsertDto = {
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
    "type": "fixed",
    "dynamicKey": "payload.timestamp",
    "threshold": 1,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_minus_sign:                                                 | Unique identifier of the step                                      |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | Name of the step                                                   |
| `type`                                                             | [components.StepTypeEnum](../../models/components/steptypeenum.md) | :heavy_check_mark:                                                 | Type of the step                                                   |
| `controlValues`                                                    | *components.ThrottleStepUpsertDtoControlValues*                    | :heavy_minus_sign:                                                 | Control values for the Throttle step.                              |