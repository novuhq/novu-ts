# GetSubscriberNotificationsResponseDto

## Example Usage

```typescript
import { GetSubscriberNotificationsResponseDto } from "@novu/api/models/components";

let value: GetSubscriberNotificationsResponseDto = {
  data: [
    {
      id: "<id>",
      transactionId: "<id>",
      body: "<value>",
      to: {
        id: "<id>",
        subscriberId: "<id>",
      },
      isRead: true,
      isSeen: true,
      isArchived: true,
      isSnoozed: false,
      createdAt: "1713754831404",
      channelType: "email",
      severity: "none",
    },
  ],
  hasMore: false,
  filter: {},
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `data`                                                                               | [components.InboxNotificationDto](../../models/components/inboxnotificationdto.md)[] | :heavy_check_mark:                                                                   | Array of notifications                                                               |
| `hasMore`                                                                            | *boolean*                                                                            | :heavy_check_mark:                                                                   | Indicates if there are more notifications available                                  |
| `filter`                                                                             | [components.Filter](../../models/components/filter.md)                               | :heavy_check_mark:                                                                   | The filter applied to the notifications                                              |