# NotificationTrigger

## Example Usage

```typescript
import { NotificationTrigger } from "@novu/api/models/components";

let value: NotificationTrigger = {
  type: "event",
  identifier: "<value>",
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
| `type`                                                                                             | [components.Type](../../models/components/type.md)                                                 | :heavy_check_mark:                                                                                 | Type of the trigger                                                                                |
| `identifier`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | Identifier of the trigger                                                                          |
| `variables`                                                                                        | [components.NotificationTriggerVariable](../../models/components/notificationtriggervariable.md)[] | :heavy_check_mark:                                                                                 | Variables of the trigger                                                                           |
| `subscriberVariables`                                                                              | [components.NotificationTriggerVariable](../../models/components/notificationtriggervariable.md)[] | :heavy_minus_sign:                                                                                 | Subscriber variables of the trigger                                                                |