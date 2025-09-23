# TranslationControllerDeleteTranslationGroupEndpointRequest

## Example Usage

```typescript
import { TranslationControllerDeleteTranslationGroupEndpointRequest } from "@novu/api/models/operations";

let value: TranslationControllerDeleteTranslationGroupEndpointRequest = {
  resourceType: "workflow",
  resourceId: "welcome-email",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `resourceType`                                                     | [operations.ResourceType](../../models/operations/resourcetype.md) | :heavy_check_mark:                                                 | Resource type                                                      | workflow                                                           |
| `resourceId`                                                       | *string*                                                           | :heavy_check_mark:                                                 | Resource ID                                                        | welcome-email                                                      |
| `idempotencyKey`                                                   | *string*                                                           | :heavy_minus_sign:                                                 | A header for idempotency purposes                                  |                                                                    |