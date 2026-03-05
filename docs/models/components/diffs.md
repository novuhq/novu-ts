# Diffs

Detailed changes (only for modified resources)

## Example Usage

```typescript
import { Diffs } from "@novu/api/models/components";

let value: Diffs = {};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `previous`                                                | Record<string, *any*>                                     | :heavy_minus_sign:                                        | Previous state of the resource (null for added resources) |
| `new`                                                     | Record<string, *any*>                                     | :heavy_minus_sign:                                        | New state of the resource (null for deleted resources)    |