# SubscribersControllerGetSubscriberNotificationsResponse

## Example Usage

```typescript
import { SubscribersControllerGetSubscriberNotificationsResponse } from "@novu/api/models/operations";

let value: SubscribersControllerGetSubscriberNotificationsResponse = {
  headers: {
    "key": [],
    "key1": [],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    data: [],
    hasMore: true,
    filter: {},
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                            | Record<string, *string*[]>                                                                                           | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `result`                                                                                                             | [components.GetSubscriberNotificationsResponseDto](../../models/components/getsubscribernotificationsresponsedto.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |