# MarkSubscriberNotificationsAsSeenDto

## Example Usage

```typescript
import { MarkSubscriberNotificationsAsSeenDto } from "@novu/api/models/components";

let value: MarkSubscriberNotificationsAsSeenDto = {};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `notificationIds`                                                                                                          | *string*[]                                                                                                                 | :heavy_minus_sign:                                                                                                         | Specific notification IDs to mark as seen                                                                                  |
| `tags`                                                                                                                     | [components.MarkSubscriberNotificationsAsSeenDtoTags](../../models/components/marksubscribernotificationsasseendtotags.md) | :heavy_minus_sign:                                                                                                         | Filter notifications by workflow tags (OR for string[], or { and: [{ or: string[] }, ...] } for AND of OR-groups).         |
| `data`                                                                                                                     | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Filter notifications by data attributes (JSON string)                                                                      |
| `contextKeys`                                                                                                              | *string*[]                                                                                                                 | :heavy_minus_sign:                                                                                                         | Context keys for filtering notifications                                                                                   |