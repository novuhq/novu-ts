# BulkTriggerEventDto

## Example Usage

```typescript
import { BulkTriggerEventDto } from "@novu/api/models/components";

let value: BulkTriggerEventDto = {
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
      to: "SUBSCRIBER_ID",
      context: {
        "key": "org-acme",
      },
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `events`                                                                                 | [components.TriggerEventRequestDto](../../models/components/triggereventrequestdto.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |