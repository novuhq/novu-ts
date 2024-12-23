# UpdateIntegrationRequestDto

## Example Usage

```typescript
import { UpdateIntegrationRequestDto } from "@novu/api/models/components";

let value: UpdateIntegrationRequestDto = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `name`                                                                        | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `identifier`                                                                  | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `environmentId`                                                               | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `active`                                                                      | *boolean*                                                                     | :heavy_minus_sign:                                                            | If the integration is active the validation on the credentials field will run |
| `credentials`                                                                 | [components.CredentialsDto](../../models/components/credentialsdto.md)        | :heavy_minus_sign:                                                            | N/A                                                                           |
| `removeNovuBranding`                                                          | *boolean*                                                                     | :heavy_minus_sign:                                                            | If true, the Novu branding will be removed from the Inbox component           |
| `check`                                                                       | *boolean*                                                                     | :heavy_minus_sign:                                                            | N/A                                                                           |
| `conditions`                                                                  | [components.StepFilterDto](../../models/components/stepfilterdto.md)[]        | :heavy_minus_sign:                                                            | N/A                                                                           |