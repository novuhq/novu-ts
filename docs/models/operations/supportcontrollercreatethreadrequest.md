# SupportControllerCreateThreadRequest

## Example Usage

```typescript
import { SupportControllerCreateThreadRequest } from "@novu/api/models/operations";

let value: SupportControllerCreateThreadRequest = {
  createSupportThreadDto: {
    text: "<value>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                       | *string*                                                                               | :heavy_minus_sign:                                                                     | A header for idempotency purposes                                                      |
| `createSupportThreadDto`                                                               | [components.CreateSupportThreadDto](../../models/components/createsupportthreaddto.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |