# ChangeResponseDto

## Example Usage

```typescript
import { ChangeResponseDto } from "@novu/api/models/components";

let value: ChangeResponseDto = {
  creatorId: "<value>",
  entityId: "<value>",
  environmentId: "<value>",
  organizationId: "<value>",
  change: {},
  createdAt: "<value>",
  enabled: false,
  type: "NotificationTemplate",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `creatorId`                                            | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `entityId`                                             | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `environmentId`                                        | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `id`                                                   | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `organizationId`                                       | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `parentId`                                             | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `change`                                               | [components.Change](../../models/components/change.md) | :heavy_check_mark:                                     | N/A                                                    |
| `createdAt`                                            | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `enabled`                                              | *boolean*                                              | :heavy_check_mark:                                     | N/A                                                    |
| `type`                                                 | [components.Type](../../models/components/type.md)     | :heavy_check_mark:                                     | N/A                                                    |