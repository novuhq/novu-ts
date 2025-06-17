# DelayStepUpsertDto

## Example Usage

```typescript
import { DelayStepUpsertDto } from "@novu/api/models/components";

let value: DelayStepUpsertDto = {
  name: "<value>",
  type: "email",
  controlValues: {
    skip: {
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
    amount: 1159.8,
    unit: "seconds",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Unique identifier of the step                                                                            |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Name of the step                                                                                         |
| `type`                                                                                                   | [components.StepTypeEnum](../../models/components/steptypeenum.md)                                       | :heavy_check_mark:                                                                                       | Type of the step                                                                                         |
| `controlValues`                                                                                          | [components.DelayStepUpsertDtoControlValues](../../models/components/delaystepupsertdtocontrolvalues.md) | :heavy_minus_sign:                                                                                       | Control values for the Delay step                                                                        |