# AddAgentIntegrationRequestDto

## Example Usage

```typescript
import { AddAgentIntegrationRequestDto } from "@novu/api/models/components";

let value: AddAgentIntegrationRequestDto = {};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `integrationIdentifier`                                                                                                                                                | *string*                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                     | The integration identifier (same as in the integration store), not the internal document _id.                                                                          |
| `providerId`                                                                                                                                                           | *string*                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                     | Provider ID to auto-create a dedicated integration (e.g. novu-agent-email). When set, the server creates the integration if one does not already exist for this agent. |