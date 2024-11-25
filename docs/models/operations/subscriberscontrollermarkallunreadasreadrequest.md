# SubscribersControllerMarkAllUnreadAsReadRequest

## Example Usage

```typescript
import { SubscribersControllerMarkAllUnreadAsReadRequest } from "@novu/api/models/operations";

let value: SubscribersControllerMarkAllUnreadAsReadRequest = {
  subscriberId: "<id>",
  markAllMessageAsRequestDto: {
    markAs: "seen",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `subscriberId`                                                                                 | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `markAllMessageAsRequestDto`                                                                   | [components.MarkAllMessageAsRequestDto](../../models/components/markallmessageasrequestdto.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |