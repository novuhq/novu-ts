# LayoutControlValuesDto

## Example Usage

```typescript
import { LayoutControlValuesDto } from "@novu/api/models/components";

let value: LayoutControlValuesDto = {
  email: {
    body: "<value>",
    editorType: "html",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `email`                                                                    | [components.EmailControlsDto](../../models/components/emailcontrolsdto.md) | :heavy_check_mark:                                                         | Email layout controls                                                      |