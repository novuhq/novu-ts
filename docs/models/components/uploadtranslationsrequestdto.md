# UploadTranslationsRequestDto

## Example Usage

```typescript
import { UploadTranslationsRequestDto } from "@novu/api/models/components";

let value: UploadTranslationsRequestDto = {
  resourceId: "welcome-email",
  resourceType: "workflow",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `resourceId`                                                                                                               | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The resource ID to associate localizations with. Accepts identifier or slug format                                         | welcome-email                                                                                                              |
| `resourceType`                                                                                                             | [components.UploadTranslationsRequestDtoResourceType](../../models/components/uploadtranslationsrequestdtoresourcetype.md) | :heavy_check_mark:                                                                                                         | The resource type to associate localizations with                                                                          |                                                                                                                            |