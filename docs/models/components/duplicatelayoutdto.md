# DuplicateLayoutDto

## Example Usage

```typescript
import { DuplicateLayoutDto } from "@novu/api/models/components";

let value: DuplicateLayoutDto = {
  name: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `name`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | Name of the layout                                                               |
| `layoutId`                                                                       | *string*                                                                         | :heavy_minus_sign:                                                               | Identifier for the duplicated layout. When omitted, it is derived from the name. |
| `isTranslationEnabled`                                                           | *boolean*                                                                        | :heavy_minus_sign:                                                               | Enable or disable translations for this layout                                   |