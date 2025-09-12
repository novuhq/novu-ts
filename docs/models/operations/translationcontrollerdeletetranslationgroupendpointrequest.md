# TranslationControllerDeleteTranslationGroupEndpointRequest

## Example Usage

```typescript
import { TranslationControllerDeleteTranslationGroupEndpointRequest } from "@novu/api/models/operations";

let value: TranslationControllerDeleteTranslationGroupEndpointRequest = {
  resourceType: "workflow",
  resourceId: "<id>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `resourceType`                                                     | [operations.ResourceType](../../models/operations/resourcetype.md) | :heavy_check_mark:                                                 | Resource type                                                      |
| `resourceId`                                                       | *string*                                                           | :heavy_check_mark:                                                 | Resource ID                                                        |
| `idempotencyKey`                                                   | *string*                                                           | :heavy_minus_sign:                                                 | A header for idempotency purposes                                  |