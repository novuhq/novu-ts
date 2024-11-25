# NotificationsControllerListNotificationsRequest

## Example Usage

```typescript
import { NotificationsControllerListNotificationsRequest } from "@novu/api/models/operations";

let value: NotificationsControllerListNotificationsRequest = {
  channels: [
<<<<<<< Updated upstream
    "email",
=======
    "push",
>>>>>>> Stashed changes
  ],
  templates: [
    "<value>",
  ],
  emails: [
    "<value>",
  ],
  search: "<value>",
  subscriberIds: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `channels`                                                                                                              | [operations.Channels](../../models/operations/channels.md)[]                                                            | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `templates`                                                                                                             | *string*[]                                                                                                              | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `emails`                                                                                                                | *string*[]                                                                                                              | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| ~~`search`~~                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `subscriberIds`                                                                                                         | *string*[]                                                                                                              | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `page`                                                                                                                  | *number*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `transactionId`                                                                                                         | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |