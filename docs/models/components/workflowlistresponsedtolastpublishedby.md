# WorkflowListResponseDtoLastPublishedBy

User who last published the workflow

## Example Usage

```typescript
import { WorkflowListResponseDtoLastPublishedBy } from "@novu/api/models/components";

let value: WorkflowListResponseDtoLastPublishedBy = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                   | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | User ID                                                                                                                                |
| `firstName`                                                                                                                            | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | User first name                                                                                                                        |
| `lastName`                                                                                                                             | [components.WorkflowListResponseDtoLastPublishedByLastName](../../models/components/workflowlistresponsedtolastpublishedbylastname.md) | :heavy_minus_sign:                                                                                                                     | User last name                                                                                                                         |
| `externalId`                                                                                                                           | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | User external ID                                                                                                                       |