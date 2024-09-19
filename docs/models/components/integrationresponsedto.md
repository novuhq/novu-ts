# IntegrationResponseDto

## Example Usage

```typescript
import { IntegrationResponseDto } from "@novu/api/models/components";

let value: IntegrationResponseDto = {
  environmentId: "<value>",
  organizationId: "<value>",
  active: false,
  channel: "sms",
  credentials: {},
  deleted: false,
  deletedAt: "<value>",
  deletedBy: "<value>",
  identifier: "<value>",
  name: "<value>",
  primary: false,
  providerId: "<value>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `environmentId`                                                                                      | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `id`                                                                                                 | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `organizationId`                                                                                     | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `active`                                                                                             | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `channel`                                                                                            | [components.IntegrationResponseDtoChannel](../../models/components/integrationresponsedtochannel.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `conditions`                                                                                         | [components.StepFilter](../../models/components/stepfilter.md)[]                                     | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `credentials`                                                                                        | [components.CredentialsDto](../../models/components/credentialsdto.md)                               | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `deleted`                                                                                            | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `deletedAt`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `deletedBy`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `identifier`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `primary`                                                                                            | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `providerId`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |