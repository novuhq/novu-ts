# GetSubscriberNotificationsCountResponseDto

## Example Usage

```typescript
import { GetSubscriberNotificationsCountResponseDto } from "@novu/api/models/components";

let value: GetSubscriberNotificationsCountResponseDto = {
  count: 5042.07,
  filter: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `count`                                        | *number*                                       | :heavy_check_mark:                             | The count of notifications matching the filter |
| `filter`                                       | Record<string, *any*>                          | :heavy_check_mark:                             | The filter applied                             |