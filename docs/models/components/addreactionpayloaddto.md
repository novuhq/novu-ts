# AddReactionPayloadDto

## Example Usage

```typescript
import { AddReactionPayloadDto } from "@novu/api/models/components";

let value: AddReactionPayloadDto = {
  messageId: "1712345678.123456",
  emojiName: "white_check_mark",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `messageId`                                                                 | *string*                                                                    | :heavy_check_mark:                                                          | Platform message id to react to.                                            | 1712345678.123456                                                           |
| `emojiName`                                                                 | *string*                                                                    | :heavy_check_mark:                                                          | Well-known cross-platform emoji name (e.g. `white_check_mark`, `thumbsup`). | white_check_mark                                                            |