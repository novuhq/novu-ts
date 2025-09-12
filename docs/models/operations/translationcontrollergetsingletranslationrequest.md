# TranslationControllerGetSingleTranslationRequest

## Example Usage

```typescript
import { TranslationControllerGetSingleTranslationRequest } from "@novu/api/models/operations";

let value: TranslationControllerGetSingleTranslationRequest = {
  resourceType: "workflow",
  resourceId: "<id>",
  locale: "hi",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `resourceType`                                                                       | [operations.PathParamResourceType](../../models/operations/pathparamresourcetype.md) | :heavy_check_mark:                                                                   | Resource type                                                                        |
| `resourceId`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | Resource ID                                                                          |
| `locale`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | Locale code                                                                          |
| `idempotencyKey`                                                                     | *string*                                                                             | :heavy_minus_sign:                                                                   | A header for idempotency purposes                                                    |