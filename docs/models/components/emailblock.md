# EmailBlock

## Example Usage

```typescript
import { EmailBlock } from "@novu/api/models/components";

let value: EmailBlock = {
    content: "<value>",
    type: "text",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `content`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `styles`                                                                   | [components.EmailBlockStyles](../../models/components/emailblockstyles.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `type`                                                                     | [components.EmailBlockType](../../models/components/emailblocktype.md)     | :heavy_check_mark:                                                         | N/A                                                                        |
| `url`                                                                      | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |