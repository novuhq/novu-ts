# TopicsControllerRemoveSubscribersRequest

## Example Usage

```typescript
import { TopicsControllerRemoveSubscribersRequest } from "@novu/api/models/operations";

let value: TopicsControllerRemoveSubscribersRequest = {
  topicKey: "<value>",
  removeSubscribersRequestDto: {
    subscribers: [
      "<value>",
    ],
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `idempotencyKey`                                                                                 | *string*                                                                                         | :heavy_minus_sign:                                                                               | A header for idempotency purposes                                                                |
| `topicKey`                                                                                       | *string*                                                                                         | :heavy_check_mark:                                                                               | The topic key                                                                                    |
| `removeSubscribersRequestDto`                                                                    | [components.RemoveSubscribersRequestDto](../../models/components/removesubscribersrequestdto.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |