# DeleteTopicSubscriptionsRequestDto

## Example Usage

```typescript
import { DeleteTopicSubscriptionsRequestDto } from "@novu/api/models/components";

let value: DeleteTopicSubscriptionsRequestDto = {
  subscriberIds: [
    "subscriberId1",
    "subscriberId2",
  ],
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `subscriberIds`                                                         | *string*[]                                                              | :heavy_check_mark:                                                      | List of subscriber identifiers to unsubscribe from the topic (max: 100) | [<br/>"subscriberId1",<br/>"subscriberId2"<br/>]                        |