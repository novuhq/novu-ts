# EventsControllerBroadcastEventToAllResponse

## Example Usage

```typescript
import { EventsControllerBroadcastEventToAllResponse } from "@novu/api/models/operations";

let value: EventsControllerBroadcastEventToAllResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    acknowledged: false,
    status: "processed",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [components.TriggerEventResponseDto](../../models/components/triggereventresponsedto.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |