# SubscribersControllerUpdateSubscriberPreferencesRequest

## Example Usage

```typescript
import { SubscribersControllerUpdateSubscriberPreferencesRequest } from "@novu/api/models/operations";

let value: SubscribersControllerUpdateSubscriberPreferencesRequest = {
  subscriberId: "<id>",
  patchSubscriberPreferencesDto: {
    channels: {},
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `subscriberId`                                                                                       | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `idempotencyKey`                                                                                     | *string*                                                                                             | :heavy_minus_sign:                                                                                   | A header for idempotency purposes                                                                    |
| `patchSubscriberPreferencesDto`                                                                      | [components.PatchSubscriberPreferencesDto](../../models/components/patchsubscriberpreferencesdto.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |