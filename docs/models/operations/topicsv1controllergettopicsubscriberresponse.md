# TopicsV1ControllerGetTopicSubscriberResponse

## Example Usage

```typescript
import { TopicsV1ControllerGetTopicSubscriberResponse } from "@novu/api/models/operations";

let value: TopicsV1ControllerGetTopicSubscriberResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    organizationId: "org_123456789",
    environmentId: "env_123456789",
    subscriberId: "sub_123456789",
    topicId: "topic_123456789",
    topicKey: "my_topic_key",
    externalSubscriberId: "external_subscriber_123",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `headers`                                                                      | Record<string, *string*[]>                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `result`                                                                       | [components.TopicSubscriberDto](../../models/components/topicsubscriberdto.md) | :heavy_check_mark:                                                             | N/A                                                                            |