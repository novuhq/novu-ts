# TopicsControllerAddSubscribersRequest

## Example Usage

```typescript
import { TopicsControllerAddSubscribersRequest } from "@novu/api/models/operations";

let value: TopicsControllerAddSubscribersRequest = {
    topicKey: "<value>",
    addSubscribersRequestDto: {
        subscribers: ["<value>"],
    },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `topicKey`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | The topic key                                                                              |
| `addSubscribersRequestDto`                                                                 | [components.AddSubscribersRequestDto](../../models/components/addsubscribersrequestdto.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |