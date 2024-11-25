# FilterTopicsResponseDto

## Example Usage

```typescript
import { FilterTopicsResponseDto } from "@novu/api/models/components";

let value: FilterTopicsResponseDto = {
  data: [
    {
<<<<<<< Updated upstream
      environmentId: "<value>",
      organizationId: "<value>",
=======
      environmentId: "<id>",
      organizationId: "<id>",
>>>>>>> Stashed changes
      key: "<key>",
      name: "<value>",
      subscribers: [
        "<value>",
      ],
    },
  ],
<<<<<<< Updated upstream
  page: 3637.11,
  pageSize: 3250.47,
  totalCount: 5701.97,
=======
  page: 8811.03,
  pageSize: 5812.73,
  totalCount: 8817.35,
>>>>>>> Stashed changes
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `data`                                                       | [components.TopicDto](../../models/components/topicdto.md)[] | :heavy_check_mark:                                           | N/A                                                          |
| `page`                                                       | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `pageSize`                                                   | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `totalCount`                                                 | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |