# EnvironmentVariablesControllerListEnvironmentVariablesRequest

## Example Usage

```typescript
import { EnvironmentVariablesControllerListEnvironmentVariablesRequest } from "@novu/api/models/operations";

let value: EnvironmentVariablesControllerListEnvironmentVariablesRequest = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `search`                                                 | *string*                                                 | :heavy_minus_sign:                                       | Filter variables by key (case-insensitive partial match) |
| `idempotencyKey`                                         | *string*                                                 | :heavy_minus_sign:                                       | A header for idempotency purposes                        |