# TopicsControllerUpsertTopicRequest

## Example Usage

```typescript
import { TopicsControllerUpsertTopicRequest } from "@novu/api/models/operations";

let value: TopicsControllerUpsertTopicRequest = {
  failIfExists: false,
  createUpdateTopicRequestDto: {
    key: "task:12345",
    name: "Task Title",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `failIfExists`                                                                                   | *boolean*                                                                                        | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `idempotencyKey`                                                                                 | *string*                                                                                         | :heavy_minus_sign:                                                                               | A header for idempotency purposes                                                                |
| `createUpdateTopicRequestDto`                                                                    | [components.CreateUpdateTopicRequestDto](../../models/components/createupdatetopicrequestdto.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |