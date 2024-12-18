# ActivityNotificationSubscriberResponseDto

## Example Usage

```typescript
import { ActivityNotificationSubscriberResponseDto } from "@novu/api/models/components";

let value: ActivityNotificationSubscriberResponseDto = {
  id: "<id>",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `firstName`                         | *string*                            | :heavy_minus_sign:                  | First name of the subscriber        |
| `id`                                | *string*                            | :heavy_check_mark:                  | Unique identifier of the subscriber |
| `lastName`                          | *string*                            | :heavy_minus_sign:                  | Last name of the subscriber         |
| `email`                             | *string*                            | :heavy_minus_sign:                  | Email of the subscriber             |
| `phone`                             | *string*                            | :heavy_minus_sign:                  | Phone number of the subscriber      |