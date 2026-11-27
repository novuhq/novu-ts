# DomainRouteResponseDto

## Example Usage

```typescript
import { DomainRouteResponseDto } from "@novu/api/models/components";

let value: DomainRouteResponseDto = {
  id: "<id>",
  domainId: "<id>",
  address: "31153 Terry Rest",
  type: "webhook",
  environmentId: "<id>",
  organizationId: "<id>",
  createdAt: "1723710808363",
  updatedAt: "1735638932741",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `domainId`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `address`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `agentId`                                                                                      | *string*                                                                                       | :heavy_minus_sign:                                                                             | Internal id of the destination agent. Only present for agent routes.                           |
| `type`                                                                                         | [components.DomainRouteResponseDtoType](../../models/components/domainrouteresponsedtotype.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `environmentId`                                                                                | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `organizationId`                                                                               | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createdAt`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `updatedAt`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `data`                                                                                         | Record<string, *string*>                                                                       | :heavy_minus_sign:                                                                             | String key-value metadata (max 10 keys, 500 characters total when set via API).                |