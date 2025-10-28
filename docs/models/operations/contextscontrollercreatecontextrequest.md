# ContextsControllerCreateContextRequest

## Example Usage

```typescript
import { ContextsControllerCreateContextRequest } from "@novu/api/models/operations";

let value: ContextsControllerCreateContextRequest = {
  createContextRequestDto: {
    type: "tenant",
    id: "org-acme",
    data: {},
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                         | *string*                                                                                 | :heavy_minus_sign:                                                                       | A header for idempotency purposes                                                        |
| `createContextRequestDto`                                                                | [components.CreateContextRequestDto](../../models/components/createcontextrequestdto.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |