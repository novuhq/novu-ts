# CreateIntegrationRequestDto

## Example Usage

```typescript
import { CreateIntegrationRequestDto } from "@novu/api/models/components";

let value: CreateIntegrationRequestDto = {
<<<<<<< Updated upstream
  channel: "push",
  providerId: "<value>",
=======
  channel: "chat",
  providerId: "<id>",
>>>>>>> Stashed changes
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `environmentId`                                                               | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `active`                                                                      | *boolean*                                                                     | :heavy_minus_sign:                                                            | If the integration is active the validation on the credentials field will run |
| `channel`                                                                     | [components.Channel](../../models/components/channel.md)                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `check`                                                                       | *boolean*                                                                     | :heavy_minus_sign:                                                            | N/A                                                                           |
| `conditions`                                                                  | [components.StepFilter](../../models/components/stepfilter.md)[]              | :heavy_minus_sign:                                                            | N/A                                                                           |
| `credentials`                                                                 | [components.CredentialsDto](../../models/components/credentialsdto.md)        | :heavy_minus_sign:                                                            | N/A                                                                           |
| `identifier`                                                                  | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `name`                                                                        | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `providerId`                                                                  | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |