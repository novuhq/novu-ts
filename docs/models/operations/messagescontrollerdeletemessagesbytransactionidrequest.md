# MessagesControllerDeleteMessagesByTransactionIdRequest

## Example Usage

```typescript
import { MessagesControllerDeleteMessagesByTransactionIdRequest } from "@novu/api/models/operations";

let value: MessagesControllerDeleteMessagesByTransactionIdRequest = {
  transactionId: "507f1f77bcf86cd799439011",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `channel`                                                | [operations.Channel](../../models/operations/channel.md) | :heavy_minus_sign:                                       | The channel of the message to be deleted                 |                                                          |
| `transactionId`                                          | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      | 507f1f77bcf86cd799439011                                 |
| `idempotencyKey`                                         | *string*                                                 | :heavy_minus_sign:                                       | A header for idempotency purposes                        |                                                          |