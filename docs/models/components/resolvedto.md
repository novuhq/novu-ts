# ResolveDto

## Example Usage

```typescript
import { ResolveDto } from "@novu/api/models/components";

let value: ResolveDto = {
  summary: "Answered billing question about invoice INV-42.",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `summary`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | Optional human-readable resolution summary stored on the conversation. | Answered billing question about invoice INV-42.                        |