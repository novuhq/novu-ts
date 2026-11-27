# TopicsV1ControllerGetTopicSubscriberRequest

## Example Usage

```typescript
import { TopicsV1ControllerGetTopicSubscriberRequest } from "@novu/api/models/operations";

let value: TopicsV1ControllerGetTopicSubscriberRequest = {
  externalSubscriberId: "<id>",
  topicKey: "<value>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `externalSubscriberId`            | *string*                          | :heavy_check_mark:                | The external subscriber id        |
| `topicKey`                        | *string*                          | :heavy_check_mark:                | The topic key                     |
| `idempotencyKey`                  | *string*                          | :heavy_minus_sign:                | A header for idempotency purposes |