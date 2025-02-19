# CreateSubscriberRequestDto

## Example Usage

```typescript
import { CreateSubscriberRequestDto } from "@novu/api/models/components";

let value: CreateSubscriberRequestDto = {
  subscriberId: "<id>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `subscriberId`                            | *string*                                  | :heavy_check_mark:                        | Unique identifier of the subscriber       |
| `firstName`                               | *string*                                  | :heavy_minus_sign:                        | First name of the subscriber              |
| `lastName`                                | *string*                                  | :heavy_minus_sign:                        | Last name of the subscriber               |
| `email`                                   | *string*                                  | :heavy_minus_sign:                        | Email address of the subscriber           |
| `phone`                                   | *string*                                  | :heavy_minus_sign:                        | Phone number of the subscriber            |
| `avatar`                                  | *string*                                  | :heavy_minus_sign:                        | Avatar URL or identifier                  |
| `timezone`                                | *string*                                  | :heavy_minus_sign:                        | Timezone of the subscriber                |
| `locale`                                  | *string*                                  | :heavy_minus_sign:                        | Locale of the subscriber                  |
| `data`                                    | Record<string, *any*>                     | :heavy_minus_sign:                        | Additional custom data for the subscriber |