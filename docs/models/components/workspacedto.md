# WorkspaceDto

## Example Usage

```typescript
import { WorkspaceDto } from "@novu/api/models/components";

let value: WorkspaceDto = {
  id: "T123456",
  name: "Acme HQ",
  botUserId: "U0123456789",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | N/A                | T123456            |
| `name`             | *string*           | :heavy_minus_sign: | N/A                | Acme HQ            |
| `botUserId`        | *string*           | :heavy_minus_sign: | N/A                | U0123456789        |