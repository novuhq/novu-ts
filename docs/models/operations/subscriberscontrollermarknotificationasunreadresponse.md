# SubscribersControllerMarkNotificationAsUnreadResponse

## Example Usage

```typescript
import { SubscribersControllerMarkNotificationAsUnreadResponse } from "@novu/api/models/operations";

let value: SubscribersControllerMarkNotificationAsUnreadResponse = {
  headers: {},
  result: {
    id: "<id>",
    transactionId: "<id>",
    body: "<value>",
    to: {
      id: "<id>",
      subscriberId: "<id>",
    },
    isRead: false,
    isSeen: true,
    isArchived: false,
    isSnoozed: false,
    createdAt: "1717643813197",
    channelType: "email",
    severity: "low",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `headers`                                                                          | Record<string, *string*[]>                                                         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [components.InboxNotificationDto](../../models/components/inboxnotificationdto.md) | :heavy_check_mark:                                                                 | N/A                                                                                |