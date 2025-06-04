# SubscribersControllerPatchSubscriberRequest

## Example Usage

```typescript
import { SubscribersControllerPatchSubscriberRequest } from "@novu/api/models/operations";

let value: SubscribersControllerPatchSubscriberRequest = {
  subscriberId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `subscriberId`                                                                               | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `idempotencyKey`                                                                             | *string*                                                                                     | :heavy_minus_sign:                                                                           | A header for idempotency purposes                                                            |
| `patchSubscriberRequestDto`                                                                  | [components.PatchSubscriberRequestDto](../../models/components/patchsubscriberrequestdto.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |