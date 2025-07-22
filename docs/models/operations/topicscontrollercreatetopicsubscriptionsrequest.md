# TopicsControllerCreateTopicSubscriptionsRequest

## Example Usage

```typescript
import { TopicsControllerCreateTopicSubscriptionsRequest } from "@novu/api/models/operations";

let value: TopicsControllerCreateTopicSubscriptionsRequest = {
  topicKey: "<value>",
  createTopicSubscriptionsRequestDto: {
    subscriberIds: [
      "subscriberId1",
      "subscriberId2",
    ],
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `topicKey`                                                                                                     | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The key identifier of the topic                                                                                |
| `idempotencyKey`                                                                                               | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | A header for idempotency purposes                                                                              |
| `createTopicSubscriptionsRequestDto`                                                                           | [components.CreateTopicSubscriptionsRequestDto](../../models/components/createtopicsubscriptionsrequestdto.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |