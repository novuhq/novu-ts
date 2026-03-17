# HttpRequestStepResponseDto

## Example Usage

```typescript
import { HttpRequestStepResponseDto } from "@novu/api/models/components";

let value: HttpRequestStepResponseDto = {
  controls: {
    values: {
      method: "PATCH",
      url: "https://frightened-pillow.name",
    },
  },
  variables: {},
  stepId: "<id>",
  id: "<id>",
  name: "<value>",
  slug: "<value>",
  type: "http_request",
  origin: "novu-cloud-v1",
  workflowId: "<id>",
  workflowDatabaseId: "<id>",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `controls`                                                                                                               | [components.HttpRequestControlsMetadataResponseDto](../../models/components/httprequestcontrolsmetadataresponsedto.md)   | :heavy_check_mark:                                                                                                       | Controls metadata for the HTTP request step                                                                              |
| `controlValues`                                                                                                          | [components.HttpRequestStepResponseDtoControlValues](../../models/components/httprequeststepresponsedtocontrolvalues.md) | :heavy_minus_sign:                                                                                                       | Control values for the HTTP request step                                                                                 |
| `variables`                                                                                                              | Record<string, *any*>                                                                                                    | :heavy_check_mark:                                                                                                       | JSON Schema for variables, follows the JSON Schema standard                                                              |
| `stepId`                                                                                                                 | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Unique identifier of the step                                                                                            |
| `id`                                                                                                                     | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Database identifier of the step                                                                                          |
| `name`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Name of the step                                                                                                         |
| `slug`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Slug of the step                                                                                                         |
| `type`                                                                                                                   | *"http_request"*                                                                                                         | :heavy_check_mark:                                                                                                       | Type of the step                                                                                                         |
| `origin`                                                                                                                 | [components.ResourceOriginEnum](../../models/components/resourceoriginenum.md)                                           | :heavy_check_mark:                                                                                                       | Origin of the layout                                                                                                     |
| `workflowId`                                                                                                             | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Workflow identifier                                                                                                      |
| `workflowDatabaseId`                                                                                                     | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Workflow database identifier                                                                                             |
| `issues`                                                                                                                 | [components.StepIssuesDto](../../models/components/stepissuesdto.md)                                                     | :heavy_minus_sign:                                                                                                       | Issues associated with the step                                                                                          |
| `stepResolverHash`                                                                                                       | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Hash identifying the deployed Cloudflare Worker for this step                                                            |