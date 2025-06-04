# EventsControllerBroadcastEventToAllRequest

## Example Usage

```typescript
import { EventsControllerBroadcastEventToAllRequest } from "@novu/api/models/operations";

let value: EventsControllerBroadcastEventToAllRequest = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `idempotencyKey`                                                                                 | *string*                                                                                         | :heavy_minus_sign:                                                                               | A header for idempotency purposes                                                                |
| `triggerEventToAllRequestDto`                                                                    | [components.TriggerEventToAllRequestDto](../../models/components/triggereventtoallrequestdto.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |