# SubscribersControllerUpdateSubscriberOnlineFlagResponse

## Example Usage

```typescript
import { SubscribersControllerUpdateSubscriberOnlineFlagResponse } from "@novu/api/models/operations";

let value: SubscribersControllerUpdateSubscriberOnlineFlagResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    subscriberId: "<id>",
    organizationId: "<id>",
    environmentId: "<id>",
    deleted: false,
    createdAt: "<value>",
    updatedAt: "<value>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [components.SubscriberResponseDto](../../models/components/subscriberresponsedto.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |