# SubscribersControllerMarkMessagesAsRequest

## Example Usage

```typescript
import { SubscribersControllerMarkMessagesAsRequest } from "@novu/api/models/operations";

let value: SubscribersControllerMarkMessagesAsRequest = {
<<<<<<< Updated upstream
  subscriberId: "<value>",
  messageMarkAsRequestDto: {
    markAs: "seen",
    messageId: "<value>",
=======
  subscriberId: "<id>",
  messageMarkAsRequestDto: {
    markAs: "unread",
    messageId: [
      "<id>",
    ],
>>>>>>> Stashed changes
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `subscriberId`                                                                           | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `messageMarkAsRequestDto`                                                                | [components.MessageMarkAsRequestDto](../../models/components/messagemarkasrequestdto.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |