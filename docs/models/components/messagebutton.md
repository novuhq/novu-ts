# MessageButton

## Example Usage

```typescript
import { MessageButton } from "@novu/api/models/components";

let value: MessageButton = {
  content: "<value>",
<<<<<<< Updated upstream
  type: "secondary",
=======
  type: "primary",
>>>>>>> Stashed changes
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `content`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `resultContent`                                                              | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `type`                                                                       | [components.MessageButtonType](../../models/components/messagebuttontype.md) | :heavy_check_mark:                                                           | N/A                                                                          |