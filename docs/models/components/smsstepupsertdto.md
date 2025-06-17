# SmsStepUpsertDto

## Example Usage

```typescript
import { SmsStepUpsertDto } from "@novu/api/models/components";

let value: SmsStepUpsertDto = {
  name: "<value>",
  type: "chat",
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
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Unique identifier of the step                                                                        |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | Name of the step                                                                                     |
| `type`                                                                                               | [components.StepTypeEnum](../../models/components/steptypeenum.md)                                   | :heavy_check_mark:                                                                                   | Type of the step                                                                                     |
| `controlValues`                                                                                      | [components.SmsStepUpsertDtoControlValues](../../models/components/smsstepupsertdtocontrolvalues.md) | :heavy_minus_sign:                                                                                   | Control values for the SMS step                                                                      |