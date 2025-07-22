# DelayStepResponseDto

## Example Usage

```typescript
import { DelayStepResponseDto } from "@novu/api/models/components";

let value: DelayStepResponseDto = {
  controls: {
    values: {
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
      amount: 2922.75,
      unit: "months",
    },
  },
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
    amount: 2502.68,
    unit: "days",
  },
  variables: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  stepId: "<id>",
  id: "<id>",
  name: "<value>",
  slug: {},
  type: "sms",
  origin: "novu-cloud",
  workflowId: "<id>",
  workflowDatabaseId: "<id>",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `controls`                                                                                                   | [components.DelayControlsMetadataResponseDto](../../models/components/delaycontrolsmetadataresponsedto.md)   | :heavy_check_mark:                                                                                           | Controls metadata for the delay step                                                                         |
| `controlValues`                                                                                              | [components.DelayStepResponseDtoControlValues](../../models/components/delaystepresponsedtocontrolvalues.md) | :heavy_minus_sign:                                                                                           | Control values for the delay step                                                                            |
| `variables`                                                                                                  | Record<string, *any*>                                                                                        | :heavy_check_mark:                                                                                           | JSON Schema for variables, follows the JSON Schema standard                                                  |
| `stepId`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Unique identifier of the step                                                                                |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Database identifier of the step                                                                              |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Name of the step                                                                                             |
| `slug`                                                                                                       | [components.DelayStepResponseDtoSlug](../../models/components/delaystepresponsedtoslug.md)                   | :heavy_check_mark:                                                                                           | Slug of the step                                                                                             |
| `type`                                                                                                       | [components.StepTypeEnum](../../models/components/steptypeenum.md)                                           | :heavy_check_mark:                                                                                           | Type of the step                                                                                             |
| `origin`                                                                                                     | [components.ResourceOriginEnum](../../models/components/resourceoriginenum.md)                               | :heavy_check_mark:                                                                                           | Origin of the workflow                                                                                       |
| `workflowId`                                                                                                 | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Workflow identifier                                                                                          |
| `workflowDatabaseId`                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Workflow database identifier                                                                                 |
| `issues`                                                                                                     | [components.StepIssuesDto](../../models/components/stepissuesdto.md)                                         | :heavy_minus_sign:                                                                                           | Issues associated with the step                                                                              |