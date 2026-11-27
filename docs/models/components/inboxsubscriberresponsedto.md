# InboxSubscriberResponseDto

## Example Usage

```typescript
import { InboxSubscriberResponseDto } from "@novu/api/models/components";

let value: InboxSubscriberResponseDto = {
  id: "<id>",
  subscriberId: "<id>",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `id`                                | *string*                            | :heavy_check_mark:                  | Unique identifier of the subscriber |
| `firstName`                         | *string*                            | :heavy_minus_sign:                  | First name of the subscriber        |
| `lastName`                          | *string*                            | :heavy_minus_sign:                  | Last name of the subscriber         |
| `avatar`                            | *string*                            | :heavy_minus_sign:                  | Avatar URL of the subscriber        |
| `subscriberId`                      | *string*                            | :heavy_check_mark:                  | External subscriber identifier      |