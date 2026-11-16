# LayoutControlsDto

## Example Usage

```typescript
import { LayoutControlsDto } from "@novu/api/models/components";

let value: LayoutControlsDto = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `dataSchema`                                               | Record<string, *any*>                                      | :heavy_minus_sign:                                         | JSON Schema for data                                       |
| `uiSchema`                                                 | [components.UiSchema](../../models/components/uischema.md) | :heavy_minus_sign:                                         | UI Schema for rendering                                    |
| `values`                                                   | Record<string, *any*>                                      | :heavy_minus_sign:                                         | Email layout controls                                      |