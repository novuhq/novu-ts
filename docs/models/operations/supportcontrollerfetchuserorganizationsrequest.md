# SupportControllerFetchUserOrganizationsRequest

## Example Usage

```typescript
import { SupportControllerFetchUserOrganizationsRequest } from "@novu/api/models/operations";

let value: SupportControllerFetchUserOrganizationsRequest = {
  plainCardRequestDto: {
    timestamp: "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | A header for idempotency purposes                                                |
| `plainCardRequestDto`                                                            | [components.PlainCardRequestDto](../../models/components/plaincardrequestdto.md) | :heavy_check_mark:                                                               | N/A                                                                              |