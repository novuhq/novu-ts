# MarkMessageActionAsSeenDto

## Example Usage

```typescript
import { MarkMessageActionAsSeenDto } from "@novu/api/models/components";

let value: MarkMessageActionAsSeenDto = {
    status: "pending",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `payload`                                                                                                  | [components.Payload](../../models/components/payload.md)                                                   | :heavy_minus_sign:                                                                                         | Message action payload                                                                                     |
| `status`                                                                                                   | [components.MarkMessageActionAsSeenDtoStatus](../../models/components/markmessageactionasseendtostatus.md) | :heavy_check_mark:                                                                                         | Message action status                                                                                      |