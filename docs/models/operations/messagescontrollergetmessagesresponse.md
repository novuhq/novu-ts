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
    data: [
      {
        environmentId: "<id>",
        organizationId: "<id>",
        transactionId: "<id>",
      },
    ],
    pageSize: 4686.51,
    page: 9767.61,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.ActivitiesResponseDto](../../models/components/activitiesresponsedto.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |