# CreateTopicSubscriptionsRequestDto

## Example Usage

```typescript
import { CreateTopicSubscriptionsRequestDto } from "@novu/api/models/components";

let value: CreateTopicSubscriptionsRequestDto = {
  subscriberIds: [
    "subscriberId1",
    "subscriberId2",
  ],
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `subscriberIds`                                                     | *string*[]                                                          | :heavy_check_mark:                                                  | List of subscriber identifiers to subscribe to the topic (max: 100) | [<br/>"subscriberId1",<br/>"subscriberId2"<br/>]                    |