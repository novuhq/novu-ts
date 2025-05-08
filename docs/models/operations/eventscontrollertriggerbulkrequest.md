# EventsControllerTriggerBulkRequest

## Example Usage

```typescript
import { EventsControllerTriggerBulkRequest } from "@novu/api/models/operations";

let value: EventsControllerTriggerBulkRequest = {
  bulkTriggerEventDto: {
    events: [
      {
        workflowId: "workflow_identifier",
        payload: {
          "comment_id": "string",
          "post": {
            "text": "string",
          },
        },
        overrides: {},
        to: [
          {
            topicKey: "<value>",
            type: "Subscriber",
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | A header for idempotency purposes                                                |
| `bulkTriggerEventDto`                                                            | [components.BulkTriggerEventDto](../../models/components/bulktriggereventdto.md) | :heavy_check_mark:                                                               | N/A                                                                              |