# OpsgenieIntegrationEndpointDto

## Example Usage

```typescript
import { OpsgenieIntegrationEndpointDto } from "@novu/api/models/components";

let value: OpsgenieIntegrationEndpointDto = {
  apiKey: "abcdefg-a25a-4652-883c-73703b12345",
  region: "us",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `apiKey`                                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Opsgenie API integration key (GenieKey) in UUID format. Stored encrypted on the linked channel connection.         | abcdefg-a25a-4652-883c-73703b12345                                                                                 |
| `region`                                                                                                           | [components.OpsgenieIntegrationEndpointDtoRegion](../../models/components/opsgenieintegrationendpointdtoregion.md) | :heavy_check_mark:                                                                                                 | Opsgenie account region that determines the alert API data-center endpoint.                                        | us                                                                                                                 |