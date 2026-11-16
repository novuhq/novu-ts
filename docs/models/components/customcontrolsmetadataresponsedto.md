# CustomControlsMetadataResponseDto

## Example Usage

```typescript
import { CustomControlsMetadataResponseDto } from "@novu/api/models/components";

let value: CustomControlsMetadataResponseDto = {};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `dataSchema`                                                                                                             | Record<string, *any*>                                                                                                    | :heavy_minus_sign:                                                                                                       | JSON Schema for data                                                                                                     |
| `uiSchema`                                                                                                               | [components.UiSchema](../../models/components/uischema.md)                                                               | :heavy_minus_sign:                                                                                                       | UI Schema for rendering                                                                                                  |
| `values`                                                                                                                 | [components.CustomControlsMetadataResponseDtoValues](../../models/components/customcontrolsmetadataresponsedtovalues.md) | :heavy_minus_sign:                                                                                                       | Control values specific to Custom step                                                                                   |