# NotificationTrigger

## Example Usage

```typescript
import { NotificationTrigger } from "@novu/api/models/components";

let value: NotificationTrigger = {
    identifier: "<value>",
    type: "event",
    variables: [
        {
            name: "<value>",
        },
    ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `identifier`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `subscriberVariables`                                                                              | [components.NotificationTriggerVariable](../../models/components/notificationtriggervariable.md)[] | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `type`                                                                                             | [components.NotificationTriggerType](../../models/components/notificationtriggertype.md)           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `variables`                                                                                        | [components.NotificationTriggerVariable](../../models/components/notificationtriggervariable.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |