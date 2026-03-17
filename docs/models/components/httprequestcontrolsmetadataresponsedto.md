# HttpRequestControlsMetadataResponseDto

## Example Usage

```typescript
import { HttpRequestControlsMetadataResponseDto } from "@novu/api/models/components";

let value: HttpRequestControlsMetadataResponseDto = {
  values: {
    method: "PATCH",
    url: "https://frightened-pillow.name",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `dataSchema`                                                                         | Record<string, *any*>                                                                | :heavy_minus_sign:                                                                   | JSON Schema for data                                                                 |
| `uiSchema`                                                                           | [components.UiSchema](../../models/components/uischema.md)                           | :heavy_minus_sign:                                                                   | UI Schema for rendering                                                              |
| `values`                                                                             | [components.HttpRequestControlDto](../../models/components/httprequestcontroldto.md) | :heavy_check_mark:                                                                   | Control values specific to HTTP Request step                                         |