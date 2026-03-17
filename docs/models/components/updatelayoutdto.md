# UpdateLayoutDto

## Example Usage

```typescript
import { UpdateLayoutDto } from "@novu/api/models/components";

let value: UpdateLayoutDto = {
  name: "<value>",
  controlValues: {
    email: {
      body: "<value>",
      editorType: "html",
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | Name of the layout                                                                     |
| `isTranslationEnabled`                                                                 | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Enable or disable translations for this layout                                         |
| `controlValues`                                                                        | [components.LayoutControlValuesDto](../../models/components/layoutcontrolvaluesdto.md) | :heavy_check_mark:                                                                     | Control values for the layout                                                          |