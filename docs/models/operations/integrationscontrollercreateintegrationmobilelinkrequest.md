# IntegrationsControllerCreateIntegrationMobileLinkRequest

## Example Usage

```typescript
import { IntegrationsControllerCreateIntegrationMobileLinkRequest } from "@novu/api/models/operations";

let value: IntegrationsControllerCreateIntegrationMobileLinkRequest = {
  integrationIdentifier: "<value>",
  issueIntegrationMobileLinkRequestDto: {
    subscriberId: "subscriber-123",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `integrationIdentifier`                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `idempotencyKey`                                                                                                   | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | A header for idempotency purposes                                                                                  |
| `issueIntegrationMobileLinkRequestDto`                                                                             | [components.IssueIntegrationMobileLinkRequestDto](../../models/components/issueintegrationmobilelinkrequestdto.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |