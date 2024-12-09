# MessageButton

## Example Usage

```typescript
import { MessageButton } from "@novu/api/models/components";

let value: MessageButton = {
  type: "secondary",
  content: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `type`                                                                       | [components.MessageButtonType](../../models/components/messagebuttontype.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `content`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `resultContent`                                                              | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |