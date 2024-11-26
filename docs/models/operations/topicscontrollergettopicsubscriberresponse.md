# TopicsControllerGetTopicSubscriberResponse

## Example Usage

```typescript
import { TopicsControllerGetTopicSubscriberResponse } from "@novu/api/models/operations";

let value: TopicsControllerGetTopicSubscriberResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    organizationId: "<id>",
    environmentId: "<id>",
    subscriberId: "<id>",
    topicId: "<id>",
    topicKey: "<value>",
    externalSubscriberId: "<id>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `headers`                                                                      | Record<string, *string*[]>                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `result`                                                                       | [components.TopicSubscriberDto](../../models/components/topicsubscriberdto.md) | :heavy_check_mark:                                                             | N/A                                                                            |