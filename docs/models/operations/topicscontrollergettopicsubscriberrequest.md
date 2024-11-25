# TopicsControllerGetTopicSubscriberRequest

## Example Usage

```typescript
import { TopicsControllerGetTopicSubscriberRequest } from "@novu/api/models/operations";

let value: TopicsControllerGetTopicSubscriberRequest = {
<<<<<<< Updated upstream
  externalSubscriberId: "<value>",
=======
  externalSubscriberId: "<id>",
>>>>>>> Stashed changes
  topicKey: "<value>",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `externalSubscriberId`     | *string*                   | :heavy_check_mark:         | The external subscriber id |
| `topicKey`                 | *string*                   | :heavy_check_mark:         | The topic key              |