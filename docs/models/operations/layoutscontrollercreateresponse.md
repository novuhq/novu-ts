# LayoutsControllerCreateResponse

## Example Usage

```typescript
import { LayoutsControllerCreateResponse } from "@novu/api/models/operations";

let value: LayoutsControllerCreateResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    id: "<id>",
    layoutId: "<id>",
    slug: {},
    name: "<value>",
    isDefault: true,
    updatedAt: "1735614598968",
    createdAt: "1729976975815",
    origin: "novu-cloud-v1",
    type: "REGULAR",
    controls: {
      values: {},
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [components.LayoutResponseDto](../../models/components/layoutresponsedto.md) | :heavy_check_mark:                                                           | N/A                                                                          |