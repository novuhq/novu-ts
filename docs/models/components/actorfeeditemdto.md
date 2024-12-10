# ActorFeedItemDto

## Example Usage

```typescript
import { ActorFeedItemDto } from "@novu/api/models/components";

let value: ActorFeedItemDto = {
  data: {},
  type: "none",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `data`                                                                             | [components.ActorFeedItemDtoData](../../models/components/actorfeeditemdtodata.md) | :heavy_check_mark:                                                                 | The data associated with the actor, can be null if not applicable.                 |
| `type`                                                                             | [components.ActorTypeEnum](../../models/components/actortypeenum.md)               | :heavy_check_mark:                                                                 | The type of the actor, indicating the role in the notification process.            |