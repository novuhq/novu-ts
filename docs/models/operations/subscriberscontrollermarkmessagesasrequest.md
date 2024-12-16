# SubscribersControllerMarkMessagesAsRequest

## Example Usage

```typescript
import { SubscribersControllerMarkMessagesAsRequest } from "@novu/api/models/operations";

let value: SubscribersControllerMarkMessagesAsRequest = {
  subscriberId: "<id>",
  messageMarkAsRequestDto: {
    messageId: "<id>",
    markAs: "unread",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `subscriberId`                                                                           | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `messageMarkAsRequestDto`                                                                | [components.MessageMarkAsRequestDto](../../models/components/messagemarkasrequestdto.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |