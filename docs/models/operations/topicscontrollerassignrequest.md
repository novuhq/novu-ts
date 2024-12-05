# TopicsControllerAssignRequest

## Example Usage

```typescript
import { TopicsControllerAssignRequest } from "@novu/api/models/operations";

let value: TopicsControllerAssignRequest = {
  topicKey: "<value>",
  addSubscribersRequestDto: {
    subscribers: [
      "<value>",
    ],
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `topicKey`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | The topic key                                                                              |
| `addSubscribersRequestDto`                                                                 | [components.AddSubscribersRequestDto](../../models/components/addsubscribersrequestdto.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |