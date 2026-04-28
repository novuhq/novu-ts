# CreateDomainDto

## Example Usage

```typescript
import { CreateDomainDto } from "@novu/api/models/components";

let value: CreateDomainDto = {
  name: "<value>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `name`                                                                                  | *string*                                                                                | :heavy_check_mark:                                                                      | The domain name (e.g. "recent.dev")                                                     |
| `data`                                                                                  | Record<string, *string*>                                                                | :heavy_minus_sign:                                                                      | Optional string key-value metadata (max 10 keys, 500 characters total for keys+values). |