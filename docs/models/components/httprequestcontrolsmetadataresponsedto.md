# HttpRequestControlsMetadataResponseDto

## Example Usage

```typescript
import { HttpRequestControlsMetadataResponseDto } from "@novu/api/models/components";

let value: HttpRequestControlsMetadataResponseDto = {};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `dataSchema`                                                                                                                       | Record<string, *any*>                                                                                                              | :heavy_minus_sign:                                                                                                                 | JSON Schema for data                                                                                                               |
| `uiSchema`                                                                                                                         | [components.UiSchema](../../models/components/uischema.md)                                                                         | :heavy_minus_sign:                                                                                                                 | UI Schema for rendering                                                                                                            |
| `values`                                                                                                                           | [components.HttpRequestControlsMetadataResponseDtoValues](../../models/components/httprequestcontrolsmetadataresponsedtovalues.md) | :heavy_minus_sign:                                                                                                                 | Control values specific to HTTP Request step                                                                                       |