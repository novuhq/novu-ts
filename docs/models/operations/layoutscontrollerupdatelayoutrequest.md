# LayoutsControllerUpdateLayoutRequest

## Example Usage

```typescript
import { LayoutsControllerUpdateLayoutRequest } from "@novu/api/models/operations";

let value: LayoutsControllerUpdateLayoutRequest = {
  layoutId: "<id>",
  updateLayoutRequestDto: {
    identifier: "<value>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `layoutId`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | The layout id                                                                          |
| `updateLayoutRequestDto`                                                               | [components.UpdateLayoutRequestDto](../../models/components/updatelayoutrequestdto.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |