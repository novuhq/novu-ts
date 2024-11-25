# MessageMarkAsRequestDto

## Example Usage

```typescript
import { MessageMarkAsRequestDto } from "@novu/api/models/components";

let value: MessageMarkAsRequestDto = {
  markAs: "seen",
<<<<<<< Updated upstream
  messageId: "<value>",
=======
  messageId: [
    "<id>",
  ],
>>>>>>> Stashed changes
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `markAs`                                                                                             | [components.MessageMarkAsRequestDtoMarkAs](../../models/components/messagemarkasrequestdtomarkas.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `messageId`                                                                                          | *components.MessageId*                                                                               | :heavy_check_mark:                                                                                   | N/A                                                                                                  |