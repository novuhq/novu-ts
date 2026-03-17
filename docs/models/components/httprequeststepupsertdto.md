# HttpRequestStepUpsertDto

## Example Usage

```typescript
import { HttpRequestStepUpsertDto } from "@novu/api/models/components";

let value: HttpRequestStepUpsertDto = {
  name: "<value>",
  type: "http_request",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_minus_sign:                                           | Database identifier of the step. Used for updating the step. |
| `stepId`                                                     | *string*                                                     | :heavy_minus_sign:                                           | Unique identifier for the step                               |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | Name of the step                                             |
| `type`                                                       | *"http_request"*                                             | :heavy_check_mark:                                           | Type of the step                                             |
| `controlValues`                                              | *components.HttpRequestStepUpsertDtoControlValues*           | :heavy_minus_sign:                                           | Control values for the HTTP Request step.                    |