# FilterTopicsResponseDto

## Example Usage

```typescript
import { FilterTopicsResponseDto } from "@novu/api/models/components";

let value: FilterTopicsResponseDto = {
  data: [
    {
      organizationId: "<id>",
      environmentId: "<id>",
      key: "<key>",
      name: "<value>",
      subscribers: [
        "<value>",
      ],
    },
  ],
  page: 7980.47,
  pageSize: 1856.36,
  totalCount: 9527.92,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `data`                                                       | [components.TopicDto](../../models/components/topicdto.md)[] | :heavy_check_mark:                                           | N/A                                                          |
| `page`                                                       | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `pageSize`                                                   | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `totalCount`                                                 | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |