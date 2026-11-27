# TopicDto

## Example Usage

```typescript
import { TopicDto } from "@novu/api/models/components";

let value: TopicDto = {
  id: "64f5e95d3d7946d80d0cb677",
  key: "product-updates",
  name: "Product Updates",
  data: {
    "category": "product",
    "priority": 1,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The internal unique identifier of the topic                                                          | 64f5e95d3d7946d80d0cb677                                                                             |
| `key`                                                                                                | *string*                                                                                             | :heavy_check_mark:                                                                                   | The key identifier of the topic used in your application. Should be unique on the environment level. | product-updates                                                                                      |
| `name`                                                                                               | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The name of the topic                                                                                | Product Updates                                                                                      |
| `data`                                                                                               | Record<string, *any*>                                                                                | :heavy_minus_sign:                                                                                   | Additional custom data associated with the topic                                                     | {<br/>"category": "product",<br/>"priority": 1<br/>}                                                 |