# InboxActionDto

## Example Usage

```typescript
import { InboxActionDto } from "@novu/api/models/components";

let value: InboxActionDto = {
  label: "<value>",
  isCompleted: false,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `label`                                                          | *string*                                                         | :heavy_check_mark:                                               | Label of the action button                                       |
| `isCompleted`                                                    | *boolean*                                                        | :heavy_check_mark:                                               | Whether the action has been completed                            |
| `redirect`                                                       | [components.RedirectDto](../../models/components/redirectdto.md) | :heavy_minus_sign:                                               | Redirect configuration for the action                            |