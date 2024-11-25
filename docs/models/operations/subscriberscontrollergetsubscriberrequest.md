# SubscribersControllerGetSubscriberRequest

## Example Usage

```typescript
import { SubscribersControllerGetSubscriberRequest } from "@novu/api/models/operations";

let value: SubscribersControllerGetSubscriberRequest = {
<<<<<<< Updated upstream
  subscriberId: "<value>",
=======
  subscriberId: "<id>",
>>>>>>> Stashed changes
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `subscriberId`                                     | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `includeTopics`                                    | *string*                                           | :heavy_minus_sign:                                 | Includes the topics associated with the subscriber |