# SubscribersControllerMarkAllUnreadAsReadRequest

## Example Usage

```typescript
import { SubscribersControllerMarkAllUnreadAsReadRequest } from "@novu/api/models/operations";

let value: SubscribersControllerMarkAllUnreadAsReadRequest = {
<<<<<<< Updated upstream
  subscriberId: "<value>",
  markAllMessageAsRequestDto: {
    markAs: "seen",
=======
  subscriberId: "<id>",
  markAllMessageAsRequestDto: {
    markAs: "unread",
>>>>>>> Stashed changes
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `subscriberId`                                                                                 | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `markAllMessageAsRequestDto`                                                                   | [components.MarkAllMessageAsRequestDto](../../models/components/markallmessageasrequestdto.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |