# DeleteMessagePayloadDto

## Example Usage

```typescript
import { DeleteMessagePayloadDto } from "@novu/api/models/components";

let value: DeleteMessagePayloadDto = {
  messageId: "1712345678.123456",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `messageId`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | Platform message id to delete. Removes the rendered message only — history is preserved. | 1712345678.123456                                                                        |