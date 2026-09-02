# TopicResponseDto

## Example Usage

```typescript
import { TopicResponseDto } from "@novu/api/models/errors";

// No examples available for this model
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `id`                                             | *string*                                         | :heavy_check_mark:                               | The identifier of the topic                      | 64da692e9a94fb2e6449ad06                         |
| `key`                                            | *string*                                         | :heavy_check_mark:                               | The unique key of the topic                      | product-updates                                  |
| `name`                                           | *string*                                         | :heavy_minus_sign:                               | The name of the topic                            | Product Updates                                  |
| `data`                                           | Record<string, *any*>                            | :heavy_minus_sign:                               | Additional custom data associated with the topic | {<br/>"category": "product",<br/>"priority": 1<br/>} |
| `createdAt`                                      | *string*                                         | :heavy_minus_sign:                               | The date the topic was created                   | 2023-08-15T00:00:00.000Z                         |
| `updatedAt`                                      | *string*                                         | :heavy_minus_sign:                               | The date the topic was last updated              | 2023-08-15T00:00:00.000Z                         |