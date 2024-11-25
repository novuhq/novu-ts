# MessagesControllerDeleteMessagesByTransactionIdRequest

## Example Usage

```typescript
import { MessagesControllerDeleteMessagesByTransactionIdRequest } from "@novu/api/models/operations";

let value: MessagesControllerDeleteMessagesByTransactionIdRequest = {
  transactionId: "<id>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `channel`                                                                    | [operations.QueryParamChannel](../../models/operations/queryparamchannel.md) | :heavy_minus_sign:                                                           | The channel of the message to be deleted                                     |
| `transactionId`                                                              | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |