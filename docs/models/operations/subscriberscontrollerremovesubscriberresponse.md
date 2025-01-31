# SubscribersControllerRemoveSubscriberResponse

## Example Usage

```typescript
import { SubscribersControllerRemoveSubscriberResponse } from "@novu/api/models/operations";

let value: SubscribersControllerRemoveSubscriberResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    acknowledged: true,
    status: "success",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `headers`                                                                                        | Record<string, *string*[]>                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `result`                                                                                         | [components.RemoveSubscriberResponseDto](../../models/components/removesubscriberresponsedto.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |