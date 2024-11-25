# SubscribersControllerMarkActionAsSeenRequest

## Example Usage

```typescript
import { SubscribersControllerMarkActionAsSeenRequest } from "@novu/api/models/operations";

let value: SubscribersControllerMarkActionAsSeenRequest = {
<<<<<<< Updated upstream
  messageId: "<value>",
  type: "<value>",
  subscriberId: "<value>",
=======
  messageId: "<id>",
  type: "<value>",
  subscriberId: "<id>",
>>>>>>> Stashed changes
  markMessageActionAsSeenDto: {
    status: "pending",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `messageId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `type`                                                                                         | *any*                                                                                          | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `subscriberId`                                                                                 | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `markMessageActionAsSeenDto`                                                                   | [components.MarkMessageActionAsSeenDto](../../models/components/markmessageactionasseendto.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |