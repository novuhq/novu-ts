# TranslationControllerUploadTranslationFilesRequest

## Example Usage

```typescript
import { TranslationControllerUploadTranslationFilesRequest } from "@novu/api/models/operations";

let value: TranslationControllerUploadTranslationFilesRequest = {
  uploadTranslationsRequestDto: {
    resourceId: "welcome-email",
    resourceType: "workflow",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                   | *string*                                                                                           | :heavy_minus_sign:                                                                                 | A header for idempotency purposes                                                                  |
| `uploadTranslationsRequestDto`                                                                     | [components.UploadTranslationsRequestDto](../../models/components/uploadtranslationsrequestdto.md) | :heavy_check_mark:                                                                                 | Translation upload details                                                                         |