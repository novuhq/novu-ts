# StepResponseDto

## Example Usage

```typescript
import { StepResponseDto } from "@novu/api/models/components";

let value: StepResponseDto = {
  controls: {},
  providerOverrides: {
    pagerduty: {
      "severity": "warning",
      "source": "novu",
      "summary": "{{payload.title}}",
    },
    opsgenie: {
      "priority": "P2",
      "message": "{{payload.title}}",
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
  type: "<value>",
  origin: "novu-cloud",
  workflowId: "<id>",
  workflowDatabaseId: "<id>",
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `controls`                                                                                                                              | [components.ControlsMetadataDto](../../models/components/controlsmetadatadto.md)                                                        | :heavy_check_mark:                                                                                                                      | Controls metadata for the step                                                                                                          |
| `controlValues`                                                                                                                         | Record<string, *any*>                                                                                                                   | :heavy_minus_sign:                                                                                                                      | Control values for the step (alias for controls.values)                                                                                 |
| `providerOverrides`                                                                                                                     | [components.StepResponseDtoProviderOverrides](../../models/components/stepresponsedtoprovideroverrides.md)                              | :heavy_minus_sign:                                                                                                                      | Per-provider content overrides keyed by providerId. Stored separately from controlValues and merged over the default body at send time. |
| `variables`                                                                                                                             | Record<string, *any*>                                                                                                                   | :heavy_check_mark:                                                                                                                      | JSON Schema for variables, follows the JSON Schema standard                                                                             |
| `stepId`                                                                                                                                | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | Unique identifier of the step                                                                                                           |
| `id`                                                                                                                                    | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | Database identifier of the step                                                                                                         |
| `name`                                                                                                                                  | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | Name of the step                                                                                                                        |
| `slug`                                                                                                                                  | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | Slug of the step                                                                                                                        |
| `type`                                                                                                                                  | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | Type of the step                                                                                                                        |
| `origin`                                                                                                                                | [components.ResourceOriginEnum](../../models/components/resourceoriginenum.md)                                                          | :heavy_check_mark:                                                                                                                      | Origin of the layout                                                                                                                    |
| `workflowId`                                                                                                                            | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | Workflow identifier                                                                                                                     |
| `workflowDatabaseId`                                                                                                                    | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | Workflow database identifier                                                                                                            |
| `issues`                                                                                                                                | [components.StepIssuesDto](../../models/components/stepissuesdto.md)                                                                    | :heavy_minus_sign:                                                                                                                      | Issues associated with the step                                                                                                         |
| `stepResolverHash`                                                                                                                      | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | Hash identifying the deployed Cloudflare Worker for this step                                                                           |