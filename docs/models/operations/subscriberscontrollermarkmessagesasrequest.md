# SubscribersControllerMarkMessagesAsRequest

## Example Usage

```typescript
import { SubscribersControllerMarkMessagesAsRequest } from "@novu/api/models/operations";

let value: SubscribersControllerMarkMessagesAsRequest = {
  subscriberId: "<id>",
  messageMarkAsRequestDto: {
    messageId: "<id>",
    markAs: "read",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                         | *string*                                                                                 | :heavy_minus_sign:                                                                       | A header for idempotency purposes                                                        |
| `subscriberId`                                                                           | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `messageMarkAsRequestDto`                                                                | [components.MessageMarkAsRequestDto](../../models/components/messagemarkasrequestdto.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |