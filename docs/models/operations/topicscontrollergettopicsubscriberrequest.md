# TopicsControllerGetTopicSubscriberRequest

## Example Usage

```typescript
import { TopicsControllerGetTopicSubscriberRequest } from "@novu/api/models/operations";

let value: TopicsControllerGetTopicSubscriberRequest = {
  externalSubscriberId: "<id>",
  topicKey: "<value>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `idempotencyKey`                   | *string*                           | :heavy_minus_sign:                 | A header for idempotency purposes  |
| `externalSubscriberId`             | *string*                           | :heavy_check_mark:                 | The external subscriber id         |
| `topicKey`                         | *string*                           | :heavy_check_mark:                 | The topic key                      |