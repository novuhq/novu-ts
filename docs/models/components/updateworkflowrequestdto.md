# UpdateWorkflowRequestDto

## Example Usage

```typescript
import { UpdateWorkflowRequestDto } from "@novu/api/models/components";

let value: UpdateWorkflowRequestDto = {
  name: "<value>",
  notificationGroupId: "<id>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `critical`                                                                                         | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `data`                                                                                             | [components.UpdateWorkflowRequestDtoData](../../models/components/updateworkflowrequestdtodata.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `description`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `identifier`                                                                                       | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `notificationGroupId`                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `preferenceSettings`                                                                               | [components.PreferenceChannels](../../models/components/preferencechannels.md)                     | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `steps`                                                                                            | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `tags`                                                                                             | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |