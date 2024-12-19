# BulkSubscriberCreateDto

## Example Usage

```typescript
import { BulkSubscriberCreateDto } from "@novu/api/models/components";

let value: BulkSubscriberCreateDto = {
  subscribers: [
    {
      subscriberId: "<id>",
      email: "example@example.com",
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `subscribers`                                                                                    | [components.CreateSubscriberRequestDto](../../models/components/createsubscriberrequestdto.md)[] | :heavy_check_mark:                                                                               | An array of subscribers to be created in bulk.                                                   | [<br/>{<br/>"email": "example@example.com",<br/>"name": "John Doe"<br/>}<br/>]                   |