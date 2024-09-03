# UpdateLayoutRequestDto

## Example Usage

```typescript
import { UpdateLayoutRequestDto } from "@novu/api/models/components";

let value: UpdateLayoutRequestDto = {
    identifier: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `content`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | User defined content for the layout.                                                 |
| `description`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | User defined description of the layout                                               |
| `identifier`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | User defined custom key that will be a unique identifier for the Layout updated.     |
| `isDefault`                                                                          | *boolean*                                                                            | :heavy_minus_sign:                                                                   | Variable that defines if the layout is chosen as default when creating a layout.     |
| `name`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | User defined custom name and provided by the user that will name the Layout updated. |
| `variables`                                                                          | [components.Variables](../../models/components/variables.md)                         | :heavy_minus_sign:                                                                   | User defined variables to render in the layout placeholders.                         |