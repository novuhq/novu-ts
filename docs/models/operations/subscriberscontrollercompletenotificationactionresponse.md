# SubscribersControllerCompleteNotificationActionResponse

## Example Usage

```typescript
import { SubscribersControllerCompleteNotificationActionResponse } from "@novu/api/models/operations";

let value: SubscribersControllerCompleteNotificationActionResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
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