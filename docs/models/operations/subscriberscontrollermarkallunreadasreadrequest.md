# SubscribersControllerMarkAllUnreadAsReadRequest

## Example Usage

```typescript
import { SubscribersControllerMarkAllUnreadAsReadRequest } from "@novu/api/models/operations";

let value: SubscribersControllerMarkAllUnreadAsReadRequest = {
  subscriberId: "<id>",
  markAllMessageAsRequestDto: {
    markAs: "read",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                               | *string*                                                                                       | :heavy_minus_sign:                                                                             | A header for idempotency purposes                                                              |
| `subscriberId`                                                                                 | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `markAllMessageAsRequestDto`                                                                   | [components.MarkAllMessageAsRequestDto](../../models/components/markallmessageasrequestdto.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |