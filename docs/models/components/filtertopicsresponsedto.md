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
  page: 2543.56,
  pageSize: 580.29,
  totalCount: 4344.17,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `data`                                                       | [components.TopicDto](../../models/components/topicdto.md)[] | :heavy_check_mark:                                           | N/A                                                          |
| `page`                                                       | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `pageSize`                                                   | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `totalCount`                                                 | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |