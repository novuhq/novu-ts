# ListAgentIntegrationsResponseDto

## Example Usage

```typescript
import { ListAgentIntegrationsResponseDto } from "@novu/api/models/components";

let value: ListAgentIntegrationsResponseDto = {
  data: [
    {
      id: "<id>",
      agentId: "<id>",
      integration: {
        id: "<id>",
        identifier: "<value>",
        name: "<value>",
        providerId: "<id>",
        active: true,
      },
      environmentId: "<id>",
      organizationId: "<id>",
      createdAt: "1710365168729",
      updatedAt: "1735630562542",
    },
  ],
  next: null,
  previous: "<value>",
  totalCount: 5740.62,
  totalCountCapped: false,
};
```

## Fields

| Field                                                                                                                                                                                                          | Type                                                                                                                                                                                                           | Required                                                                                                                                                                                                       | Description                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                                                         | [components.AgentIntegrationResponseDto](../../models/components/agentintegrationresponsedto.md)[]                                                                                                             | :heavy_check_mark:                                                                                                                                                                                             | List of agent–integration links                                                                                                                                                                                |
| `next`                                                                                                                                                                                                         | *string*                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                             | The cursor for the next page of results, or null if there are no more pages.                                                                                                                                   |
| `previous`                                                                                                                                                                                                     | *string*                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                             | The cursor for the previous page of results, or null if this is the first page.                                                                                                                                |
| `totalCount`                                                                                                                                                                                                   | *number*                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                             | The total count of items (up to 50,000)                                                                                                                                                                        |
| `totalCountCapped`                                                                                                                                                                                             | *boolean*                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                             | Whether there are more than 50,000 results available                                                                                                                                                           |
| `planUsage`                                                                                                                                                                                                    | [components.PlanUsageDto](../../models/components/planusagedto.md)                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                             | Cloud only. Connected channel usage in this environment against the organization plan limit. Channels connected beyond the limit are flagged with `exceedsPlanLimit` and will not respond to inbound messages. |