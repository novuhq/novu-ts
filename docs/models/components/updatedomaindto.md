# UpdateDomainDto

## Example Usage

```typescript
import { UpdateDomainDto } from "@novu/api/models/components";

let value: UpdateDomainDto = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `data`                                                                                      | Record<string, *string*>                                                                    | :heavy_minus_sign:                                                                          | Replaces domain metadata when provided (max 10 keys, 500 characters total for keys+values). |