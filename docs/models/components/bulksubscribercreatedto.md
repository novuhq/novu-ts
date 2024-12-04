# BulkSubscriberCreateDto

## Example Usage

```typescript
import { BulkSubscriberCreateDto } from "@novu/api/models/components";

let value: BulkSubscriberCreateDto = {
  subscribers: [
    "<value>",
  ],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `subscribers`                                  | *string*[]                                     | :heavy_check_mark:                             | An array of subscribers to be created in bulk. |