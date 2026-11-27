# UpdateAllSubscriberNotificationsDto

## Example Usage

```typescript
import { UpdateAllSubscriberNotificationsDto } from "@novu/api/models/components";

let value: UpdateAllSubscriberNotificationsDto = {};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `tags`                                                                                                             | [components.Tags](../../models/components/tags.md)                                                                 | :heavy_minus_sign:                                                                                                 | Filter notifications by workflow tags (OR for string[], or { and: [{ or: string[] }, ...] } for AND of OR-groups). |
| `data`                                                                                                             | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Filter notifications by data attributes (JSON string)                                                              |
| `contextKeys`                                                                                                      | *string*[]                                                                                                         | :heavy_minus_sign:                                                                                                 | Context keys for filtering notifications                                                                           |