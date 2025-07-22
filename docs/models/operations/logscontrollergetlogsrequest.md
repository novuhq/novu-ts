# LogsControllerGetLogsRequest

## Example Usage

```typescript
import { LogsControllerGetLogsRequest } from "@novu/api/models/operations";

let value: LogsControllerGetLogsRequest = {};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `page`                            | *number*                          | :heavy_minus_sign:                | N/A                               |
| `limit`                           | *number*                          | :heavy_minus_sign:                | N/A                               |
| `statusCode`                      | *number*[]                        | :heavy_minus_sign:                | N/A                               |
| `url`                             | *string*                          | :heavy_minus_sign:                | N/A                               |
| `urlPattern`                      | *string*                          | :heavy_minus_sign:                | N/A                               |
| `transactionId`                   | *string*                          | :heavy_minus_sign:                | N/A                               |
| `created`                         | *number*                          | :heavy_minus_sign:                | N/A                               |
| `idempotencyKey`                  | *string*                          | :heavy_minus_sign:                | A header for idempotency purposes |