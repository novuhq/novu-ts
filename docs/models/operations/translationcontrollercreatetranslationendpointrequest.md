# TranslationControllerCreateTranslationEndpointRequest

## Example Usage

```typescript
import { TranslationControllerCreateTranslationEndpointRequest } from "@novu/api/models/operations";

let value: TranslationControllerCreateTranslationEndpointRequest = {
  createTranslationRequestDto: {
    resourceId: "welcome-email",
    resourceType: "workflow",
    locale: "en_US",
    content: {},
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `idempotencyKey`                                                                                 | *string*                                                                                         | :heavy_minus_sign:                                                                               | A header for idempotency purposes                                                                |
| `createTranslationRequestDto`                                                                    | [components.CreateTranslationRequestDto](../../models/components/createtranslationrequestdto.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |