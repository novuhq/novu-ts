# DigestWithEventsDto

## Example Usage

```typescript
import { DigestWithEventsDto } from "@novu/api/models/components";

let value: DigestWithEventsDto = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `digestKey`                                                                         | *string*                                                                            | :heavy_minus_sign:                                                                  | Optional key for the digest                                                         |
| `amount`                                                                            | *number*                                                                            | :heavy_minus_sign:                                                                  | Amount for the digest                                                               |
| `unit`                                                                              | [components.Unit](../../models/components/unit.md)                                  | :heavy_minus_sign:                                                                  | Unit of the digest                                                                  |
| `events`                                                                            | Record<string, *any*>[]                                                             | :heavy_minus_sign:                                                                  | Optional array of events associated with the digest, represented as key-value pairs |