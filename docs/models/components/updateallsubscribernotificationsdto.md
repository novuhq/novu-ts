# UpdateAllSubscriberNotificationsDto

## Example Usage

```typescript
import { UpdateAllSubscriberNotificationsDto } from "@novu/api/models/components";

let value: UpdateAllSubscriberNotificationsDto = {};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `tags`                                                | *string*[]                                            | :heavy_minus_sign:                                    | Filter notifications by workflow tags                 |
| `data`                                                | *string*                                              | :heavy_minus_sign:                                    | Filter notifications by data attributes (JSON string) |
| `contextKeys`                                         | *string*[]                                            | :heavy_minus_sign:                                    | Context keys for filtering notifications              |