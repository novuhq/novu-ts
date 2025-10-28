# ContextsControllerUpdateContextRequest

## Example Usage

```typescript
import { ContextsControllerUpdateContextRequest } from "@novu/api/models/operations";

let value: ContextsControllerUpdateContextRequest = {
  id: "<id>",
  type: "<value>",
  updateContextRequestDto: {
    data: {},
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | Context ID                                                                               |
| `type`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | Context type                                                                             |
| `idempotencyKey`                                                                         | *string*                                                                                 | :heavy_minus_sign:                                                                       | A header for idempotency purposes                                                        |
| `updateContextRequestDto`                                                                | [components.UpdateContextRequestDto](../../models/components/updatecontextrequestdto.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |