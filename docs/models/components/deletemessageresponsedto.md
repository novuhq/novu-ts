# DeleteMessageResponseDto

## Example Usage

```typescript
import { DeleteMessageResponseDto } from "@novu/api/models/components";

let value: DeleteMessageResponseDto = {
  acknowledged: false,
  status: "deleted",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `acknowledged`                                         | *boolean*                                              | :heavy_check_mark:                                     | A boolean stating the success of the action            |
| `status`                                               | [components.Status](../../models/components/status.md) | :heavy_check_mark:                                     | The status enum for the performed action               |