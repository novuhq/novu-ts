# TestDomainRouteResponseDto

## Example Usage

```typescript
import { TestDomainRouteResponseDto } from "@novu/api/models/components";

let value: TestDomainRouteResponseDto = {
  matched: false,
  dryRun: false,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `matched`                                                                                                | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `dryRun`                                                                                                 | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `domainStatus`                                                                                           | [components.DomainStatus](../../models/components/domainstatus.md)                                       | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `mxRecordConfigured`                                                                                     | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `type`                                                                                                   | [components.TestDomainRouteResponseDtoType](../../models/components/testdomainrouteresponsedtotype.md)   | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `wouldDeliverTo`                                                                                         | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Human-readable delivery target summary in dry-run mode.                                                  |
| `payload`                                                                                                | [components.Payload](../../models/components/payload.md)                                                 | :heavy_minus_sign:                                                                                       | The outbound payload (dry-run only).                                                                     |
| `webhook`                                                                                                | [components.TestDomainRouteWebhookResultDto](../../models/components/testdomainroutewebhookresultdto.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `agent`                                                                                                  | [components.TestDomainRouteAgentResultDto](../../models/components/testdomainrouteagentresultdto.md)     | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |