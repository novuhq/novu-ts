# ListAgentsResponseDto

## Example Usage

```typescript
import { ListAgentsResponseDto } from "@novu/api/models/components";

let value: ListAgentsResponseDto = {
  data: [
    {
      id: "<id>",
      name: "<value>",
      identifier: "<value>",
      active: false,
      environmentId: "<id>",
      organizationId: "<id>",
      createdAt: "1722403508662",
      updatedAt: "1735687368043",
    },
  ],
  next: "<value>",
  previous: "<value>",
  totalCount: 2376.91,
  totalCountCapped: true,
};
```

## Fields

| Field                                                                                                                                                                                                 | Type                                                                                                                                                                                                  | Required                                                                                                                                                                                              | Description                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                                                | [components.AgentResponseDto](../../models/components/agentresponsedto.md)[]                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                    | List of returned agents                                                                                                                                                                               |
| `next`                                                                                                                                                                                                | *string*                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                    | The cursor for the next page of results, or null if there are no more pages.                                                                                                                          |
| `previous`                                                                                                                                                                                            | *string*                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                    | The cursor for the previous page of results, or null if this is the first page.                                                                                                                       |
| `totalCount`                                                                                                                                                                                          | *number*                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                    | The total count of items (up to 50,000)                                                                                                                                                               |
| `totalCountCapped`                                                                                                                                                                                    | *boolean*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                    | Whether there are more than 50,000 results available                                                                                                                                                  |
| `planUsage`                                                                                                                                                                                           | [components.AgentPlanUsageDto](../../models/components/agentplanusagedto.md)                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                    | Cloud only. Active agent usage in this environment against the organization plan limit. Agents created beyond the limit are flagged with `exceedsPlanLimit` and will not respond to inbound messages. |