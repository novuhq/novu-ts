# DigestRegularMetadata

## Example Usage

```typescript
import { DigestRegularMetadata } from "@novu/api/models/components";

let value: DigestRegularMetadata = {
  type: "regular",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `amount`                                                         | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `unit`                                                           | [components.Unit](../../models/components/unit.md)               | :heavy_minus_sign:                                               | N/A                                                              |
| `digestKey`                                                      | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `type`                                                           | [components.Type](../../models/components/type.md)               | :heavy_check_mark:                                               | N/A                                                              |
| `backoff`                                                        | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `backoffAmount`                                                  | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `backoffUnit`                                                    | [components.BackoffUnit](../../models/components/backoffunit.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `updateMode`                                                     | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |