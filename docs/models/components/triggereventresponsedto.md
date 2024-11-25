# TriggerEventResponseDto

## Example Usage

```typescript
import { TriggerEventResponseDto } from "@novu/api/models/components";

let value: TriggerEventResponseDto = {
  acknowledged: false,
  status: "error",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `acknowledged`                                                                                       | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | If trigger was acknowledged or not                                                                   |
| `status`                                                                                             | [components.TriggerEventResponseDtoStatus](../../models/components/triggereventresponsedtostatus.md) | :heavy_check_mark:                                                                                   | Status for trigger                                                                                   |
| `error`                                                                                              | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | In case of an error, this field will contain the error message                                       |
| `transactionId`                                                                                      | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Transaction id for trigger                                                                           |