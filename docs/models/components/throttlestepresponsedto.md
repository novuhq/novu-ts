# ThrottleStepResponseDto

## Example Usage

```typescript
import { ThrottleStepResponseDto } from "@novu/api/models/components";

let value: ThrottleStepResponseDto = {
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
      dynamicKey: "payload.timestamp",
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
    dynamicKey: "payload.timestamp",
  },
  providerOverrides: {
    "slack": {
      "text": "{{payload.title}}",
      "blocks": [
        {
          "type": "divider",
        },
      ],
    },
    "whatsapp-business": {
      "type": "text",
      "text": {
        "body": "{{payload.title}}",
      },
    },
    "pagerduty": {
      "severity": "warning",
      "source": "novu",
      "summary": "{{payload.title}}",
    },
  },
  variables: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  stepId: "<id>",
  id: "<id>",
  name: "<value>",
  slug: "<value>",
  type: "throttle",
  origin: "external",
  workflowId: "<id>",
  workflowDatabaseId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                                                          | Required                                                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                                                   | Example                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `controls`                                                                                                                                                                                                                                                    | [components.ThrottleControlsMetadataResponseDto](../../models/components/throttlecontrolsmetadataresponsedto.md)                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                            | Controls metadata for the throttle step                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                               |
| `controlValues`                                                                                                                                                                                                                                               | [components.ThrottleStepResponseDtoControlValues](../../models/components/throttlestepresponsedtocontrolvalues.md)                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                            | Control values for the throttle step                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                               |
| `providerOverrides`                                                                                                                                                                                                                                           | Record<string, Record<string, *any*>>                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                            | Per-provider content overrides keyed by providerId. Stored separately from controlValues and merged over the default body at send time. Keys are ChatProviderIdEnum / ToolProviderIdEnum values (e.g. `slack`, `whatsapp-business`, `pagerduty`).             | {<br/>"slack": {<br/>"text": "{{payload.title}}",<br/>"blocks": [<br/>{<br/>"type": "divider"<br/>}<br/>]<br/>},<br/>"whatsapp-business": {<br/>"type": "text",<br/>"text": {<br/>"body": "{{payload.title}}"<br/>}<br/>},<br/>"pagerduty": {<br/>"severity": "warning",<br/>"source": "novu",<br/>"summary": "{{payload.title}}"<br/>}<br/>} |
| `variables`                                                                                                                                                                                                                                                   | Record<string, *any*>                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                            | JSON Schema for variables, follows the JSON Schema standard                                                                                                                                                                                                   |                                                                                                                                                                                                                                                               |
| `stepId`                                                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                            | Unique identifier of the step                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                               |
| `id`                                                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                            | Database identifier of the step                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                               |
| `name`                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                            | Name of the step                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                               |
| `slug`                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                            | Slug of the step                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                               |
| `type`                                                                                                                                                                                                                                                        | *"throttle"*                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                            | Type of the step                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                               |
| `origin`                                                                                                                                                                                                                                                      | [components.ResourceOriginEnum](../../models/components/resourceoriginenum.md)                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                            | Origin of the layout                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                               |
| `workflowId`                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                            | Workflow identifier                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                               |
| `workflowDatabaseId`                                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                            | Workflow database identifier                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                               |
| `issues`                                                                                                                                                                                                                                                      | [components.StepIssuesDto](../../models/components/stepissuesdto.md)                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                            | Issues associated with the step                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                               |
| `stepResolverHash`                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                            | Hash identifying the deployed Cloudflare Worker for this step                                                                                                                                                                                                 |                                                                                                                                                                                                                                                               |