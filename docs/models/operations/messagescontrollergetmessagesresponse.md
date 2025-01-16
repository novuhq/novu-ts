# MessagesControllerGetMessagesResponse

## Example Usage

```typescript
import { MessagesControllerGetMessagesResponse } from "@novu/api/models/operations";

let value: MessagesControllerGetMessagesResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    hasMore: false,
    data: [],
    pageSize: 2828.07,
    page: 1201.96,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.ActivitiesResponseDto](../../models/components/activitiesresponsedto.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |