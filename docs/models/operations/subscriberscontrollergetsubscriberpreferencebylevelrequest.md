# SubscribersControllerGetSubscriberPreferenceByLevelRequest

## Example Usage

```typescript
import { SubscribersControllerGetSubscriberPreferenceByLevelRequest } from "@novu/api/models/operations";

let value: SubscribersControllerGetSubscriberPreferenceByLevelRequest = {
    parameter: "Subscriber",
    subscriberId: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `parameter`                                                  | [operations.Parameter](../../models/operations/parameter.md) | :heavy_check_mark:                                           | the preferences level to be retrieved( Subscriber / Topic)   |
| `subscriberId`                                               | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |