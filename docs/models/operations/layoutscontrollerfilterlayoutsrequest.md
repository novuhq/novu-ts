# LayoutsControllerFilterLayoutsRequest


## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `page`                                                   | *number*                                                 | :heavy_minus_sign:                                       | Number of page for pagination                            |
| `pageSize`                                               | *number*                                                 | :heavy_minus_sign:                                       | Size of page for pagination                              |
| `sortBy`                                                 | *string*                                                 | :heavy_minus_sign:                                       | Sort field. Currently only supported `createdAt`         |
| `orderBy`                                                | [operations.OrderBy](../../models/operations/orderby.md) | :heavy_minus_sign:                                       | Direction of the sorting query param                     |