# UpdateIntegrationRequestDto

## Example Usage

```typescript
import { UpdateIntegrationRequestDto } from "@novu/api/models/components";

let value: UpdateIntegrationRequestDto = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `environmentId`                                                               | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `active`                                                                      | *boolean*                                                                     | :heavy_minus_sign:                                                            | If the integration is active the validation on the credentials field will run |
| `check`                                                                       | *boolean*                                                                     | :heavy_minus_sign:                                                            | N/A                                                                           |
| `conditions`                                                                  | [components.StepFilter](../../models/components/stepfilter.md)[]              | :heavy_minus_sign:                                                            | N/A                                                                           |
| `credentials`                                                                 | [components.CredentialsDto](../../models/components/credentialsdto.md)        | :heavy_minus_sign:                                                            | N/A                                                                           |
| `identifier`                                                                  | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `name`                                                                        | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |