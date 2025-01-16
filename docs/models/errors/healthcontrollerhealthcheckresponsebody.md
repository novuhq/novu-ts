# HealthControllerHealthCheckResponseBody

The Health Check is not successful

## Example Usage

```typescript
import { HealthControllerHealthCheckResponseBody } from "@novu/api/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `status`                                                                                          | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | error                                                                                             |
| `info`                                                                                            | Record<string, [errors.Info](../../models/errors/info.md)>                                        | :heavy_minus_sign:                                                                                | N/A                                                                                               | {<br/>"database": {<br/>"status": "up"<br/>}<br/>}                                                |
| `error`                                                                                           | Record<string, [errors.ErrorT](../../models/errors/errort.md)>                                    | :heavy_minus_sign:                                                                                | N/A                                                                                               | {<br/>"redis": {<br/>"status": "down",<br/>"message": "Could not connect"<br/>}<br/>}             |
| `details`                                                                                         | Record<string, [errors.Details](../../models/errors/details.md)>                                  | :heavy_minus_sign:                                                                                | N/A                                                                                               | {<br/>"database": {<br/>"status": "up"<br/>},<br/>"redis": {<br/>"status": "down",<br/>"message": "Could not connect"<br/>}<br/>} |